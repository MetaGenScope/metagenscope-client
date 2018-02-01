import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsExporting = require('highcharts/modules/exporting');
import HighchartsOfflineExporting = require('highcharts/modules/offline-exporting');
import HighchartsMore = require('highcharts/highcharts-more');
HighchartsExporting(Highcharts);
HighchartsOfflineExporting(Highcharts);
HighchartsMore(Highcharts);
import { Row, Col } from 'react-bootstrap';

import { PlotHeader } from '../../components/ResultPlot/components/PlotHeader';
import { HMPResultType } from '../../services/api/models/queryResult';

export interface HMPProps {
  hmp: HMPResultType;
}

class HMPPlot extends React.Component<HMPProps, {}> {

  chart: Highcharts.ChartObject;

  constructor(props: HMPProps) {
    super(props);

    this.saveSvg = this.saveSvg.bind(this);
  }

  componentDidMount() {
    const hmpData = this.props.hmp;

    const categories = Array.from(hmpData.categories.keys());
    const activeCategory = categories[0];
    const datums = hmpData.data.get(activeCategory)!;

    const series: Highcharts.IndividualSeriesOptions[] = datums.map(source => {
      const data: Highcharts.DataPoint[] = source.data.map(datum => {
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
        data,
      };
    });

    this.chart = Highcharts.chart('hmp-chart', {
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
        categories: hmpData.sites,
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
    });
  }

  saveSvg() {
    if (this.chart !== undefined) {
      this.chart.exportChart();
    }
  }

  componentWillUnmount() {
    if (this.chart !== undefined) {
      this.chart.destroy();
    }
  }

  render() {
    const description = 'This chart shows the average similarity between bacterial '
        + 'communities in the samples and human body sites from the Human Microbiome Project.';
    return (
      <div>
        <Row>
          <Col lg={12}>
            <PlotHeader
              title="Human Body Sites"
              description={description}
              downloadPng={this.saveSvg}
              downloadCsv={() => {}}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div id="hmp-chart" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default HMPPlot;
