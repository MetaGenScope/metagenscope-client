import * as React from 'react';
import { Row, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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
            <Nav pullRight={true}>
              <LinkContainer to="/about">
                <NavItem>About</NavItem>
              </LinkContainer>
              <LinkContainer to="/docs">
                <NavItem>Documentation</NavItem>
              </LinkContainer>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                {!this.props.isAuthenticated &&
                  <LinkContainer to="/register">
                    <MenuItem>Register</MenuItem>
                  </LinkContainer>
                }
                {!this.props.isAuthenticated &&
                  <LinkContainer to="/login">
                    <MenuItem>Log In</MenuItem>
                  </LinkContainer>
                }
                {this.props.isAuthenticated &&
                  <div>
                    <LinkContainer to="/status">
                      <MenuItem>User Status</MenuItem>
                    </LinkContainer>
                    <MenuItem divider={true} />
                    <LinkContainer to="/logout">
                      <MenuItem>Log Out</MenuItem>
                    </LinkContainer>
                  </div>
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    );
  }
}

export default Header;
