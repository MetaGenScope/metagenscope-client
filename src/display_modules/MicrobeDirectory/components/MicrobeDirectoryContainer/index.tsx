import * as React from 'react';
import * as Highcharts from 'highcharts';

import { ChartRefProps } from '../../../components/DisplayContainer/highcharts';
import HighChartsPlot from '../../../plots/HighChartsPlot';
import { MicrobeDirectoryType } from '../../../../services/api/models/queryResult';


const sampleGroupOptions = function(data: MicrobeDirectoryType, activeProperty: string): Highcharts.Options {

  const sampleNames = Object.keys(data.samples);
  const propertyNames = Object.keys(data.samples[sampleNames[0]]);

  const propertyMap: {
    [key: string]: {
        [key: string]: number[]
    }
  } = {}
  propertyNames.map(propertyName => {
    propertyMap[propertyName] = {}
    const propertyValues = Object.keys(data.samples[sampleNames[0]][propertyName]);
    propertyValues.map(propertyValue => {
      propertyMap[propertyName][propertyValue] = []
    });
  });

  
  sampleNames.map(sampleName => {
    propertyNames.map(propertyName => {
      const property = data.samples[sampleName][propertyName];
      Object.keys(property).map(propertyValue => {
        propertyMap[propertyName][propertyValue].push(property[propertyValue]);
      });
    });
  });

  const seriesNames = Object.keys(propertyMap[activePropertyName]);
  const series: Highcharts.IndividualSeriesOptions[] = seriesNames.map(seriesName => {
    const seriesData = seriesMap[seriesName];
    return {
      name: seriesName,
      data: seriesData,
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
      categories: sampleNames,
    },
    yAxis: {
      title: {
        text: 'Microbe Directory Annotations',
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


export interface MicrobeDirectoryProps extends ChartRefProps {
  data: MicrobeDirectoryType;
  isSingleton?: boolean;
}

export interface MicrobeDirectoryState {
  activeProperty: string;
  propertyValues: string[];
}

export class MicrobeDirectoryContainer extends React.Component<MicrobeDirectoryProps, MicrobeDirectoryState> {

  protected color: d3.ScaleOrdinal<string, string>;

  constructor(props: MicrobeDirectoryProps) {
    super(props);

    this.handleCategoryChange = this.handlePropertyChange.bind(this););

    const sampleNames = Object.keys(data.samples);
    const propertyNames = Object.keys(data.samples[sampleNames[0]]);

    this.state = {
      activeProperty: propertyNames[0],
      propertyValues: propertyNames,
    };
  }

  handlePropertyChange(property: string) {
    this.setState({
      activeProperty: property,
    });
  }


  render() {
    const activeProperty = this.state.activeProperty,
          chartOptions = sampleGroupOptions(data, this.props.data.sites),
          isSingleton = this.props.isSingleton || false;

    return (
      <Row>
        <Col lg={isSingleton ? 12 : 9}>
          <HighChartsPlot
            chartId="microbe-directory"
            options={chartOptions}
            chartRef={this.props.chartRef}
          />
        </Col>
        <Col lg={3}>
            <MicrobeDirectoryControls
              propertyValues={this.state.propertyValues}
              activeProperty={activeProperty}
              handlePropertyChange={this.handlePropertyChange}
            />
          </Col>
      </Row>
    );
  }

}

export default MicrobeDirectoryContainer;
