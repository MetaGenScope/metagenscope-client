import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsExporting = require('highcharts/modules/exporting');
import HighchartsOfflineExporting = require('highcharts/modules/offline-exporting');
import HighchartsMore = require('highcharts/highcharts-more');
HighchartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);
HighchartsMore(Highcharts);

import { HighChartResultPlot } from '../../components/ResultPlot';
import { HMPResultType } from '../../services/api/models/queryResult';
import { getHMP } from '../../services/api';

export class HMPPlot extends HighChartResultPlot<HMPResultType> {

  constructor(props: {id: string}) {
    super(props);

    this.title = 'Human Body Sites';
    this.description = (
      <p>This chart shows the average similarity between bacterial  {' '}
        communities in the samples and human body sites from the Human Microbiome Project.</p>
    );
    this.chartId = 'human-body-sites';
  }

  fetchData() {
    return getHMP(this.props.id);
  }

  createPlot(data: HMPResultType, graphId: string): Highcharts.ChartObject {
    const categories = Array.from(data.categories.keys());
    const activeCategory = categories[0];
    const datums = data.data.get(activeCategory)!;

    const series: Highcharts.IndividualSeriesOptions[] = datums.map(source => {
      const dataPoints: Highcharts.DataPoint[] = source.data.map(datum => {
        return {
          low: datum[0],
          q1: datum[1],
          median: datum[2],
          q3: datum[3],
          high: datum[4],
        };
      });
      return {
        name: source.name,
        data: dataPoints,
      };
    });

    return Highcharts.chart(graphId, {
      chart: {
        type: 'boxplot',
      },
      title: {
        text: null,
      },
      legend: {
        enabled: true,
      },
      xAxis: {
        categories: data.sites,
      },
      yAxis: {
        title: {
          text: 'Cosine Similarity',
        },
      },
      exporting: {
        enabled: false,
      },
      series,
    });
  }
}
