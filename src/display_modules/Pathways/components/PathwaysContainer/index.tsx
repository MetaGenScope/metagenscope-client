import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import HeatmapPlot, { HeatMapProps } from '../../../../display_modules/plots/HeatmapPlot';
import { HeatMapDatum } from '../../../../display_modules/plots/HeatmapPlot/util/heatmap';
import { PathwaysType } from '../../../../services/api/models/queryResult';
import { SvgRefProps } from '../../../components/DisplayContainer/d3';

import PathwaysControls from './components/PathwaysControls';

export interface PathwaysProps extends SvgRefProps {
  data: PathwaysType;
}

export interface PathwaysState {
  activeMetric: string;
}

export default class BetaDiversityContainer extends React.Component<PathwaysProps, PathwaysState> {

  protected color: d3.ScaleOrdinal<string, string>;

  constructor(props: PathwaysProps) {
    super(props);

    const metadata = this.metaDataFromProps(props);
    this.state = {
      activeMetric: metadata.metrics[0],
    };

    this.handleMetricChange = this.handleMetricChange.bind(this);
  }

  chartOptions(): HeatMapProps {
    const {sampleNames, pathways} = this.metaDataFromProps(this.props),
          metric = this.state.activeMetric;

    const newValues: HeatMapDatum[] = [];
    sampleNames.forEach((columnName, column) => {
      pathways.forEach((rowName, row) => {
        newValues.push({
          x: column,
          y: row,
          value: this.props.data.samples[columnName][metric][rowName],
        });
      });
    });

    const result = {
      axis: {
        x: sampleNames.map(name => ({name})),
        y: pathways,
      },
      data: newValues,
      buckets: 10,
      maxAxisNameLength: 100,
      axisNameSize: 12,
      legend: {
        precision: 3,
      },
      svgRef: this.props.svgRef,
    };

    return result;
  }

  metaDataFromProps(props: PathwaysProps) {
    const sampleNames = Object.keys(props.data.samples),
          metrics = Object.keys(props.data.samples[sampleNames[0]]),
          pathways = Object.keys(props.data.samples[sampleNames[0]].pathway_abundances);
    return {sampleNames, metrics, pathways};
  }

  controlProps() {
    const metadata = this.metaDataFromProps(this.props);
    return {
      metrics: metadata.metrics,
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
          <PathwaysControls {...controlProps} />
        </Col>
      </Row>
    );
  }

}
