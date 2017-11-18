import * as React from 'react';
import { Row, Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
  isAuthenticated: boolean;
}

class Header extends React.Component<HeaderProps, {}> {
  render() {
    return (
      <Row>
        <Navbar collapseOnSelect={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">{this.props.title}</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <IndexLinkContainer to="/">
                <NavItem>Home</NavItem>
              </IndexLinkContainer>
              <LinkContainer to="/about">
                <NavItem>About</NavItem>
              </LinkContainer>
              <LinkContainer to="/status">
                <NavItem>User Status</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight={true}>
              {!this.props.isAuthenticated &&
                <LinkContainer to="/register">
                  <NavItem>Register</NavItem>
                </LinkContainer>
              }
              {!this.props.isAuthenticated &&
                <LinkContainer to="/login">
                  <NavItem>Log In</NavItem>
                </LinkContainer>
              }
              {this.props.isAuthenticated &&
                <LinkContainer to="/logout">
                  <NavItem>Log Out</NavItem>
                </LinkContainer>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    );
  }
}

export default Header;
