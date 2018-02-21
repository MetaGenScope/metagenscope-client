import * as React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Well, Panel, Button, Glyphicon } from 'react-bootstrap';

import AnalysisGroupList from '../../../../../../components/AnalysisGroupList';

import { AnalysisGroupType } from '../../../../../../services/api/models/analysisGroup';
import { UserType } from '../../../../../../services/api/models/user';

interface OrganizationProjectsProps {
  slug: string;
  users: Array<UserType>;
  sampleGroups: Array<AnalysisGroupType>;
}

const OrganizationProjects: React.SFC<OrganizationProjectsProps> = (props) => {
  return (
    <Row>
      <Col lg={8}>
        {props.sampleGroups &&
          <AnalysisGroupList groups={props.sampleGroups} organization={props.slug} />
        }
        {!props.sampleGroups &&
          <Well className="text-center">
            <h4>This organization has no analysis groups.</h4>
            <LinkContainer to="#">
              <Button bsStyle="success">New Analysis Group</Button>
            </LinkContainer>
          </Well>
        }
      </Col>
      <Col lg={4}>
        <Panel>
          <Panel.Body>
            <Link to={`/organizations/${props.slug}/people`} style={{display: 'block'}}>People
              <span className="pull-right">{props.users.length} <Glyphicon glyph="chevron-right" /></span>
            </Link>
            <br />
            <ul>
              {
                props.users.map((user, index) => {
                  return (
                    <li key={index}>
                      <Link to={`/organizations/${props.slug}/people/${user.username}`}>{user.username}</Link>
                    </li>
                  );
                })
              }
            </ul>
          </Panel.Body>
          <Panel.Footer>
            <Button>Invite someone</Button>
          </Panel.Footer>
        </Panel>
      </Col>
    </Row>
  );
};

export default OrganizationProjects;
