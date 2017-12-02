import * as React from 'react';
import { Row, Col } from 'react-bootstrap';

import { AnalysisGroupType } from '../../../../services/api/models/analysisGroup';
import { analysisGroups } from '../../../../services/api/mocks/analysisGroups';

import SampleSimilarity from '../../../../components/SampleSimilarity';

interface Props {
    groupName: string;
}

class AnalysisGroupDetail extends React.Component<Props, {}> {

  group: AnalysisGroupType;

  constructor(props: Props) {
    super(props);

    this.group = analysisGroups[0];
  }

  render() {
    return (
      <Row>
        <h1>{this.group.name}</h1>
        <p>{this.group.description}</p>
        <Row>
          <Col lg={12}>
            <SampleSimilarity />
          </Col>
        </Row>
      </Row>
    );
  }
}

export default AnalysisGroupDetail;
