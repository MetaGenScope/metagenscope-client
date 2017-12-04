import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import { PlotHeader } from './components/PlotHeader';
import { PlotLoader } from './components/PlotLoader';

export class ResultPlot<D, P = {}> extends React.Component<P, {data?: D}> {

  protected title: string;
  protected description: React.ReactNode;

  constructor(props: P) {
    super(props);

    this.state = {};
  }

  // Should be overriden by subclasses
  renderPlot(data: D) {
    return this.props.children;
  }

  render() {
    return (
      <div>
        <Row>
          <Col lg={12}>
            <PlotHeader
              title={this.title}
              description={this.description}
              downloadPng={() => {}}
              downloadCsv={() => {}}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            {!this.state.data &&
              <PlotLoader percentComplete={25} />
            }
            {this.state.data &&
              this.renderPlot(this.state.data)
            }
          </Col>
        </Row>
      </div>
    );
  }
}
