import * as React from 'react';

import * as Highcharts from 'highcharts';

const HighchartsExporting = require('highcharts/modules/exporting'),
      HighchartsOfflineExporting = require('highcharts/modules/offline-exporting');
HighchartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);

export interface HighChartsPlotProps<T> {
  data: T;
}

export default class HighChartsPlot extends React.Component<{options: Highcharts.Options}, {}> {

  chart: Highcharts.ChartObject;
  protected chartId: string;

  /** @inheritdoc */
  componentDidMount() {
    this.chart = Highcharts.chart(`${this.chartId}-chart`, this.props.options);
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
    return <div id={`${this.chartId}-chart`} />;
  }
}
