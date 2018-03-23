import * as React from 'react';
import * as Highcharts from 'highcharts';

import HighChartsPlot from '../../../plots/HighChartsPlot';

import { HMPResultType } from '../../../../services/api/models/queryResult';

export interface HMPProps {
  data: HMPResultType;
}

export interface HMPState {
  activeCategory: string;
}

export class HMPContainer extends React.Component<HMPProps, HMPState> {

  constructor(props: HMPProps) {
    super(props);

    this.handleCategoryChange = this.handleCategoryChange.bind(this);

    this.state = {
      activeCategory: Object.keys(this.props.data.categories)[1],
    };
  }

  handleCategoryChange(category: string) {
    this.setState({
      activeCategory: category,
    });
  }

  chartOptions(activeCategory: string): Highcharts.Options {
    const datums = this.props.data.data[activeCategory];

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

    const chartOptions: Highcharts.Options = {
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
        categories: this.props.data.sites,
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
    };

    return chartOptions;
  }

  render() {
    const chartOptions = this.chartOptions(this.state.activeCategory);
    return <HighChartsPlot chartId="human-body-sites" options={chartOptions} />;
  }

}

export default HMPContainer;
