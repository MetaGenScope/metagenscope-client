import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

import { AnalysisGroupType } from '../../../../services/api/models/analysisGroup';
import { getAnalysisGroup } from '../../../../services/api';

import SampleSimilarity from '../../../../components/SampleSimilarity';
import { TaxonAbundance } from '../../../../components/TaxonAbundance';

interface AnalysisGroupDetailProps {
  groupSlug: string;
}

interface AnalysisGroupDetailState {
  group?: AnalysisGroupType;
}

class AnalysisGroupDetail extends React.Component<AnalysisGroupDetailProps, AnalysisGroupDetailState> {

  constructor(props: AnalysisGroupDetailProps) {
    super(props);

    this.state = {
      group: undefined,
    };
  }

  componentDidMount() {
    getAnalysisGroup(this.props.groupSlug)
      .then((group) => {
        this.setState({ group });
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
                <SampleSimilarity groupId={this.state.group.slug} />
                <hr />
                <TaxonAbundance groupId={this.state.group.slug} />
              </Col>
            </Row>
          </div>
        }
      </div>
    );
  }
}

export default AnalysisGroupDetail;
