import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';

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
      );
    }
}

export default Header;