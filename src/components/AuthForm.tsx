import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

interface FormProp {
  formType: string;
  formData: any;
  isAuthenticated: boolean;
  handleUserFormSubmit(event: React.FormEvent<HTMLFormElement>): void;
  handleFormChange(event: React.FormEvent<HTMLInputElement>): void;
}

const Form = (props: FormProp) => {
  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Row>
      <h1>{props.formType}</h1>
      <hr/><br/>
      <Col lg={6} lgOffset={3}>
        <form onSubmit={(event) => props.handleUserFormSubmit(event)}>
          {props.formType === 'Register' &&
            <div className="form-group">
              <input
                name="username"
                className="form-control input-lg"
                type="text"
                placeholder="Enter a username"
                required={true}
                value={props.formData.username}
                onChange={props.handleFormChange}
              />
            </div>
          }
          <div className="form-group">
            <input
              name="email"
              className="form-control input-lg"
              type="email"
              placeholder="Enter an email address"
              required={true}
              value={props.formData.email}
              onChange={props.handleFormChange}
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              className="form-control input-lg"
              type="password"
              placeholder="Enter a password"
              required={true}
              value={props.formData.password}
              onChange={props.handleFormChange}
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            value="Submit"
          />
        </form>
      </Col>
    </Row>
  );
};

export default Form;
