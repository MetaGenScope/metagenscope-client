import * as d3 from 'd3';
import * as chroma from 'chroma-js';

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

export interface Node {
  id: string;
  name: string;
  value: number;
  links: Link[];
  incoming: Link[];
}

export interface Links {
  links: Link[];
  incoming: Link[];
  outgoing: Link[];
}

export interface SortedTime extends Time {
  order: number;
  offsetValue: number;
}

export interface FubarLink extends Link {
  inOffset: number;
  outOffset: number;
}

export interface Fubar {
  id: string;
  nodeName: string;
  nodeValue: number;
  links: FubarLink[];
  incoming: FubarLink[];
  outgoing: FubarLink[];
  order: number;
  offsetValue: number;
}

export function createTaxonAbundance(rootDiv: HTMLDivElement,
                                     rawSVG: SVGSVGElement,
                                     inputData: Data) {
  const boundingSize = d3.select(rootDiv).node()!.getBoundingClientRect(),
        canvasWidth = boundingSize.width,
        canvasHeight = canvasWidth * 9 / 16,
        svg = d3.select(rawSVG)
          .attr('width', canvasWidth)
          .attr('height', canvasHeight);

  // Make a node lookup map
  const TIMES: Fubar[][] = inputData.times.map(times => {
    return times.map(time => {
      return Object.assign({
        links: [] as FubarLink[],
        incoming: [] as FubarLink[],
        outgoing: [] as FubarLink[],
        order: 0,
        offsetValue: 0,
      }, time);
    });
  });
  let nodeMap = (() => {
    let nm = new Map<string, Node>();
    TIMES.forEach((nodes) => {
      nodes.forEach((n) => {
        nm[n.id] = n;
      });
    });
    return nm;
  })();

  // Attach links to nodes
  inputData.links.forEach((link) => {
      nodeMap[link.source].links.push(link);
      nodeMap[link.target].incoming.push(link);
  });

  // Sort by value and calculate offsets
  TIMES.forEach((nodes) => {
    let cumValue = 0;
    nodes.sort((a, b) => {
      return d3.descending(a.nodeValue, b.nodeValue);
    });
    nodes.forEach((node, index) => {
      node.order = index;
      node.offsetValue = cumValue;
      cumValue += node.nodeValue;
      
      // Same for links
      let linkCumulativeValue: number;
      // Outgoing
      if (node.links) {
        linkCumulativeValue = 0;
        node.links.sort((a, b) => {
          return d3.descending(a.value, b.value);
        });
        node.links.forEach((link) => {
          link.outOffset = linkCumulativeValue;
          linkCumulativeValue += link.value;
        });
      }
      // Incoming
      if (node.incoming) {
        linkCumulativeValue = 0;
        node.incoming.sort((a, b) => {
          return d3.descending(a.value, b.value);
        });
        node.incoming.forEach((link) => {
          link.inOffset = linkCumulativeValue;
          linkCumulativeValue += link.value;
        });
      }
    });
  });

  const data = TIMES;

  // Calculate maxes
  let maxNumber = d3.max(data, (t) => t.length)!,
      maxValue = d3.max(data, (t) => d3.sum(t, (n) => n.nodeValue))!;

  // Settings and scales
  const gapRatio = 0.7,
        delay = 200,
        padding = 1,
        x = d3.scaleBand<number>()
          .domain(d3.range(data.length))
          .rangeRound([0, canvasWidth + ( canvasWidth / (data.length - 1))])
          .padding(gapRatio),
        y = d3.scaleLinear()
          .domain([0, maxValue])
          .range([0, canvasHeight - padding * maxNumber]),
        line = d3.line()
          .curve(d3.curveBasis);

  let depthPass = 0;
  function update(isFirstCol: boolean, isSamplesCol: boolean) {
    // Update data
    var currentData = data.slice(0, ++depthPass);

    // Time slots
    var times = svg.selectAll('g.time')
        .data(currentData)
        .enter().append('svg:g')
        .attr('class', 'time')
        .attr('transform', (d, i) => `translate(${(x(i)! - x(0)!)}, 20)`);

    // Node bars
    var nodes = times.selectAll('g.node')
      .data(d => d)
      .enter().append('svg:g')
      .on('mouseover', function(node: Links & SortedTime) {
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

    if (isFirstCol) {
      var nNodes = currentData[ currentData.length - 1].length;
      const scaleValues = ['green', 'yellow', 'orange', 'red', 'pink', 'purple', 'blue'];
      var cols = chroma.scale(scaleValues).colors(nNodes + 1);
    }

    let nodeColorMap = new Map<string, [string, string, string, string[], Map<string, number>]>();
    if (isFirstCol) {
      nodes.append('svg:rect')
        .attr('fill', (n, index) => {
          let col: string,
              col1: string,
              col2: string;
          if (isSamplesCol) {
            return chroma('slategray').hex();
          } else if (isFirstCol) {
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

            var nChildren = n.links.length;
            var childCols = chroma.scale([col1, col, col2]).colors(nChildren + 1);
            var childInds = new Map<string, number>();
            n.links.shuffled().forEach((link, i) => {
              childInds[link.target] = i;
            });
            nodeColorMap.set(n.id, [col1, col, col2, childCols, childInds]);
            return col;
          } else {
            var parentNode = n.incoming[0].source;
            if (!nodeColorMap.has(parentNode)) {
              return 'red';
            }
            cols = nodeColorMap.get(parentNode)![3];
            index = nodeColorMap.get(parentNode)![4][n.id];
            col1 = cols[index];
            col2 = cols[index + 1];
            col = chroma.mix(col1, col2).hex();
            nChildren = n.links.length;
            childCols = chroma.scale([col1, col, col2]).colors(nChildren + 1);
            childInds = new Map<string, number>();
            n.links.shuffled().forEach((link, i) => {
              childInds[link.target] = i;
            });
            nodeColorMap.set(n.id, [col1, col, col2, childCols, childInds]);
            return col;
          }
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
            let col, col1, col2;
            if (isSamplesCol) {
              return chroma('slategray').hex();
            } else if (isFirstCol) {
              if (i === 0) {
                col1 = chroma.mix('green', 'blue').brighten(2).hex();
                col2 = chroma.mix('green', 'yellow').brighten(2).hex();
                col = 'green';
              } else if (i === 1) {
                col1 = 'red';
                col2 = chroma('blue').brighten(4).hex();
                col = 'red';
              } else if (i === 2) {
                col1 = 'blue';
                col2 = 'green';
                col = 'blue';
              } else {
                col1 = cols[i];
                col2 = cols[i + 1];
                col = chroma.mix(col1, col2).hex();
              }

              var nChildren = n.links.length;
              var childCols = chroma.scale([col1, col, col2]).colors(nChildren + 1);
              var childInds = new Map<string, number>();
              n.links.shuffled().forEach((link, index) => {
                  childInds[link.target] = index;
              });
              nodeColorMap.set(n.id, [col1, col, col2, childCols, childInds]);
              return col;
            } else {
              var parentNode = n.incoming[0].source;
              if (!nodeColorMap.has(parentNode)) {
                return 'red';
              }
              cols = nodeColorMap.get(parentNode)![3];
              i = nodeColorMap.get(parentNode)![4][n.id];
              col1 = cols[i];
              col2 = cols[i + 1];
              col = chroma.mix(col1, col2).hex();
              nChildren = n.links.length;
              childCols = chroma.scale([col1, col, col2]).colors(nChildren + 1);
              childInds = new Map<string, number>();
              n.links.shuffled().forEach((link, index) => {
                  childInds[link.target] = i;
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
      }, (isFirstCol ? 0 : delay));
    }

    const columnNames = ['Kingdom', 'Phylum', 'Class', 'Order',
                         'Family', 'Genus', 'Species', 'Sample'];

    var textX = (depthPass - 1) * (x.bandwidth() + x(0)!);
    svg.append('text')
      .attr('x', textX)
      .attr('y', 10)
      .text(columnNames[depthPass]);
    
    var linkLine = function(start: boolean) {
      return function(l: FubarLink) {
        var source = nodeMap[l.source],
            target = nodeMap[l.target],
            gapWidth = x(0)!,
            bandWidth = x.bandwidth() + gapWidth,
            startx = x.bandwidth() - bandWidth,
            sourcey = y(source.offsetValue)
              + source.order * padding
              + y(l.outOffset)
              + y(l.value) / 2,
            targety = y(target.offsetValue) +
              + target.order * padding
              + y(l.inOffset)
              + y(l.value) / 2,
            points: [number, number][] = start ?
            [
              [ startx, sourcey ],
              [ startx, sourcey ],
              [ startx, sourcey ],
              [ startx, sourcey ],
            ] :
            [
              [ startx, sourcey ],
              [ startx + gapWidth! / 2, sourcey],
              [ startx + gapWidth! / 2, targety],
              [ 0, targety ]
            ];
        return line(points);
      };
    };

    // Links
    nodes.selectAll('path.link')
      .data((n) => n.incoming || [])
      .enter().append('svg:path')
      .attr('class', 'link')
      .style('stroke-width', (l) => y(l.value))
      .attr('d', linkLine(true))
      .attr('stroke', (n, i) => {
        if (!nodeColorMap.has(n.source)) {
          return 'grey';
        }
        return nodeColorMap.get(n.source)![1];
      })
      .on('mouseover', function() {
        d3.select(this).attr('class', 'link on');
      })
      .on('mouseout', function() {
        d3.select(this).attr('class', 'link');
      })
      .transition()
      .duration(delay)
      .attr('d', linkLine(false));
  }

  function updateNext() {
    if (depthPass < data.length) {
      let isSamplesCol = false;
      if (depthPass === data.length - 1) {
        isSamplesCol = true;
      }

      update(false, isSamplesCol);
      window.setTimeout(updateNext, delay);
    }
  }

  update(true, false);
  updateNext();
}
