import * as React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Well, Panel, Button, Glyphicon } from 'react-bootstrap';

import AnalysisGroupList from '../../../common/AnalysisGroupList/AnalysisGroupList';

import { repoUsers } from './resources/users';
import { analysisGroups } from './resources/analysisGroups';

interface OrganizationProjectsProps {
  slug: string;
}

const peopleFooter = (
  <Button>Invite someone</Button>
);

class OrganizationProjects extends React.Component<OrganizationProjectsProps, {}> {
  render() {
    return (
      <Row>
        <Col lg={8}>
          <Well className="text-center">
            <h4>This organization has no analysis groups.</h4>
            <LinkContainer to="#">
              <Button bsStyle="success">New Analysis Group</Button>
            </LinkContainer>
          </Well>
          <AnalysisGroupList groups={analysisGroups} organization={this.props.slug} />
        </Col>
        <Col lg={4}>
          <Panel footer={peopleFooter}>
            <Link to={`/organizations/${this.props.slug}/people`} style={{display: 'block'}}>People
              <span className="pull-right">{repoUsers.length} <Glyphicon glyph="chevron-right" /></span>
            </Link>
            <br />
            <ul>
              {
                repoUsers.map((user, index) => {
                  return (
                    <li key={index}>
                      <Link to={`/organizations/${this.props.slug}/people/${user.username}`}>{user.fullName}</Link>
                    </li>
                  );
                })
              }
            </ul>
          </Panel>
        </Col>
      </Row>
    );
  }
}

export default OrganizationProjects;
