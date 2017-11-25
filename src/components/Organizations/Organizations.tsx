import * as React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import OrganizationsList from './OrganizationsList';
import OrganizationDetail from './OrganizationDetail';

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
        <Route
          exact={true}
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
