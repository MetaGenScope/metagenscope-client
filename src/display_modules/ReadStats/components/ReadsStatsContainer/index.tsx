import * as React from 'react';
import * as Highcharts from 'highcharts';
import * as d3 from 'd3';
import { Row, Col } from 'react-bootstrap';

import HighChartsPlot from '../../../plots/HighChartsPlot';
import { ReadStatsResultType } from '../../../../services/api/models/queryResult';
import { ChartRefProps } from '../../../components/DisplayContainer/highcharts';

import ReadStatsControls from './components/ReadStatsControls';

export interface ReadStatsProps extends ChartRefProps {
  data: ReadStatsResultType;
}

export interface ReadStatsState {
  activeSource: string;
}

export class ReadStatsContainer extends React.Component<ReadStatsProps, ReadStatsState> {

  protected color: d3.ScaleOrdinal<string, string>;

  constructor(props: ReadStatsProps) {
    super(props);

    this.handleSourceChange = this.handleSourceChange.bind(this);

    this.state = {
      activeSource: 'num_reads',
    };
  }

  handleSourceChange(source: string) {
    this.setState({
      activeSource: source,
    });
  }

  chartOptions(activeSource: string): Highcharts.Options {

    let valList: Array<[string, number]> = [];
    for (let sname in this.props.data.samples) {
      val = this.props.data.samples[sname][activeSource];
      valList.push([sname, val]);
    }
    let sortedVals: Array<[string, number]> = valList.sort((el0, el1) => el0[1] - el1[1]);
    const sampleNames = sortedVals.map(el => el[0]);
    const dataPoints = sortedVals.map(el => el[1]);

    if (activeSource == 'num_reads') {
      const yAxisTitle = 'Num. Reads';
    } else if (activeSource == 'gc_content'){
      const yAxisTitle = 'GC Percentage';
    }


    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'column',
      },
      title: {
        text: null,
      },
      legend: {
        enabled: true,
      },
      xAxis: {
        categories: sampleNames,
      },
      yAxis: {
        title: {
          text: yAxisTitle,
        },
      },
      exporting: {
        enabled: false,
      },
      series: [{
        name: 'Sample',
        data: dataPoints,
      }],
    };

    return chartOptions;
  }

  render() {
    const activeSource = this.state.activeSource;
    const chartOptions = this.chartOptions(activeSource);

    return (
      <Row>
        <Col lg={9}>
          <HighChartsPlot
            chartId="read-stats"
            options={chartOptions}
            chartRef={this.props.chartRef}
          />
        </Col>
        <Col lg={3}>
          <ReadStatsControls
            sources={['num_reads', 'gc_content']}
            activeSource={activeSource}
            handleSourceChange={this.handleSourceChange}
          />
        </Col>
      </Row>
    );
  }

}

export default ReadStatsContainer;
