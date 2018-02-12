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

/**
 * Base class for managing state and rendering a front-end display module.
 *
 * Polling strategy based on https://github.com/cameronbourke/react-async-poll
 */
export class ResultPlot<T> extends React.Component<WrapperProps, WrapperState<T>> {

  protected title: string;
  protected description: React.ReactNode;

  // Polling interval (ms)
  protected intervalDuration: number;
  protected interval?: number;
  protected keepPolling: boolean;

  /**
   * Create a Result plot.
   * @param props - The component props.
   */
  constructor(props: WrapperProps) {
    super(props);

    this.state = {
      status: WrapperStatus.Loading,
      data: undefined,
    };

    // Default to 20 seconds
    this.intervalDuration = 20 * 1000;
    this.interval = undefined;
    this.keepPolling = false;

    this.saveSvg = this.saveSvg.bind(this);
    this.startPolling = this.startPolling.bind(this);
    this.stopPolling = this.stopPolling.bind(this);
  }

  /** @inheritdoc */
  componentDidMount() {
    this.startPolling();
  }

  /** @inheritdoc */
  componentWillUnmount() {
    this.stopPolling();
  }

  /** Generate a .png file from a display module's SVG element. */
  saveSvg() {
    throw new Error('Subclass should override!');
  }

  /** Fetch the data required to render this display module. */
  fetchData(): Promise<QueryResultWrapper<T>> {
    throw new Error('Subclass should override!');
  }

  /**
   * Take steps to render the data upon successful fetch.
   * @param data - The successfully fetched data specific to this display module.
   */
  handleData(data: T) {
    throw new Error('Subclass should override!');
  }

  /** Begin polling the server for display module results. */
  startPolling () {
    if (this.interval) {
      return;
    }
    this.keepPolling = true;
    this.asyncInterval(this.intervalDuration, () => {
      return this.fetchData()
        .then((result) => {
          this.updateStatusForQueryResultStatus(result.status);
          if (result.data) {
            this.handleData(result.data);
            this.stopPolling();
          }
        }).catch((error) => {
          this.setState({ status: WrapperStatus.Error });
          this.stopPolling();
        });
    });
  }

  /** Stop polling the server for display module results. */
  stopPolling () {
    this.keepPolling = false;
    if (this.interval) {
      clearTimeout(this.interval);
    }
  }

  /**
   * Kick off polling of result module data.
   * @param intervalDuration - Interval duration between poll requests.
   */
  asyncInterval(intervalDuration: number, fn: () => Promise<void>) {
    const promise = fn();

    const asyncTimeoutBody = () => {
      this.asyncInterval(intervalDuration, fn);
    };
    // Use window explicitly here to prevent NodeJS's setTimeout being used
    const asyncTimeout = () => window.setTimeout(asyncTimeoutBody, intervalDuration);

    const assignNextInterval = () => {
      if (!this.keepPolling) {
        this.stopPolling();
        return;
      }
      this.interval = asyncTimeout();
    };

    // Continue polling, even on error, until this.stopPolling is called
    Promise.resolve(promise)
      .then(assignNextInterval)
      .catch(assignNextInterval);
  }

  /**
   * Convert the server's result status to local state.
   * @param queryStatus - Result status returned by the server.
   */
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

      default:
        // no-op; enumeration is exhaustive
        break;
    }
  }
}

/** Class for front-end display module using custom D3 graphics. */
export class D3ResultPlot<T> extends ResultPlot<T> {

  protected svgCanvas: SVGSVGElement | null;

  constructor(props: WrapperProps) {
    super(props);

    this.saveSvg = this.saveSvg.bind(this);
  }

  /**
   * Execute custom D3 code to render result data.
   * @param data - The successfully fetched data specific to this display module.
   */
  renderPlot(data: T): React.ReactNode {
    throw new Error('Subclass should override!');
  }

  /** Generate and save png from SVG element. */
  saveSvg() {
    if (this.svgCanvas === null || this.svgCanvas === undefined) {
      throw new Error('Missing svgCanvas! Did you forget to pass down \'svgRef\'?');
    }

    saveSvgAsPng(this.svgCanvas, 'plot.png');
  }

  /** @inheritdoc */
  handleData(data: T) {
    this.setState({ data });
  }

  /** @inheritdoc */
  render() {
    return (
      <div>
        <Row>
          <Col lg={12}>
            <PlotHeader
              title={this.title}
              description={this.description}
              downloadPng={this.saveSvg}
              downloadCsv={() => {}}    // tslint:disable-line:no-empty
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

  /**
   * Render HighChart within a <div> element.
   * @param data - The successfully fetched data specific to this display module.
   * @param graphId - ID of the <div> element in which to render the HighChart.
   */
  createPlot(data: T, graphId: string): Highcharts.ChartObject {
    throw new Error('Subclass should override!');
  }

  /** @inheritdoc */
  handleData(data: T) {
    this.chart = this.createPlot(data, `${this.constructor.name}-chart`);
  }

  saveSvg() {
    if (this.chart !== undefined) {
      this.chart.exportChart();
    }
  }

  /** @inheritdoc */
  componentWillUnmount() {
    if (super.componentWillUnmount) {
      super.componentWillUnmount();
    }

    if (this.chart !== undefined) {
      this.chart.destroy();
    }
  }

  /** @inheritdoc */
  render() {
    return (
      <div>
        <Row>
          <Col lg={12}>
            <PlotHeader
              title={this.title}
              description={this.description}
              downloadPng={this.saveSvg}
              downloadCsv={() => {}}    // tslint:disable-line:no-empty
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
            {this.state.status === WrapperStatus.Success && this.props.children}
            <div id={`${this.constructor.name}-chart`} />
          </Col>
        </Row>
      </div>
    );
  }
}
