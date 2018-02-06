import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsExporting = require('highcharts/modules/exporting');
import HighchartsOfflineExporting = require('highcharts/modules/offline-exporting');
HighchartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);

import { HighChartResultPlot } from '../../components/ResultPlot';
import { ReadsClassifiedType } from '../../services/api/models/queryResult';
import { getReadsClassified } from '../../services/api';

export class ReadsClassifiedPlot extends HighChartResultPlot<ReadsClassifiedType> {

  constructor(props: {id: string}) {
    super(props);

    this.saveSvg = this.saveSvg.bind(this);

    this.title = 'Reads Classified';
    this.description = (
      <p>This chart shows the proportion of reads in each sample {' '}
        assigned to different groups.</p>
    );
  }

  fetchData() {
    return getReadsClassified(this.props.id);
  }

  createPlot(data: ReadsClassifiedType, graphId: string): Highcharts.ChartObject {
    const series: Highcharts.IndividualSeriesOptions[] = data.data.map(source => {
      return {
        name: source.category,
        data: source.values,
      };
    });

    return Highcharts.chart(graphId, {
      chart: {
        type: 'column',
      },
      title: {
        text: null,
      },
      xAxis: {
        categories: data.sample_names,
      },
      yAxis: {
        min: 0,
        max: 100,
        title: {
          text: 'Proportion of Reads Classified',
        },
        stackLabels: {
          enabled: false,
          style: {
            fontWeight: 'bold',
            color: 'gray',
          },
        },
      },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: false,
            color: 'white',
          },
        },
      },
      exporting: {
        enabled: false,
      },
      series,
    });
  }
}
