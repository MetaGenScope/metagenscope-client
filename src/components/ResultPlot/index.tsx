import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { saveSvgAsPng } from 'save-svg-as-png';

import { QueryResultWrapper, QueryResultStatus } from '../../services/api/models/queryResult';

import { PlotHeader } from './components/PlotHeader';
import { PlotLoader } from './components/PlotLoader';

export interface SvgRefProps {
  svgRef(ref: SVGSVGElement | null): void;
}

enum WrapperStatus {
  Loading = 'LOADING',
  Error = 'ERROR',
  Pending = 'PENDING',
  Working = 'WORKING',
  Success = 'SUCCESS',
}

interface WrapperProps {
  id: string;
}

interface WrapperState<T> {
  status: WrapperStatus;
  data?: T;
}

// This class handles network requests, polling, and state.
//
// Subclasses will need to implement methods for their own needs.
export class ResultPlot<T> extends React.Component<WrapperProps, WrapperState<T>> {

  protected title: string;
  protected description: React.ReactNode;

  constructor(props: WrapperProps) {
    super(props);

    this.state = {
      status: WrapperStatus.Loading,
      data: undefined,
    };

    this.saveSvg = this.saveSvg.bind(this);
  }

  saveSvg() {
    throw new Error('Subclass should override!');
  }

  fetchData(): Promise<QueryResultWrapper<T>> {
    throw new Error('Subclass should override!');
  }

  updateStatusForQueryResultStatus(queryStatus: QueryResultStatus) {
    switch (queryStatus) {
      case QueryResultStatus.Pending:
        this.setState({ status: WrapperStatus.Pending });
        break;
      case QueryResultStatus.Working:
        this.setState({ status: WrapperStatus.Working });
        break;
      case QueryResultStatus.Success:
        this.setState({ status: WrapperStatus.Success });
        break;
      case QueryResultStatus.Error:
        this.setState({ status: WrapperStatus.Error });
        break;
    }
  }
}

export class D3ResultPlot<T> extends ResultPlot<T> {

  protected svgCanvas: SVGSVGElement | null;

  constructor(props: WrapperProps) {
    super(props);

    this.saveSvg = this.saveSvg.bind(this);
  }

  renderPlot(data: T): React.ReactNode {
    throw new Error('Subclass should override!');
  }

  saveSvg() {
    if (this.svgCanvas === null || this.svgCanvas === undefined) {
      throw new Error('Missing svgCanvas! Did you forget to pass down \'svgRef\'?');
    }

    saveSvgAsPng(this.svgCanvas, 'plot.png');
  }

  componentDidMount() {
    this.fetchData()
      .then((result) => {
        this.updateStatusForQueryResultStatus(result.status);
        if (result.data) {
          this.setState({ data: result.data });
        }
      });
  }

  render() {
    return (
      <div>
        <Row>
          <Col lg={12}>
            <PlotHeader
              title={this.title}
              description={this.description}
              downloadPng={this.saveSvg}
              downloadCsv={() => {}}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
          {this.state.status === WrapperStatus.Loading &&
            <div>
              <h3>Fetching result...</h3>
              <PlotLoader percentComplete={25} />
            </div>
          }
          {this.state.status === WrapperStatus.Pending &&
            <h3>Query result in queue to be processed.</h3>
          }
          {this.state.status === WrapperStatus.Working &&
            <h3>Query result still processing.</h3>
          }
          {this.state.status === WrapperStatus.Error &&
            <h3>There was an error: [error].</h3>
          }
          {this.state.status === WrapperStatus.Success && this.state.data &&
            this.renderPlot(this.state.data)
          }
          </Col>
        </Row>
      </div>
    );
  }
}

export class HighChartResultPlot<T> extends ResultPlot<T> {

  chart: Highcharts.ChartObject;

  createPlot(data: T, graphId: string): Highcharts.ChartObject {
    throw new Error('Subclass should override!');
  }

  componentDidMount() {
    this.fetchData()
      .then((result) => {
        this.updateStatusForQueryResultStatus(result.status);
        if (result.data) {
          this.chart = this.createPlot(result.data, `${this.constructor.name}-chart`);
        }
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
    return (
      <div>
        <Row>
          <Col lg={12}>
            <PlotHeader
              title={this.title}
              description={this.description}
              downloadPng={this.saveSvg}
              downloadCsv={() => {}}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            {this.state.status === WrapperStatus.Loading &&
              <div>
                <h3>Fetching result...</h3>
                <PlotLoader percentComplete={25} />
              </div>
            }
            {this.state.status === WrapperStatus.Pending &&
              <h3>Query result in queue to be processed.</h3>
            }
            {this.state.status === WrapperStatus.Working &&
              <h3>Query result still processing.</h3>
            }
            {this.state.status === WrapperStatus.Error &&
              <h3>There was an error: [error].</h3>
            }
            <div id={`${this.constructor.name}-chart`} />
          </Col>
        </Row>
      </div>
    );
  }
}
