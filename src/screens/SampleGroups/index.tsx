import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import AnalysisGroupDetail from './scenes/GroupDetail';

interface PersonRowProps {
  isAuthenticated: boolean;
}

const SampleGroups: React.SFC<PersonRowProps> = (props) => {
  return (
    <Switch>
      <Route
        path="/sample-groups/:uuid"
        render={(routeProps) => (
          <AnalysisGroupDetail
            groupUUID={routeProps.match.params.uuid}
          />
        )}
      />
    </Switch>
  );
};

export default SampleGroups;
