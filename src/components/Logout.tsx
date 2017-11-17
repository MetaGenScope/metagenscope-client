import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

interface LogoutProp {
  isAuthenticated: boolean;
  logoutUser(): void;
}

class Logout extends Component<LogoutProp, {}> {
  componentDidMount() {
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        <p>You are now logged out. Click <Link to="/login">here</Link> to log back in.</p>
      </div>
    );
  }
}

export default Logout;
