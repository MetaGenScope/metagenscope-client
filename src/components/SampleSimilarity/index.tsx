import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import {
  sampleSimilarity,
  convertOldResults,
} from '../../services/api/mocks/sampleSimilarity';
import ScatterPlot, { ScatterPlotDataType } from '../ScatterPlot';

type State = {
  data?: ScatterPlotDataType;
};

class SampleSimilarity extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    // Simulate network request
    setTimeout(
      () => {
        this.setState({
          data: convertOldResults(sampleSimilarity),
        });
      },
      1000);
  }

  render() {
    return (
      <Row>
        <Col lg={2}>
          <h2>Sample Similarity</h2>
          <p>This plot displays a dimensionality reduction of the data.</p>
          <p>Samples are drawn near to similar samples in high dimensional space using a {' '}
            machine learning algorithm: T-Stochastic Neighbours Embedding.</p>
          <p>The plot can be colored by different sample metadata and the position of the {' '}
            points can be adjust to reflect the analyses of different tools.</p>
        </Col>
        <Col lg={10}>
          {(this.state.data !== undefined) && 
            <ScatterPlot data={this.state.data} />
          }
          {!this.state.data &&
            <h3>Loading...</h3>
          }
        </Col>
      </Row>
    );
  }
}

export default SampleSimilarity;
