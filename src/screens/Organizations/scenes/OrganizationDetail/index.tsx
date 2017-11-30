import * as React from 'react';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Nav, NavItem, Glyphicon, Badge } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import {
  JsonOrganizationType,
  OrganizationType
} from '../../../../services/api/models/organization';
import OrganizationProjects from './scenes/OrganizationProjects';
import OrganizationPeople from './scenes/OrganizationPeople';
import OrganizationSettings from './scenes/OrganizationSettings';

import { API_BASE_URL } from '../../../../services/api/utils';
import { repoUsers } from '../../../../services/api/mocks/users';

interface OrganizationsProps {
    slug: string;
}

interface OrganizationState {
  organization?: OrganizationType;
}

class OrganizationDetail extends React.Component<OrganizationsProps, OrganizationState> {

  constructor(props: OrganizationsProps) {
    super(props);

    this.state = {
      organization: undefined,
    };
  }

  componentDidMount() {
    // Assume that we are authenticated because Dashboard catches that
    this.getOrganization();
  }

  getOrganization() {
    const options = {
      url: `${API_BASE_URL}/organizations/${this.props.slug}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    };

    return axios(options)
      .then((res) => {
        const rawOrganization = res.data.data as JsonOrganizationType;
        this.setState({
          organization: {
            id: rawOrganization.id,
            name: rawOrganization.name,
            adminEmail: rawOrganization.admin_email,
          },
        });
      })
      .catch((error) => {
        // console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Helmet>
          {this.state.organization &&
            <title>MetaGenScope :: {this.state.organization.name}</title>
          }
          {!this.state.organization &&
            <title>MetaGenScope :: Not Found</title>
          }
        </Helmet>
        {!this.state.organization &&
          <Row>
            <Col>
              <h1>Not Found</h1>
              Go back to the <Link to="/organizations">organizations list</Link>.
            </Col>
          </Row>
        }
        {this.state.organization &&
          <div>
            <Row>
              <Col>
                <h1>{this.state.organization.name}</h1>
                <p>This is a lab. It would have a description at some point. Maybe?</p>
                <p>Admin email: <Link to={`mailto:${this.state.organization.adminEmail}`}>
                  {this.state.organization.adminEmail}
                </Link></p>
              </Col>
            </Row>
            <Row>
              <Nav bsStyle="tabs" activeKey="1">
                <LinkContainer to={`/organizations/${this.props.slug}`} exact={true}>
                  <NavItem eventKey="1"><Glyphicon glyph="star" /> Analysis Groups <Badge>0</Badge></NavItem>
                </LinkContainer>
                <LinkContainer to={`/organizations/${this.props.slug}/people`}>
                  <NavItem eventKey="2"><Glyphicon glyph="user" /> People <Badge>{repoUsers.length}</Badge></NavItem>
                </LinkContainer>
                <LinkContainer to={`/organizations/${this.props.slug}/settings`}>
                  <NavItem eventKey="3"><Glyphicon glyph="cog" /> Settings</NavItem>
                </LinkContainer>
              </Nav>
            </Row>
            <br />
            <Switch>
              <Route
                exact={true}
                path="/organizations/:slug"
                render={(props) => (
                  <OrganizationProjects slug={props.match.params.slug} />
                )}
              />
              <Route
                path="/organizations/:slug/people"
                render={(props) => (
                  <OrganizationPeople />
                )}
              />
              <Route
                path="/organizations/:slug/settings"
                render={(props) => (
                  <OrganizationSettings slug={props.match.params.slug} />
                )}
              />
            </Switch>
          </div>
        }
      </div>
    );
  }
}

export default OrganizationDetail;
