import * as React from 'react';

import { AnalysisGroupType } from '../../models/analysisGroup';
import { Link } from 'react-router-dom';

interface Prop {
  group: AnalysisGroupType;
  organization: string;
}

class AnalysisGroupListItem extends React.Component<Prop, {}> {
  render() {
    return (
      <li className="analysis-group-list-item">
        <Link to={`/organizations/${this.props.organization}/${this.props.group.uuid}`}>
          <h4>{this.props.group.name}</h4>
        </Link>
        <p>{this.props.group.description}</p>
      </li>
    );
  }
}

export default AnalysisGroupListItem;