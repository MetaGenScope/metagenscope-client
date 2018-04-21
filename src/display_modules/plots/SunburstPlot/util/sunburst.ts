import * as d3 from 'd3';

import { microbeDatabase } from './microbeDatabase';

export interface SunburstDataType {
  name: string;
  parent?: string;
  size: number;
  children: SunburstDataType[];
}

type Node = d3.HierarchyRectangularNode<SunburstDataType>;

function displayTaxaName(rawName: string) {
  const components = rawName.split('__');
  let level = components[0];
  const link = components[1];

  if (level === 'root') {
    return 'Root';
  } else if (level === 'd' || level === 'k') {
      level = 'Domain';
  } else if (level === 'p') {
      level = 'Phylum';
  } else if ( level === 'c') {
      level = 'Class';
  } else if ( level === 'o') {
      level = 'Order';
  } else if (level === 'f') {
      level = 'Family';
  } else if (level === 'g') {
      level = 'Genus';
  } else if (level === 's') {
      level = 'Species';
  } else if (level === 't') {
      level = 'Strain';
  }

  return `${level} ${link}`;
}

/**
 * Given a node in a partition layout, return an array of all of its ancestor
 * nodes, highest first, but excluding the root.
 * @param node
 */
function getAncestors(node: Node) {
  const ancestorPath: Node[] = [];
  let current = node;
  while (current.parent) {
    ancestorPath.unshift(current);
    current = current.parent;
  }
  return ancestorPath;
}

export interface SunburstOptionsType {
  data: SunburstDataType;
}

export default class Sunburst {

  protected rawRootDiv: HTMLDivElement;
  protected rootDiv: d3.Selection<HTMLDivElement, {}, null, undefined>;
  protected svg: d3.Selection<SVGSVGElement, {}, null, undefined>;

  /**
   * Create Sunburst plot
   * @param rootDiv - wrapping div element. Used to insert tooltip into
   * @param rootSvg - the SVG element
   */
  constructor(rootDiv: HTMLDivElement, rootSvg: SVGSVGElement) {
    this.rawRootDiv = rootDiv;
    this.rootDiv = d3.select(rootDiv);
    this.svg = d3.select(rootSvg);
  }

  /**
   * Render a Sunburst dataset, removing or adding SVG elements as necessary.
   * @param options - The Sunburst plot options.
   */
  update(options: SunburstOptionsType) {
    const width = 500,
          height = 400,
          radius = (Math.min(width, height) / 2) - 10;

    const x = d3.scaleLinear()
        .range([0, 2 * Math.PI]);
    const y = d3.scaleSqrt()
        .range([0, radius]);

    const color = d3.scaleOrdinal(d3.schemeCategory20c);

    const root = d3.hierarchy(options.data)
        .sum(d => d.size);

    // Create our sunburst data structure and size it.
    const partition = d3.partition<SunburstDataType>();
    const nodes = partition(root).descendants();

    // Calculate the sizes of each arc that we'll draw later.
    var arc = d3.arc<Node>()
        .startAngle(d => Math.max(0, Math.min(2 * Math.PI, x(d.x0))))
        .endAngle(d => Math.max(0, Math.min(2 * Math.PI, x(d.x1))))
        .innerRadius(d => Math.max(0, y(d.y0)))
        .outerRadius(d => Math.max(0, y(d.y1)));

    const canvas = this.svg
        .attr('width', width)
        .attr('height', height)
        .append('g')
            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
            .on('mouseleave', onMouseLeave);

    // Add a <g> element for each node in thd data, then append <path> elements and draw lines based on the arc
    // variable calculations. Last, color the lines and the slices.
    canvas.selectAll('path')
        .data(nodes)
            .enter().append('g')
                .attr('class', 'node')
              .append('path')
                  .attr('d', arc)
                  .style('fill', d => color((d.children ? d : d.parent!).data.name))
                  .on('mouseover', onMouseOver)
                  .on('click', click);

    function click(d: Node) {
      canvas.transition()
          .duration(750)
          .tween('scale', function() {
            // When zooming: interpolate the scales.
            const xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
                  yd = d3.interpolate(y.domain(), [d.y0, 1]),
                  yr = d3.interpolate(y.range(), [d.y0 ? 20 : 0, radius]);
            return (t: number) => {
              x.domain(xd(t));
              y.domain(yd(t)).range(yr(t));
            };
          })
          .selectAll('path')
              .attrTween('d', (node: Node) => (t => arc(node)!));
    }

    /**
     * Fade all but the current sequence, and show it in the breadcrumb trail.
     * @param d
     */
    function onMouseOver(d: Node) {
      const percentage = parseFloat((d.value!).toPrecision(3)!)!;
      const percentageString = (percentage < 0.1) ? '< 0.1%' : `${percentage}%`;
      d3.select('#sunburstPercentage')
          .text(percentageString);
      d3.select('#sunburstCurrentTaxa')
          .text(displayTaxaName(d.data.name));
      d3.select('#sunburstExplanation')
          .style('visibility', '');

      const sequenceArray = getAncestors(d);

      // Not sure what this does yet
      updateBreadcrumbs(sequenceArray, percentageString);

      // Fade all the segments.
      canvas.selectAll('path')
        .style('opacity', 0.3);

      // Then highlight only those that are an ancestor of the current segment.
      canvas.datum(root).selectAll('path')
          .filter((node: Node) => sequenceArray.indexOf(node) >= 0)
          .style('opacity', 1);
    }

    /**
     * Restore everything to full opacity when moving off the visualization.
     * First, deactivate all segments during transition.
     * Then, transition each segment to full opacity and then reactivate it.
     * @param d
     */
    function onMouseLeave(d: Node) {
      canvas.selectAll('path')
          .on('mouseover', null)
          .transition()
          .duration(300)
          .style('opacity', 1.0)
          .on('end', function() {
            d3.select(this).on('mouseover', onMouseOver);
          });
    }
  }

  /**
   * Handle removal from DOM tree.
   *
   * Note: this may be unnecessary / overkill
   */
  teardown() {
    // Remove elements
    // this.tooltip.remove();
    // this.canvas.remove();
  }
}

function updateBreadcrumbs(nodeArray: Node[], percentageString: string) {
  // Clear current values
  d3.select('#sunburstAnnColumn').html('');

  if (nodeArray.length !== 7) {
    return;
  }

  const curSpecies = nodeArray[6];
  const speciesName = displayTaxaName(curSpecies.data.name);
  let curRectCount = 0;
  const marLeft = 0,
        marTop = 30,
        rectWidth = 180,
        rectHeight = 40;

  function addAnnotation(boxText: string, boxColor: string) {
    d3.select('#sunburstAnnColumn').append('svg:rect')
        .attr('x', marLeft)
        .attr('y', marTop + (curRectCount * (rectHeight + 10)))
        .attr('width', rectWidth)
        .attr('height', rectHeight)
        .attr('fill', boxColor);
    d3.select('#sunburstAnnColumn').append('text')
        .attr('x', marLeft + rectWidth / 2)
        .attr('y', marTop + rectHeight / 2 + (curRectCount * (rectHeight + 10)))
        .attr('dy', '0.35em')
        .attr('text-anchor', 'middle')
        .text(boxText);
    curRectCount++;
  }

  function annotationBinary(data: number, boxText1: string, boxText0: string, boxColor1: string, boxColor0: string) {
    if (data !== undefined) {
      if (data === 0) {
        addAnnotation(boxText0, boxColor0);
      }
      if (data === 1) {
        addAnnotation(boxText1, boxColor1);
      }
    }
  }

  if (microbeDatabase[speciesName] !== undefined) {
    const curMic = microbeDatabase[speciesName];

    if (curMic.HMP_airways !== undefined && curMic.HMP_airways === 1) {
      addAnnotation('Human Airways microbiome', '#bebada');
    }
    if (curMic.HMP_blood !== undefined && curMic.HMP_blood === 1) {
      addAnnotation('Human Blood Microbiome', '#bebada');
    }
    if (curMic.HMP_gastrointestinalTract !== undefined && curMic.HMP_gastrointestinalTract === 1) {
      addAnnotation('Human Gastrointestinal tract', '#bebada');
    }
    if (curMic.HMP_oral !== undefined && curMic.HMP_oral === 1) {
      addAnnotation('Human Oral microbiome', '#bebada');
    }
    if (curMic.HMP_skin !== undefined && curMic.HMP_skin === 1) {
      addAnnotation('Human Skin microbiome', '#bebada');
    }
    if (curMic.HMP_urogenitalTract !== undefined && curMic.HMP_urogenitalTract === 1) {
      addAnnotation('Human Urogenital tract', '#bebada');
    }
    if (curMic.HMP_unknown !== undefined && curMic.HMP_unknown === 1) {
      addAnnotation('Other Human microbiome', '#bebada');
    }

    if (curMic.pathogenicity !== undefined) {
      const cogem = curMic.pathogenicity;
      if (cogem === 1) {
        addAnnotation('COGEM risk class 1', '#9BB899');
      }
      if (cogem === 2) {
        addAnnotation('COGEM risk class 2', '#FCCEAA');
      }
      if (cogem === 3) {
        addAnnotation('COGEM risk class 3', '#F5827D');
      }
      if (cogem === 4) {
        addAnnotation('COGEM risk class 4', '#EA4961');
      }
    }

    annotationBinary(
      curMic.animal_pathogen,
      'Potential Animal Pathogen',
      'Non-pathogenic to animals',
      '#F08A5D',
      '#495664'
    );
    annotationBinary(
      curMic.plant_pathogen,
      'Potential Plant Pathogen',
      'Non-pathogenic to plants',
      '#F08A5D',
      '#495664'
    );

    if (curMic.gram_stain !== undefined) {
      const gram_stain = curMic.gram_stain;
      if (gram_stain === 0) {
        addAnnotation('Gram-stain negative', '#ffffb3');
      }
      if (gram_stain === 1) {
        addAnnotation('Gram-stain positive', '#8dd3c7');
      }
    }

    if (curMic.optimal_temperature !== undefined) {
      addAnnotation(`Optimal Temperature: ${curMic.optimal_temperature}`, '#b3de69');
    }
    if (curMic.optimal_pH !== undefined) {
      addAnnotation(`Optimal pH: ${curMic.optimal_pH}`, '#b3de69');
    }
    annotationBinary(curMic.biofilm_forming, 'Biofilm forming', 'Doesn\'t form biofilm', '#fccde5', '#495664');
    annotationBinary(curMic.spore_forming, 'Spore forming', 'Doesn\'t form spores', '#fccde5', '#495664');
    annotationBinary(curMic.extreme_environment, 'Extremophilic', 'Non-extremophilic', '#fccde5', '#495664');
    annotationBinary(
      curMic.antimicrobial_susceptibility,
      'Anti-microbial susceptible',
      'Anti-microbial non-susceptible',
      '#495664',
      '#fb8072'
    );
  }
  if (curRectCount === 0) {
    addAnnotation('No annotations found', '#BBBBBB');
  }
}

/*
var start_zoomable_sunburst = function(tree_url, container, vizControl) {
  d3.json<SunburstDataType>(tree_url, function(err, tool) {
      sunburstVizControl(tool, vizControl, container);
      makeThePlot(tool, container);
  });
};

var sunburstVizControl = function(data, vizcontrol, plotContainer){
  var viztable = vizcontrol
      .append('table')
      .attr('align', 'center');
  viztable
      .append('tr')
      .append('td')
      .attr('align', 'left')
      .text('Tool');

  var tools = Object.keys(data);

  // Positions
  for (var i=0; i < tools.length; i++) {
    (function () {
      var tool = tools[i];
      var elName = tool+'_sburst_el';
      var elLabel = tool + '_sburst_label';

      var row = viztable.append('tr').append('td').attr('align', 'left');
      var inp = row
          .append('input')
          .attr('name', 'sburstTool')
          .attr('id', elName)
          .attr('type', 'radio')
          .attr('value', elName);

      if (i === 0) {
        inp.attr('checked', 'checked');
      }
      row.append('label').html('&nbsp; ' + tool).attr('id', elLabel);

      document.getElementById(elName)
          .addEventListener('change', function() {
            plotContainer.selectAll('*').remove();
            makeThePlot(data[tool], plotContainer);
          });
    }());
  }
};

var makeThePlot = function(root, container) {

  // Keep track of the node that is currently being displayed as the root.
  var node;

  // Setup for switching data: stash the old values for transition.
  function stash(d) {
    d.x0 = d.x;
    d.dx0 = d.dx;
  }

  // When switching data: interpolate the arcs in data space.
  function arcTweenData(a, i) {
    var oi = d3.interpolate({x: a.x0, dx: a.dx0}, a);
    function tween(t) {
      var b = oi(t);
      a.x0 = b.x;
      a.dx0 = b.dx;
      return arc(b);
    }
    if (i === 0) {
      // If we are on the first arc, adjust the x domain to match the root node
      // at the current zoom level. (We only need to do this once.)
      var xd = d3.interpolate(x.domain(), [node.x, node.x + node.dx]);
      return function(t) {
        x.domain(xd(t));
        return tween(t);
      };
    } else {
      return tween;
    }
  }

  function sunburstClick(d) {
    let mouseClicked = !mouseClicked;
    if (mouseClicked) {
      d3.select('#sunburstSVG').on('mouseleave', null);
      vis.data([treeJson]).selectAll('path').on('mouseover', null);
      mouseover(d);
    } else {
      d3.select('#sunburstSVG').on('mouseleave', mouseleave);
      vis.data([treeJson]).selectAll('path').on('mouseover', mouseover);
    }
  }

  node = root;
  var path = svg.datum(root).selectAll('path')
      .data(partition.nodes)
      .enter().append('path')
          .attr('d', arc)
          .style('fill', function(d) { return color((d.children ? d : d.parent).name); })
          .on('click', click)
          .on('mouseover', mouseover)
          .each(stash);

  d3.selectAll('input')
      .on('change', function change() {
          var value = this.value === 'count'
            ? function() { return 1; }
            : function(d) { return d.size; };

          path.data(partition.value(value).nodes)
              .transition()
              .duration(1000)
              .attrTween('d', arcTweenData);
      });
};
*/
