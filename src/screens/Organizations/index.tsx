import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import OrganizationsList from './scenes/OrganizationsList';
import OrganizationDetail from './scenes/OrganizationDetail';
import CreateOrganization from './scenes/CreateOrganization';
import AnalysisGroupDetail from '../AnalysisGroups/scenes/GroupDetail';

interface OrganizationsProps {
  isAuthenticated: boolean;
}

class Organizations extends React.Component<OrganizationsProps, {}> {
  render() {
    return (
      <Switch>
        <Route exact={true} path="/organizations" component={OrganizationsList} />
        <Route
          exact={true}
          path="/organizations/new"
          render={(props) => (
            <CreateOrganization {...this.props} />
          )}
        />
        <Route
          exact={true}
          path="/organizations/:slug"
          render={(props) => (
            <OrganizationDetail slug={props.match.params.slug} />
          )}
        />
        <Route
          path="/organizations/:slug/people"
          render={(props) => (
            <OrganizationDetail slug={props.match.params.slug} />
          )}
        />
        <Route
          path="/organizations/:slug/settings"
          render={(props) => (
            <OrganizationDetail slug={props.match.params.slug} />
          )}
        />
        <Route
          path="/organizations/:slug/:group_name"
          render={(props) => (
            <AnalysisGroupDetail groupName={props.match.params.group_name} />
          )}
        />
      </Switch>
    );
  }
}

export default Organizations;
