import * as React from 'react';
import * as Highcharts from 'highcharts';

import { ChartRefProps } from '../../../components/DisplayContainer/highcharts';
import HighChartsPlot from '../../../plots/HighChartsPlot';
import { ReadsClassifiedType } from '../../../../services/api/models/queryResult';

interface ReadsClassifiedProps extends ChartRefProps {
  isSingleton?: boolean;
  data: ReadsClassifiedType;
}

const sampleGroupOptions = function(data: ReadsClassifiedType): Highcharts.Options {
  const series: Highcharts.IndividualSeriesOptions[] = data.data.map(source => {
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
  };

  return chartOptions;
};

const sampleOptions = function(data: ReadsClassifiedType): Highcharts.Options {
  const seriesData: Highcharts.DataPoint[] = data.categories.map((categoryName, index) => {
    const categoryData = data.data.find(datum => datum.category === categoryName)!;
    return {
      name: categoryName,
      y: categoryData.values[0],
    };
  });

  const chartOptions = {
    chart: {
      type: 'pie',
    },
    title: {
      text: 'Proportion of Reads Classified',
    },
    pane: {
      size: '80%',
    },
    xAxis: {
      categories: data.categories,
      tickmarkPlacement: 'on',
      lineWidth: 0,
    },

    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
    },

    legend: { enabled: false},

    series: [{
      name: 'Sites',
      colorByPoint: true,
      data: seriesData,
    }],

    exporting: {
      enabled: false,
    },
   };

  return chartOptions;
};

const ReadsClassifiedContainer: React.SFC<ReadsClassifiedProps> = (props) => {

  const isSingleton = props.isSingleton || false;
  const chartOptions = isSingleton
    ? sampleOptions(props.data)
    : sampleGroupOptions(props.data);

  return (
    <HighChartsPlot
      chartId="reads-classified"
      options={chartOptions}
      chartRef={props.chartRef}
    />
  );
};

export default ReadsClassifiedContainer;
