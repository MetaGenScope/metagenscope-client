import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface UserProps {
  isAuthenticated: boolean;
}

interface UserState {
  created_at: string;
  email: string;
  id: string;
  username: string;
}

class UserStatus extends Component<UserProps, UserState> {

  constructor (props: UserProps) {
    super(props);
    this.state = {
      created_at: '',
      email: '',
      id: '',
      username: ''
    };
  }

  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.getUserStatus();
    }
  }

  getUserStatus() {
    const options = {
      url: `${process.env.REACT_APP_METAGENSCOPE_SERVICE_URL}/auth/status`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.authToken}`
      }
    };

    return axios(options)
      .then((res) => {
        this.setState({
          created_at: res.data.data.created_at,
          email: res.data.data.email,
          id: res.data.data.id,
          username: res.data.data.username
        });
      })
      .catch((error) => { console.log(error); });
  }

  render() {
    if (!this.props.isAuthenticated) {
      return <p>You must be logged in to view this. Click <Link to="/login">here</Link> to log back in.</p>;
    }
    return (
      <div>
        <ul>
          <li><strong>User ID:</strong> {this.state.id}</li>
          <li><strong>Email:</strong> {this.state.email}</li>
          <li><strong>Username:</strong> {this.state.username}</li>
        </ul>
      </div>
    );
  }
}

export default UserStatus;
