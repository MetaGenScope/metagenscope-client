import * as React from 'react';
import * as d3 from 'd3';
import { Row, Col } from 'react-bootstrap';

import HeatmapPlot, { HeatMapProps } from '../../../../display_modules/plots/HeatmapPlot';
import { HeatMapDatum } from '../../../../display_modules/plots/HeatmapPlot/util/heatmap';
import { Humann2NormalizeType } from '../../../../services/api/models/queryResult';
import { SvgRefProps } from '../../../components/DisplayContainer/d3';

import Humann2NormalizeControls from './components/Humann2NormalizeControls';

import { values } from '../../../plots/HeatmapPlot/util/data';

export interface Humann2NormalizeProps extends SvgRefProps {
  data: Humann2NormalizeType;
}

export interface Humann2NormalizeState {
  activeMetric: string;
}

export default class Humann2NormalizeContainer extends React.Component<Humann2NormalizeProps, Humann2NormalizeState> {

  protected color: d3.ScaleOrdinal<string, string>;

  constructor(props: Humann2NormalizeProps) {
    super(props);

    this.color = d3.scaleOrdinal(d3.schemeCategory20);

    this.state = {
      activeMetric: 'rpkm',
    };

    this.handleMetricChange = this.handleMetricChange.bind(this);
  }

  chartOptions(): HeatMapProps {
    const metric = this.state.activeMetric,
          data = this.props.data['samples'];

    const columnNames = Object.keys(data);
    const rowNames = Object.keys(data[columnNames[0]]);

    let newValues: HeatMapDatum[] = [];
    columnNames.forEach((columnName, column) => {
      rowNames.forEach((rowName, row) => {
        newValues.push({
          x: column,
          y: row,
          value: data[columnName][rowName][metric],
        });
      });
    });

    let result = {
      axis: {
        x: columnNames.map(name => ({name})),
        y: rowNames,
      },
      data: values.map(datum => ({x: datum.x - 1, y: datum.y - 1, value: datum.value})),
      buckets: 10,
      legend: {
        precision: 3,
      },
      svgRef: this.props.svgRef,
    };

    result.data = newValues;

    return result;
  }

  controlProps() {
    const metadata = this.metaDataFromProps(this.props);
    return {
      metrics: ['rpkm', 'rpkmg'],
      activeMetric: this.state.activeMetric,
      handleMetricChange: this.handleMetricChange,
    };
  }

  handleMetricChange(metric: string) {
    this.setState({activeMetric: metric});
  }

  render() {
    const chartProps = this.chartOptions();
    const controlProps = this.controlProps();

    return (
      <Row>
        <Col lg={9}>
          <HeatmapPlot {...chartProps} />
        </Col>
        <Col lg={3}>
          <Humann2NormalizeControls {...controlProps} />
        </Col>
      </Row>
    );
  }

}