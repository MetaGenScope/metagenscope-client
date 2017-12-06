import * as d3 from 'd3';
import * as d3_sankey from 'd3-sankey';
// import * as chroma from 'chroma-js';

// Input Types

export type Link = {
  source: string;
  target: string;
  value: number;
};

export interface Time {
  id: string;
  nodeName: string;
  nodeValue: number;
}

export interface Data {
  links: Link[];
  times: Time[][];
}

// Display Types

export type DisplayLink = {
  source: string;
  target: string;
  value: number;
  inOffset: number;
  outOffset: number;
};

export interface DisplayNode {
  id: string;
  nodeName: string;
  nodeValue: number;
  links: DisplayLink[];
  incoming: DisplayLink[];
  outgoing: DisplayLink[];
  order: number;
  offsetValue: number;
}

type SankeyNode = d3_sankey.SankeyNode<Time, {}>;

const rankNames = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species', 'Sample'];

export function createTaxonAbundance(rootDiv: HTMLDivElement, rawSVG: SVGSVGElement, inputData: Data) {
  // Validate input
  if (inputData.times.length !== rankNames.length) {
    throw new Error(`inputData.times does not match expected length of ${rankNames.length}`);
  }

  // Set up canvas
  const boundingSize = d3.select(rootDiv).node()!.getBoundingClientRect(),
      canvasWidth = boundingSize.width,
      canvasHeight = canvasWidth * 3 / 4,
      svg = d3.select(rawSVG)
        .attr('width', canvasWidth)
        .attr('height', canvasHeight);

  // Define constants
  const nodeWidth = 20,
        nodePadding = 1,
        color = d3.scaleOrdinal(d3.schemeCategory20);

  // Create Sankey graph helper
  const sankey = d3_sankey.sankey<Time, {}>()
      .nodeWidth(nodeWidth)
      .nodePadding(nodePadding)
      .nodeId(n => n.id)
      .nodeAlign(d3_sankey.sankeyLeft)
      .extent([[1, 30], [canvasWidth - 1, canvasHeight - 1]]);

  // Render titles for each rank
  rankNames.forEach((name, index, arr) => {
    const isLast = index === arr.length - 1;
    const anchor = (index === 0) ? 'beginning' : (!isLast ? 'middle' : 'end');
    svg.append('text')
      .attr('x', index * canvasWidth / (arr.length - 1))
      .attr('text-anchor', anchor)
      .attr('y', 15)
      .text(name);
  });

  // Create group to hold all the links
  let linksGroup = svg.append('g')
      .attr('class', 'links')
      .attr('fill', 'none')
      .attr('stroke', '#000')
      .attr('stroke-opacity', 0.2)
    .selectAll('path');

  // Create group to hold all the nodes
  let nodesGroup = svg.append('g')
      .attr('class', 'nodes')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 10)
      .attr('width', canvasWidth)
      .attr('height', canvasHeight)
    .selectAll('g');

  // Flatten and convert input nodes
  const sankeyNodes: SankeyNode[] = [];
  inputData.times.forEach((rank, depth) => {
    rank.forEach(n => {
      sankeyNodes.push(Object.assign({depth}, n));
    });
  });

  // Create Sankey graph from inputs
  const graph: d3_sankey.SankeyGraph<Time, {}> = {
    nodes: sankeyNodes,
    links: inputData.links,
  };

  // Perform inital layout pass
  sankey(graph);

  // Vertically align and sort nodes in each rank
  inputData.times.forEach(rank => {
    // Get matching set of rank nodes from the flattened graph nodes
    const graphNodes = rank.map(rankNode => {
      return graph.nodes.find(n => n.id === rankNode.id)!;
    });
    // Sort by y0, y1 delta because .height property is not correct
    graphNodes.sort((a, b) => d3.descending((a.y1! - a.y0!), (b.y1! - b.y0!)));

    // Update node y positions
    let yOffset = sankey.extent()[0][1];
    graphNodes.forEach(graphNode => {
      const height = graphNode.y1! - graphNode.y0!;
      graphNode.y0 = yOffset;
      graphNode.y1 = yOffset + height;
      yOffset = yOffset + height + nodePadding;
    });
  });

  // Perform second layout pass to update link paths for the new node posiitons
  sankey.update(graph);

  // Render links
  linksGroup.data(graph.links)
    .enter().append('path')
    .attr('d', d3_sankey.sankeyLinkHorizontal())
    .attr('class', 'link')
    .attr('stroke-width', (d) => Math.max(1, d.width!));

  // Render nodes
  let nodes = nodesGroup
    .data(graph.nodes)
    .enter().append('g');

  nodes.append('rect')
    .attr('x', (d) => d.x0!)
    .attr('y', (d) => d.y0!)
    .attr('height', (d) => d.y1! - d.y0!)
    .attr('width', (d) => d.x1! - d.x0!)
    .attr('fill', (d) => color(d.nodeName.replace(/ .*/, '')))
    .attr('stroke', 'none')
    .attr('class', 'node');
}

/*

  // Flattened node structure
  const displayNodesById: Map<string, DisplayNode> = new Map();

  // Flattened times structure of just node IDs which we then look up in the above map
  const nodeIdsByRankIndex: string[][] = [];

  // Populate nodeIdsByLevel and displayNodesById
  inputData.times.forEach((column, index) => {
    nodeIdsByRankIndex[index] = column.map(time => time.id);

    column.forEach(time => {
      const displayNodeDefaults = {
        links: [] as DisplayLink[],
        incoming: [] as DisplayLink[],
        outgoing: [] as DisplayLink[],
        order: 0,
        offsetValue: 0,
      };
      const node: DisplayNode = Object.assign(displayNodeDefaults, time);
      displayNodesById.set(time.id, node);
    });
  });

  // Attach links to nodes
  inputData.links.forEach((link) => {
    const displayLink = Object.assign({inOffset: 0, outOffset: 0}, link);
    const sourceMatch = displayNodesById.get(link.source)!;
    sourceMatch.links.push(displayLink);
    sourceMatch.outgoing.push(displayLink);
    const targetMatch = displayNodesById.get(link.target)!;
    // targetMatch.links.push(displayLink);
    targetMatch.incoming.push(displayLink);
  });

  // Calculate maxes
  const maxNumber = d3.max(nodeIdsByRankIndex, (rank) =>rank.length) || 0;
  const maxValue = d3.max(nodeIdsByRankIndex, (rank) => {
    return d3.sum(rank, (nodeId) => {
      const node = displayNodesById.get(nodeId);
      return (node !== undefined) ? node.nodeValue : 0;
    });
  })!;

  // Settings and scales
  const gapRatio = 0.7,
        padding = 1,
        x = d3.scaleBand<number>()
          .domain(d3.range(nodeIdsByRankIndex.length))
          .rangeRound([0, canvasWidth + ( canvasWidth / (nodeIdsByRankIndex.length - 1))])
          .padding(gapRatio),
        y = d3.scaleLinear()
          .domain([0, maxValue])
          .range([0, canvasHeight - padding * maxNumber]),
        line = d3.line()
          .curve(d3.curveBasis);

  const drawRank = function(index: number) {
    console.log('drawing step', index);

    const isFirstRank = (index === 0),
          isSamplesCol = index === (rankNames.length - 1);

    // Update data
    const rankNodes = nodeIdsByRankIndex.slice(0, index + 1).map(nodeIds => {
      return nodeIds.map(nodeId => {
        const node = displayNodesById.get(nodeId);
        if (node === undefined) {
          throw new Error(`Internal inconsistency: node with id '${nodeId}' not found!`);
        }
        return node;
      });
    });

    // Taxonomix rank slots
    const rankSlotPaddingTop = 20;
    const ranks = svg.selectAll('g.time')
      .data(rankNodes)
      .enter().append('svg:g')
        .attr('class', 'time')
        .attr('transform', (node, index) => {
          return `translate(${(x(index)! - x(0)!)}, ${rankSlotPaddingTop})`
        });

    // Node bars
    const nodes = ranks.selectAll('g.node')
      .data(d => d)
      .enter().append('svg:g')
      .on('mouseover', function(node: DisplayNode) {
        svg.selectAll('.link')
          .attr('class', (d: Link) => {
            if (d.source === node.id || d.target === node.id) {
              return 'link on';
            }
            return 'link';
          });
        d3.select(this).attr('class', 'node on');
      })
      .on('mouseout', function() {
        svg.selectAll('.link.on').attr('class', 'link');
        d3.select(this).attr('class', 'node');
      })
      .attr('class', 'node');

    let cols: string[];
    if (isFirstRank) {
      const nodeCount = rankNodes[0].length;
      const scaleValues = ['green', 'yellow', 'orange', 'red', 'pink', 'purple', 'blue'];
      cols = chroma.scale(scaleValues).colors(nodeCount + 1);
    }

    let nodeColorMap = new Map<string, [string, string, string, string[], Map<string, number>]>();
    if (isFirstRank) {
      nodes.append('svg:rect')
        .attr('fill', (n, index) => {
          let col: string, col1: string, col2: string;
          if (index === 0) {
            col1 = chroma.mix('green', 'blue').brighten(2).hex();
            col2 = chroma.mix('green', 'yellow').brighten(2).hex();
            col = 'green';
          } else if (index === 1) {
            col1 = 'red';
            col2 = chroma('blue').brighten(4).hex();
            col = 'red';
          } else if (index === 2) {
            col1 = 'blue';
            col2 = 'green';
            col = 'blue';
          } else {
            col1 = cols[index];
            col2 = cols[index + 1];
            col = chroma.mix(col1, col2).hex();
          }

          const nChildren = n.links.length;
          const childCols = chroma.scale([col1, col, col2]).colors(nChildren + 1);
          const childInds = new Map<string, number>();
          n.links.shuffled().forEach((link, i) => {
            childInds.set(link.target, i);
          });
          nodeColorMap.set(n.id, [col1, col, col2, childCols, childInds]);
          return col;
        })
        .attr('y', (n, i) => {
            return y(n.offsetValue) + i * padding;
        })
        .attr('width', x.bandwidth())
        .attr('height', (n) => y(n.nodeValue))
        .append('svg:title')
        .text((n) => n.nodeName);
    } else {
      setTimeout(function() {
        nodes.append('svg:rect')
          .attr('fill', (n, i) => {
            let col: string, col1: string, col2: string;
            if (isSamplesCol) {
              return chroma('slategray').hex();
            } else {
              const parentNode = n.incoming[0].source;
              if (!nodeColorMap.has(parentNode)) {
                return 'red';
              }
              cols = nodeColorMap.get(parentNode)![3];
              i = nodeColorMap.get(parentNode)![4].get(n.id)!;
              col1 = cols[i];
              col2 = cols[i + 1];
              col = chroma.mix(col1, col2).hex();
              const nChildren = n.links.length;
              const childCols = chroma.scale([col1, col, col2]).colors(nChildren + 1);
              const childInds = new Map<string, number>();
              n.links.shuffled().forEach((link, index) => {
                  childInds.set(link.target, i);
              });
              nodeColorMap.set(n.id, [col1, col, col2, childCols, childInds]);
              return col;
            }
          })
          .attr('y', (n, i) => y(n.offsetValue) + i * padding)
          .attr('width', x.bandwidth())
          .attr('height', (n) => y(n.nodeValue))
          .append('svg:title')
          .text((n) => n.nodeName);
      }, (isFirstRank ? 0 : delay));
    }

    const textX = index * (x.bandwidth() + x(0)!);
    svg.append('text')
      .attr('x', textX)
      .attr('y', 10)
      .text(rankNames[index]);

    const linkLine = function(start: boolean) {
      return function(l: DisplayLink) {
        // Safely get source and target nodes
        const source = displayNodesById.get(l.source),
              target = displayNodesById.get(l.target);
        if (source === undefined || target === undefined) {
          throw new Error('Internal inconsistency: source or target not found!');
        }

        const gapWidth = x(0)!,
              bandWidth = x.bandwidth() + gapWidth,
              startx = x.bandwidth() - bandWidth,
              sourcey = y(source.offsetValue)
                + source.order * padding
                + y(l.outOffset)
                + y(l.value) / 2,
              targety = y(target.offsetValue) +
                + target.order * padding
                + y(l.inOffset)
                + y(l.value) / 2;

        let points: [number, number][];
        if (start) {
          points = [
            [ startx, sourcey ],
            [ startx, sourcey ],
            [ startx, sourcey ],
            [ startx, sourcey ],
          ];
        } else {
          points = [
            [ startx, sourcey ],
            [ startx + gapWidth! / 2, sourcey],
            [ startx + gapWidth! / 2, targety],
            [ 0, targety ]
          ];
        }
        return line(points);
      };
    };

    // Links
    nodes.selectAll('path.link')
      .data((n) => n.incoming || [])
      .enter().append('svg:path')
        .attr('class', 'link')
        .style('stroke-width', (link) => y(link.value))
        .attr('d', (d) => linkLine(true)(d))
        .attr('stroke', (link, i) => {
          if (!nodeColorMap.has(link.source)) {
            return 'grey';
          }
          return nodeColorMap.get(link.source)![1];
        })
        .on('mouseover', function() {
          d3.select(this).attr('class', 'link on');
        })
        .on('mouseout', function() {
          d3.select(this).attr('class', 'link');
        })
        .transition()
        .duration(delay)
        .attr('d', (d) => linkLine(false)(d));
  }

  // for (let i = 0; i < nodeIdsByRankIndex.length; i++) {
  //   setTimeout(() => {
  //     const rank = i;
  //     drawRank(rank);
  //   }, delay * i);
  // }
  let depthPass = 0;
  function updateNext() {
    if (depthPass < rankNames.length) {
      // const isSamplesCol = (depthPass === rankNames.length - 1);
      drawRank(depthPass);
      window.setTimeout(updateNext, delay);
      depthPass++;
    }
  }

  drawRank(0);
  updateNext();
}
*/
