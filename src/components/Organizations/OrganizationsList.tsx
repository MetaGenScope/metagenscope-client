import * as React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import { JsonOrganizationType, OrganizationType } from './models';

import { API_BASE_URL } from '../../utils';

interface OrganizationsState {
  organizations: Array<OrganizationType>;
}

class OrganizationsList extends React.Component<{}, OrganizationsState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      organizations: [],
    };
  }

  componentDidMount() {
    // Assume that we are authenticated because Dashboard catches that
    this.getOrganizations();
  }

  getOrganizations() {
    const options = {
      url: `${API_BASE_URL}/organizations`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    };

    return axios(options)
      .then((res) => {
        const rawOrganizations = res.data.data.organizations as Array<JsonOrganizationType>;
        const organizations: Array<OrganizationType> = rawOrganizations.map((organization) => {
          return {
            id: organization.id,
            name: organization.name,
            adminEmail: organization.admin_email,
          };
        });
        this.setState({ organizations });
      })
      .catch((error) => {
        // console.log(error);
      });
  }

  render() {
    return (
      <Row>
        <Helmet>
          <title>MetaGenScope :: Organizations</title>
        </Helmet>
        <Col>
          <h1>Organizations</h1>
          <Table striped={true} hover={true}>
            <thead>
              <tr>
                <th>Organization</th>
                <th>Admin Email</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.organizations.map((organization, index) => {
                  return (
                    <tr key={index}>
                      <td><Link to={`/organizations/${organization.id}`}>{organization.name}</Link></td>
                      <td>{organization.adminEmail}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
          <LinkContainer to="/organizations/new">
            <Button>
              Create Organization
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    );
  }
}

export default OrganizationsList;
