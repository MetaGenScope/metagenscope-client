import * as React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import { JsonOrganizationType, OrganizationType } from './models';

import { API_BASE_URL } from '../../utils';

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
      <Row>
        <Helmet>
          {this.state.organization &&
            <title>MetaGenScope :: {this.state.organization.name}</title>
          }
          {!this.state.organization &&
            <title>MetaGenScope :: Not Found</title>
          }
        </Helmet>
        {this.state.organization &&
          <Col>
            <h1>{this.state.organization.name}</h1>
            <p>This is a lab. It would have a description at some point. Maybe?</p>
            <p>Admin email: <Link to={`mailto:${this.state.organization.adminEmail}`}>
              {this.state.organization.adminEmail}
            </Link></p>
          </Col>
        }
        {!this.state.organization &&
          <Col>
            <h1>Not Found</h1>
            Go back to the <Link to="/dashboard/organizations">organizations list</Link>.
          </Col>
        }
        <br />
        <p>Back to <Link to="/organizations">Organizations</Link>.</p>
      </Row>
    );
  }
}

export default OrganizationDetail;
