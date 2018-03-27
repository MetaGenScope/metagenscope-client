import * as d3 from 'd3';
import * as Highcharts from 'highcharts';

const HighchartsMore = require('highcharts/highcharts-more'),
      HighchartsExporting = require('highcharts/modules/exporting'),
      HighchartsOfflineExporting = require('highcharts/modules/offline-exporting');
HighchartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);
HighchartsMore(Highcharts);

export interface HeatMapDatum {
  x: number;
  y: number;
  value: number;
}

export interface HeatMapOptions {
  axis: {
    x: string[];
    y: string[];
  };
  data: HeatMapDatum[];
}

export default class HeatMap {

  protected rootDiv: d3.Selection<HTMLDivElement, {}, null, undefined>;
  protected svg: d3.Selection<SVGSVGElement, {}, null, undefined>;

  protected tooltip: d3.Selection<d3.BaseType, {}, null, undefined>;
  protected canvas: d3.Selection<d3.BaseType, {}, null, undefined>;

  protected margin: {top: number, right: number, bottom: number, left: number};

  /**
   * Create Heat Map plot
   * @param rootDiv - wrapping div element. Used to insert tooltip into
   * @param rootSvg - the SVG element
   */
  constructor(rootDiv: HTMLDivElement, rootSvg: SVGSVGElement) {
    this.margin = {top: 20, right: 20, bottom: 30, left: 40};

    this.rootDiv = d3.select(rootDiv);
    this.svg = d3.select(rootSvg);

    // Add the tooltip area to the webpage
    this.tooltip = this.rootDiv.append('div')
      .attr('class', 'scatter-tooltip')
      .style('z-index', 5)
      .style('opacity', 0);

    // Add canvas
    this.canvas = this.svg.append('g');

    this.bootstap();
  }

  /**
   * Set up canvas, tooltip, etc.
   */
  protected bootstap() {
    // Stub
  }

  /**
   * Render a Heat Map dataset, removing or adding SVG elements as necessary.
   * @param data - The Heat Map dataset.
   */
  update(data: HeatMapOptions) {
    const xMax = d3.max(data.data, (d: HeatMapDatum) => d.x)!,
          yMax = d3.max(data.data, (d: HeatMapDatum) => d.y)!,
          valMax = d3.max(data.data, (d: HeatMapDatum) => d.value)!;

    const boundingSize = this.rootDiv.node()!.getBoundingClientRect(),
          canvasWidth = boundingSize.width - this.margin.left - this.margin.right,
          gridSize = Math.floor(canvasWidth / (xMax + 1)),
          legendElementWidth = gridSize * 2,
          canvasHeight = gridSize * (yMax + 1),
          legendHeight =  2 * gridSize,
          width = boundingSize.width,
          height = this.margin.top + canvasHeight + gridSize + legendHeight + this.margin.bottom;
    this.svg.attr('width', width).attr('height', height);
    this.canvas.attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    const colors = ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
          buckets = 9;
    const colorScale = d3.scaleQuantile<string>()
        .domain([0, buckets - 1, valMax])
        .range(colors);

    const cards = this.canvas.selectAll('.card')
        .data(data.data, (d: HeatMapDatum) => `${d.x}:${d.y}`);

    cards.enter().append('rect')
        .attr('class', 'cell bordered')
        .style('fill', colors[0])
        .merge(cards)
            .attr('x', (d: HeatMapDatum) => d.x * gridSize)
            .attr('y', (d: HeatMapDatum) => d.y * gridSize)
            .attr('width', gridSize)
            .attr('height', gridSize)
            .transition().duration(1300).delay(600)
                .style('fill', (d: HeatMapDatum) => {
                  return colorScale(d.value);
                });

    cards.exit().remove();

    const legend = this.canvas.selectAll('.legend')
        .data([0].concat(colorScale.quantiles()), d => '' + d);

    const legendValues = legend.enter().append('g')
        .attr('class', 'legend');

    legendValues.append('rect')
        .attr('x', (d, i) => legendElementWidth * i)
        .attr('y', canvasHeight + gridSize)
        .attr('width', legendElementWidth)
        .attr('height', gridSize / 2)
        .style('fill', (d, i) => colors[i]);

    legendValues.append('text')
      .attr('class', 'mono')
      .text(d => '≥ ' + Math.round(d))
      .attr('x', (d, i) => legendElementWidth * i)
      .attr('y', canvasHeight + (gridSize * 2));

    legend.exit().remove();
  }

  /**
   * Handle removal from DOM tree.
   *
   * Note: this may be unnecessary / overkill
   */
  teardown() {
    // Remove elements
    this.tooltip.remove();
    this.canvas.remove();
  }

}
