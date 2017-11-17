import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

interface HeaderProps {
    title: string;
    isAuthenticated: boolean;
}

class Header extends React.Component<HeaderProps, {}> {
    render() {
      return (
        <Navbar inverse={true} collapseOnSelect={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <span>{this.props.title}</span>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/">
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem eventKey={2}>About</NavItem>
              </LinkContainer>
              <LinkContainer to="/status">
                <NavItem eventKey={3}>User Status</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight={true}>
              {!this.props.isAuthenticated &&
                <LinkContainer to="/register">
                  <NavItem eventKey={1}>Register</NavItem>
                </LinkContainer>
              }
              {!this.props.isAuthenticated &&
                <LinkContainer to="/login">
                  <NavItem eventKey={2}>Log In</NavItem>
                </LinkContainer>
              }
              {this.props.isAuthenticated &&
                <LinkContainer to="/logout">
                  <NavItem eventKey={3}>Log Out</NavItem>
                </LinkContainer>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
}

export default Header;