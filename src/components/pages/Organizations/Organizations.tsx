import * as React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import OrganizationsList from './OrganizationsList';
import OrganizationDetail from './OrganizationDetail/OrganizationDetail';
import CreateOrganization from './CreateOrganization';
import AnalysisGroupDetail from '../AnalysisGroups/AnalysisGroupDetail';

interface OrganizationsProps {
  isAuthenticated: boolean;
}

class Organizations extends React.Component<OrganizationsProps, {}> {
  render() {
    if (!this.props.isAuthenticated) {
      return <p>You must be logged in to view this. Click <Link to="/login">here</Link> to log back in.</p>;
    }
    return (
      <Switch>
        <Route exact={true} path="/organizations" component={OrganizationsList} />
        <Route exact={true} path="/organizations/new" component={CreateOrganization} />
        <Route
          path="/organizations/:slug/:group_name"
          render={(props) => (
            <AnalysisGroupDetail groupName={props.match.params.group_name} />
          )}
        />
        <Route
          path="/organizations/:slug"
          render={(props) => (
            <OrganizationDetail slug={props.match.params.slug} />
          )}
        />
      </Switch>
    );
  }
}

export default Organizations;
