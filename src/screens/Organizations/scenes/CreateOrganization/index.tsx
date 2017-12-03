import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import { API_BASE_URL } from '../../../../services/api/utils';

type FormDataType = {
  name: string;
  adminEmail: string;
};

type Props = {
  isAuthenticated: boolean;
};

type CreateOrganizationState = {
  didCreate: boolean;
  formData: FormDataType;
};

class CreateOrganization extends React.Component<Props, CreateOrganizationState> {

  constructor(props: Props) {
    super(props);

    this.state = {
      didCreate: false,
      formData: {
        name: '',
        adminEmail: '',
      },
    };

    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  clearForm() {
    this.setState({
      formData: {name: '', adminEmail: ''}
    });
  }

  handleFormChange(event: React.FormEvent<HTMLInputElement>) {
    const obj = this.state.formData;
    obj[event.currentTarget.name] = event.currentTarget.value;
    this.setState({formData: obj});
  }

  handleUserFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const options = {
      url: `${API_BASE_URL}/organizations`,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      },
      data: this.state.formData,
    };

    return axios(options)
      .then((res) => {
        this.setState({ didCreate: true });
      })
      .catch((error) => {
        // console.log(error);
      });
  }

  render() {
    if (!this.props.isAuthenticated) {
      return <p>You must be logged in to view this. Click <Link to="/login">here</Link> to log back in.</p>;
    }
    if (this.state.didCreate) {
      return <Redirect to="/organizations" />;
    }
    return (
      <Row>
        <Helmet>
          <title>MetaGenScope :: Create Organization</title>
        </Helmet>
        <Col lg={6}>
          <h1>Create Organization</h1>
          <form onSubmit={(event) => this.handleUserFormSubmit(event)}>
            <div className="form-group">
              <label htmlFor="organizationName" className="control-label">Organization Name</label>
              <input
                id="organizationName"
                name="name"
                className="form-control"
                type="text"
                value={this.state.formData.name}
                onChange={this.handleFormChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="organizationEmail" className="control-label">Admin Email Address</label>
              <input
                id="organizationEmail"
                name="adminEmail"
                className="form-control"
                placeholder="email@domain.org"
                type="email"
                value={this.state.formData.adminEmail}
                onChange={this.handleFormChange}
              />
            </div>
            <Button type="submit">
              Create
            </Button>
          </form>
          <br />
          <p>Back to <Link to="/organizations">Organizations</Link>.</p>
        </Col>
      </Row>
    );
  }
}

export default CreateOrganization;
