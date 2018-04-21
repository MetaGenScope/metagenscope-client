import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import { SampleTaxonomyType } from '../../../../services/api/models/queryResult';

import SunburstPlot, { SunburstProps } from '../../../plots/SunburstPlot';
import { SvgRefProps } from '../../../components/DisplayContainer/d3';

import SampleTaxonomyControls from './components/SampleTaxonomyControls';

export interface SampleTaxonomyProps extends SvgRefProps {
  data: SampleTaxonomyType;
}

export interface SampleSimilarityState {
  activeTool: string;
}

export class SampleTaxonomyContainer extends React.Component<SampleTaxonomyProps, SampleSimilarityState> {
  constructor(props: SampleTaxonomyProps) {
    super(props);

    this.handleSourceChange = this.handleSourceChange.bind(this);

    this.state = {
      activeTool: Object.keys(this.props.data)[0],
    };
  }

  handleSourceChange(newSource: string) {
    this.setState({
      activeTool: newSource,
    });
  }

  render() {
    const activeTool = this.state.activeTool;
    const data: SunburstProps = {
      data: this.props.data[activeTool],
      svgRef: this.props.svgRef,
    };

    return (
      <Row>
        <Col lg={9}>
          <SunburstPlot {...data} />
        </Col>
        <Col lg={3}>
          <SampleTaxonomyControls
            sources={Object.keys(this.props.data)}
            activeSource={activeTool}
            handleSourceChange={this.handleSourceChange}
          />
        </Col>
      </Row>
    );
  }
}
