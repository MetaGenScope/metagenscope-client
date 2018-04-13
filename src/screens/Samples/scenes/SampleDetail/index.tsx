import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import { getSample, getAnalysisResults } from '../../../../services/api';
import { SampleType } from '../../../../services/api/models/sample';
import { AnalysisResultType } from '../../../../services/api/models/queryResult';

import { ReadsClassifiedModule } from '../../../../display_modules/ReadsClassified';

interface AnalysisGroupList {
  queryResult: AnalysisResultType;
}

const AnalysisGroupList: React.SFC<AnalysisGroupList> = (props) => {
  return (
    <div>
      {props.queryResult.result_types.indexOf('reads_classified') > -1 &&
        <ReadsClassifiedModule uuid={props.queryResult.uuid} isSingleton={true} />
      }
    </div>
  );
};

interface AnalysisGroupDetailProps {
  sampleUuid: string;
}

interface AnalysisGroupDetailState {
  sample?: SampleType;
  analysisResults?: AnalysisResultType;
  error?: string;
}

class AnalysisGroupDetail extends React.Component<AnalysisGroupDetailProps, AnalysisGroupDetailState> {

  constructor(props: AnalysisGroupDetailProps) {
    super(props);

    this.state = {
      sample: undefined,
      analysisResults: undefined,
      error: undefined,
    };
  }

  componentDidMount() {
    getSample(this.props.sampleUuid)
      .then((sample) => {
        this.setState({ sample });
        return sample;
      })
      .then((group) => {
        return getAnalysisResults(group.analysisResultUuid);
      })
      .then((analysisResults) => {
        this.setState({ analysisResults });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <div>
        {this.state.sample &&
          <div>
            <Helmet>
              <title>MetaGenScope :: {this.state.sample.name}</title>
            </Helmet>
            <Row>
              <Col lg={12}>
                <h1>{this.state.sample.name}</h1>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg={12}>
                {this.state.analysisResults &&
                  <AnalysisGroupList queryResult={this.state.analysisResults} />
                }
                {!this.state.analysisResults &&
                  <h3>Loading...</h3>
                }
              </Col>
            </Row>
          </div>
        }
        {this.state.error &&
          <h1>Error: {this.state.error}</h1>
        }
        {!this.state.sample && !this.state.error &&
          <h1>Loading...</h1>
        }
      </div>
    );
  }
}

export default AnalysisGroupDetail;
