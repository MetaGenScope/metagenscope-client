import * as React from 'react';
import { Switch, Route } from 'react-router';

import PeopleList from './components/PeopleList';
import PersonDetail from './components/PersonDetail';

class OrganizationPeople extends React.Component<{}, {}> {
  render() {
    return (
      <Switch>
        <Route
          exact={true}
          path="/organizations/:slug/people"
          render={(props) => (
            <PeopleList orgSlug={props.match.params.slug} />
          )}
        />
        <Route
          exact={true}
          path="/organizations/:slug/people/:username"
          render={(props) => (
            <PersonDetail
              orgSlug={props.match.params.slug}
              username={props.match.params.username}
            />
          )}
        />
      </Switch>
    );
  }
}

export default OrganizationPeople;
