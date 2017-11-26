import * as React from 'react';
import { Row, Col, Panel, ListGroup, DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { UserType } from '../../models';
import { repoUsers } from '../resources/users';

interface PersonRowProps {
  orgSlug: string;
  user: UserType;
}

class PersonRow extends React.Component<PersonRowProps, {}> {
  render() {
    return (
      <li className="list-group-item">
        <span className="pull-right">
          <DropdownButton title="Settings" id={'dropdown-basic-uuid'} pullRight={true}>
            <MenuItem eventKey="1">Manage</MenuItem>
            <MenuItem eventKey="2" style={{color: 'red'}}>Remove from organization</MenuItem>
          </DropdownButton>
        </span>
        <p><Link to={`/organizations/${this.props.orgSlug}/people/${this.props.user.username}`}>
          {this.props.user.fullName}
        </Link></p>
      </li>
    );
  }
}

interface PeopleListProps {
  orgSlug: string;
}

class PeopleList extends React.Component<PeopleListProps, {}> {
  render() {
    return (
      <Row>
        <Col lg={12}>
          <Panel header="Select All">
            <ListGroup fill={true} componentClass="ul">
              {
                repoUsers.map((user, index) => {
                  return <PersonRow key={index} orgSlug={this.props.orgSlug} user={user} />;
                })
              }
            </ListGroup>
          </Panel>
        </Col>
      </Row>
    );
  }
}

export default PeopleList;
