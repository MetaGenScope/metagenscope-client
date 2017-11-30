import * as React from 'react';

import { AnalysisGroupType } from '../../../../services/api/models/analysisGroup';
import { analysisGroups } from '../../../../services/api/mocks/analysisGroups';

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
      <div>
        <h1>{this.group.name}</h1>
        <p>{this.group.description}</p>
      </div>
    );
  }
}

export default AnalysisGroupDetail;
