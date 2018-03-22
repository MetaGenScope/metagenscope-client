import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import { getSampleGroup, getAnalysisResults } from '../../../../services/api';
import { SampleGroupType } from '../../../../services/api/models/analysisGroup';
import { AnalysisResultType } from '../../../../services/api/models/queryResult';

import { SampleSimilarity } from '../../../../components/SampleSimilarity';
import { TaxonAbundance } from '../../../../components/TaxonAbundance';
import { HMPPlot } from '../../../../components/HMPPlot';
import { ReadsClassifiedPlot } from '../../../../components/ReadsClassified';

interface AnalysisGroupList {
  queryResult: AnalysisResultType;
}

const AnalysisGroupList: React.SFC<AnalysisGroupList> = (props) => {
  return (
    <div>
      {props.queryResult.result_types.indexOf('sample_similarity') > -1 &&
        <SampleSimilarity id={props.queryResult.uuid} />
      }
      {props.queryResult.result_types.indexOf('taxon_abundance') > -1 &&
        <TaxonAbundance id={props.queryResult.uuid} />
      }
      {props.queryResult.result_types.indexOf('reads_classified') > -1 &&
        <ReadsClassifiedPlot id={props.queryResult.uuid} />
      }
      {props.queryResult.result_types.indexOf('hmp') > -1 &&
        <HMPPlot id={props.queryResult.uuid} />
      }
    </div>
  );
};

interface AnalysisGroupDetailProps {
  groupUUID: string;
}

interface AnalysisGroupDetailState {
  group?: SampleGroupType;
  queryResults?: AnalysisResultType;
  error?: string;
}

class AnalysisGroupDetail extends React.Component<AnalysisGroupDetailProps, AnalysisGroupDetailState> {

  constructor(props: AnalysisGroupDetailProps) {
    super(props);

    this.state = {
      group: undefined,
      queryResults: undefined,
      error: undefined,
    };
  }

  componentDidMount() {
    getSampleGroup(this.props.groupUUID)
      .then((group) => {
        this.setState({ group });
        return group;
      })
      .then((group) => {
        return getAnalysisResults(group.analysisResultId);
      })
      .then((queryResults) => {
        this.setState({ queryResults });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <div>
        {this.state.group &&
          <div>
            <Helmet>
              <title>MetaGenScope :: {this.state.group.name}</title>
            </Helmet>
            <Row>
              <Col lg={12}>
                <h1>{this.state.group.name}</h1>
                <p>{this.state.group.description}</p>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col lg={12}>
                {this.state.queryResults &&
                  <AnalysisGroupList queryResult={this.state.queryResults} />
                }
                {!this.state.queryResults &&
                  <h3>Loading...</h3>
                }
              </Col>
            </Row>
          </div>
        }
        {this.state.error &&
          <h1>Error: {this.state.error}</h1>
        }
        {!this.state.group && !this.state.error &&
          <h1>Loading...</h1>
        }
      </div>
    );
  }
}

export default AnalysisGroupDetail;