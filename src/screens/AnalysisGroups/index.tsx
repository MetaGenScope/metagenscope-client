import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import AnalysisGroupDetail from './scenes/GroupDetail';

interface PersonRowProps {
  isAuthenticated: boolean;
}

const AnalysisGroups: React.SFC<PersonRowProps> = (props) => {
  return (
    <Switch>
      <Route
        path="/analysis-groups/:slug"
        render={(routeProps) => (
          <AnalysisGroupDetail
            groupSlug={routeProps.match.params.slug}
          />
        )}
      />
    </Switch>
  );
};

export default AnalysisGroups;
