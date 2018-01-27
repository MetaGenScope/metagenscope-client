import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import { getAnalysisGroup, getQueryResults } from '../../../../services/api';
import { AnalysisGroupType } from '../../../../services/api/models/analysisGroup';
import { QueryResultType } from '../../../../services/api/models/queryResult';

import SampleSimilarity from '../../../../components/SampleSimilarity';
import { TaxonAbundance } from '../../../../components/TaxonAbundance';

interface AnalysisGroupDetailProps {
  groupSlug: string;
}

interface AnalysisGroupDetailState {
  group?: AnalysisGroupType;
  queryResults?: QueryResultType;
}

class AnalysisGroupDetail extends React.Component<AnalysisGroupDetailProps, AnalysisGroupDetailState> {

  constructor(props: AnalysisGroupDetailProps) {
    super(props);

    this.state = {
      group: undefined,
      queryResults: undefined,
    };
  }

  componentDidMount() {
    getAnalysisGroup(this.props.groupSlug)
      .then((group) => {
        this.setState({ group });
        return group;
      })
      .then((group) => {
        return getQueryResults(group.queryResultId);
      })
      .then((queryResults) => {
        this.setState({ queryResults });
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
                {this.state.queryResults && this.state.queryResults.sample_similarity &&
                  <SampleSimilarity sampleSimilarity={this.state.queryResults.sample_similarity} />
                }
                <hr />
                {this.state.queryResults && this.state.queryResults.taxon_abundance &&
                  <TaxonAbundance taxonAbundance={this.state.queryResults.taxon_abundance} />
                }
              </Col>
            </Row>
          </div>
        }
      </div>
    );
  }
}

export default AnalysisGroupDetail;
