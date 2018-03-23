import * as React from 'react';
import * as Highcharts from 'highcharts';

import HighChartsPlot from '../../../plots/HighChartsPlot';

import { HMPResultType } from '../../../../services/api/models/queryResult';

const HMPContainer: React.SFC<{data: HMPResultType}> = (props) => {
  const categories = Array.from(props.data.categories.keys());
  const activeCategory = categories[0];
  const datums = props.data.data.get(activeCategory)!;

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
      categories: props.data.sites,
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

  return <HighChartsPlot chartId="human-body-sites" options={chartOptions} />;
};

export default HMPContainer;
