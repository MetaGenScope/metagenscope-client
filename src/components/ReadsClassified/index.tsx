import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsExporting = require('highcharts/modules/exporting');
import HighchartsOfflineExporting = require('highcharts/modules/offline-exporting');
HighchartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);
import { Row, Col } from 'react-bootstrap';

import { PlotHeader } from '../../components/ResultPlot/components/PlotHeader';
import { ReadsClassifiedType } from '../../services/api/models/queryResult';

export interface ReadsClassifiedProps {
  readsClassified: ReadsClassifiedType;
}

class ReadsClassifiedPlot extends React.Component<ReadsClassifiedProps, {}> {

  chart: Highcharts.ChartObject;

  constructor(props: ReadsClassifiedProps) {
    super(props);

    this.saveSvg = this.saveSvg.bind(this);
  }

  componentDidMount() {
    const data = this.props.readsClassified;

    const series: Highcharts.IndividualSeriesOptions[] = data.data.map(source => {
      return {
        name: source.category,
        data: source.values,
      };
    });

    this.chart = Highcharts.chart('reads-classified-chart', {
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
    });
  }

  saveSvg() {
    if (this.chart !== undefined) {
      this.chart.exportChartLocal();
    }
  }

  componentWillUnmount() {
    if (this.chart !== undefined) {
      this.chart.destroy();
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col lg={12}>
            <PlotHeader
              title="Reads Classified"
              description="This chart shows the proportion of reads in each sample assigned to different groups."
              downloadPng={this.saveSvg}
              downloadCsv={() => {}}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div id="reads-classified-chart" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ReadsClassifiedPlot;
