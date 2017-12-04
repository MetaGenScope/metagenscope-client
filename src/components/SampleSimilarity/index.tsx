import * as React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';

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
            <div style={{display: 'table', width: '100%', height: '400px'}}>
              <div style={{display: 'table-cell', verticalAlign: 'middle', padding: '0 15%'}}>
                <h3>Loading...</h3>
                <ProgressBar>
                  <ProgressBar bsStyle="success" now={50} key={1} />
                  <ProgressBar bsStyle="danger" now={25} key={2} active={true} />
                </ProgressBar>
              </div>
            </div>
          }
        </Col>
      </Row>
    );
  }
}

export default SampleSimilarity;
