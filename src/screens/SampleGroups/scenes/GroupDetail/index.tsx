import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import { getSampleGroup, getAnalysisResults } from '../../../../services/api';
import { SampleGroupType } from '../../../../services/api/models/analysisGroup';
import { AnalysisResultType } from '../../../../services/api/models/queryResult';

import { SampleSimilarityModule } from '../../../../display_modules/SampleSimilarity';
import { TaxonAbundanceModule } from '../../../../display_modules/TaxonAbundance';
import { ReadsClassifiedModule } from '../../../../display_modules/ReadsClassified';
import HMPModule from '../../../../display_modules/HMP';
import AGSModule from '../../../../display_modules/AverageGenomeSize';
import BetaDiversityModule from '../../../../display_modules/BetaDiversity';

import SampleList from './components/SampleList';

interface AnalysisGroupList {
  queryResult: AnalysisResultType;
}

const AnalysisGroupList: React.SFC<AnalysisGroupList> = (props) => {
  return (
    <div>
      {props.queryResult.result_types.indexOf('beta_diversity') > -1 &&
        <BetaDiversityModule uuid={props.queryResult.uuid} />
      }
      {props.queryResult.result_types.indexOf('sample_similarity') > -1 &&
        <SampleSimilarityModule uuid={props.queryResult.uuid} />
      }
      {props.queryResult.result_types.indexOf('taxon_abundance') > -1 &&
        <TaxonAbundanceModule uuid={props.queryResult.uuid} />
      }
      {props.queryResult.result_types.indexOf('reads_classified') > -1 &&
        <ReadsClassifiedModule uuid={props.queryResult.uuid} />
      }
      {props.queryResult.result_types.indexOf('hmp') > -1 &&
        <HMPModule uuid={props.queryResult.uuid} />
      }
      {props.queryResult.result_types.indexOf('average_genome_size') > -1 &&
        <AGSModule uuid={props.queryResult.uuid} />
      }
    </div>
  );
};

interface AnalysisGroupDetailProps {
  groupUUID: string;
  updateTheme?(theme?: string): void;
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
        if (this.props.updateTheme !== undefined) {
          this.props.updateTheme(group.theme);
        }
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

  componentWillUnmount() {
    if (this.props.updateTheme !== undefined) {
      this.props.updateTheme(undefined);
    }
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
                <SampleList sampleGroupUuid={this.state.group.uuid} />
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
