import * as React from 'react';
import { Row, Col, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Switch, Route, Redirect } from 'react-router';

import Settings from './components/Profile';

interface OrganizationSettingsProps {
  slug: string;
}

export default class OrganizationSettings extends React.Component<OrganizationSettingsProps, {}> {
  render() {
    return (
      <Row>
        <Col lg={3}>
          <Panel header="Organization Settings">
            <ListGroup fill={true}>
            <LinkContainer to={`/organizations/${this.props.slug}/settings/profile`}>
                <ListGroupItem>Profile</ListGroupItem>
              </LinkContainer>
              <LinkContainer to={`/organizations/${this.props.slug}/settings/member_privileges`}>
                <ListGroupItem>Member privileges</ListGroupItem>
              </LinkContainer>
              <LinkContainer to={`/organizations/${this.props.slug}/settings/projects`}>
                <ListGroupItem>Projects</ListGroupItem>
              </LinkContainer>
            </ListGroup>
          </Panel>
          <Panel header="Developer Settings">
            <ListGroup fill={true}>
              <LinkContainer to={`/organizations/${this.props.slug}/settings/tokens`}>
                <ListGroupItem>API Tokens</ListGroupItem>
              </LinkContainer>
            </ListGroup>
          </Panel>
        </Col>
        <Col lg={9}>
          <Switch>
            <Route
              exact={true}
              path="/organizations/:slug/settings"
              render={(props) => (
                <Redirect to={`/organizations/${this.props.slug}/settings/profile`} />
              )}
            />
            <Route
              exact={true}
              path="/organizations/:slug/settings/profile"
              render={(props) => (
                <Settings slug={this.props.slug} />
              )}
            />
            <Route
              exact={true}
              path="/organizations/:slug/settings/member_privileges"
              render={(props) => (
                <div>
                  <h3>Member Privileges</h3>
                  <hr />
                </div>
              )}
            />
            <Route
              exact={true}
              path="/organizations/:slug/settings/projects"
              render={(props) => (
                <div>
                  <h3>Projects</h3>
                  <hr />
                </div>
              )}
            />
            <Route
              exact={true}
              path="/organizations/:slug/settings/tokens"
              render={(props) => (
                <div>
                  <h3>API Tokens</h3>
                  <hr />
                </div>
              )}
            />
          </Switch>
        </Col>
      </Row>
    );
  } 
}
