import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { saveSvgAsPng } from 'save-svg-as-png';

import { PlotHeader } from './components/PlotHeader';
import { PlotLoader } from './components/PlotLoader';

export interface SvgRefProps {
  svgRef(ref: SVGSVGElement | null): void;
}

export class ResultPlot<D, P = {}> extends React.Component<P, {data?: D}> {

  protected svgCanvas: SVGSVGElement | null;

  protected title: string;
  protected description: React.ReactNode;

  constructor(props: P) {
    super(props);

    this.state = {};

    this.saveSvg = this.saveSvg.bind(this);
  }

  // Should be overriden by subclasses
  renderPlot(data: D): React.ReactElement<SvgRefProps> {
    throw new Error('Subclass should override!');
  }

  saveSvg() {
    if (this.svgCanvas === null || this.svgCanvas === undefined) {
      throw new Error('Missing svgCanvas! Did you forget to pass down \'svgRef\'?');
    }

    saveSvgAsPng(this.svgCanvas, 'plot.png');
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
