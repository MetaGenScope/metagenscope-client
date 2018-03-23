import * as React from 'react';
import * as Highcharts from 'highcharts';

import HighChartsPlot from '../../../plots/HighChartsPlot';
import { ReadsClassifiedType } from '../../../../services/api/models/queryResult';

const ReadsClassifiedContainer: React.SFC<{data: ReadsClassifiedType}> = (props) => {
  const series: Highcharts.IndividualSeriesOptions[] = props.data.data.map(source => {
    return {
      name: source.category,
      data: source.values,
    };
  });

  const chartOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: props.data.sample_names,
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
  };

  return <HighChartsPlot options={chartOptions} />;
};

export default ReadsClassifiedContainer;
