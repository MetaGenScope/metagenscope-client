import * as React from 'react';

import * as Highcharts from 'highcharts';

const HighchartsMore = require('highcharts/highcharts-more'),
      HighchartsExporting = require('highcharts/modules/exporting'),
      HighchartsOfflineExporting = require('highcharts/modules/offline-exporting');
HighchartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);
HighchartsMore(Highcharts);

export interface HighChartsPlotProps {
  options: Highcharts.Options;
  chartId: string;
}

export default class HighChartsPlot extends React.Component<HighChartsPlotProps, {}> {

  protected chart: Highcharts.ChartObject;

  /** @inheritdoc */
  componentDidMount() {
    this.chart = Highcharts.chart(`${this.props.chartId}-chart`, this.props.options);
  }

  /** @inheritdoc */
  componentWillUnmount() {
    if (super.componentWillUnmount) {
      super.componentWillUnmount();
    }

    if (this.chart !== undefined) {
      this.chart.destroy();
    }
  }

  /** @inheritdoc */
  render() {
    return <div id={`${this.props.chartId}-chart`} />;
  }
}
