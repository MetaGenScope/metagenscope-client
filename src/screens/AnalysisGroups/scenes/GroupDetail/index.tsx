import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import { AnalysisGroupType } from '../../../../services/api/models/analysisGroup';
import { analysisGroups } from '../../../../services/api/mocks/analysisGroups';

import SampleSimilarity from '../../../../components/SampleSimilarity';

interface AnalysisGroupDetailProps {
    groupName: string;
}

class AnalysisGroupDetail extends React.Component<AnalysisGroupDetailProps, {}> {

  group: AnalysisGroupType;

  constructor(props: AnalysisGroupDetailProps) {
    super(props);

    this.group = analysisGroups[0];
  }

  render() {
    return (
      <div>
        <Row>
        <Col lg={12}>
            <h1>{this.group.name}</h1>
            <p>{this.group.description}</p>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <SampleSimilarity groupId={this.group.uuid} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default AnalysisGroupDetail;
