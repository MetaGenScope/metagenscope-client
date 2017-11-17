import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './components/Header';
import AuthForm from './components/AuthForm';
import UserStatus from './components/UserStatus';
import Logout from './components/Logout';
import Home from './components/Home';
import About from './components/About';

import './App.css';

interface AppState {
  username: string;
  email: string;
  title: string;
  formData: any;
  isAuthenticated: boolean;
}

class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      username: '',
      email: '',
      title: 'MetaGenScope',
      formData: {
        username: '',
        email: '',
        password: ''
      },
      isAuthenticated: false
    };
  }

  handleUserFormSubmit(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    const formType = window.location.href.split('/').reverse()[0];
    let data;
    if (formType === 'login') {
      data = {
        email: this.state.formData.email,
        password: this.state.formData.password
      };
    }
    if (formType === 'register') {
      data = {
        username: this.state.formData.username,
        email: this.state.formData.email,
        password: this.state.formData.password
      };
    }
    const url = `${process.env.REACT_APP_METAGENSCOPE_SERVICE_URL}/auth/${formType}`;
    axios.post(url, data)
    .then((res) => {
      this.setState({
        formData: {username: '', email: '', password: '' },
        username: '',
        email: '',
        isAuthenticated: true
      });
      window.localStorage.setItem('authToken', res.data.auth_token);
      
    })
    .catch((err) => { console.log(err); });
  }

  handleFormChange(event: React.FormEvent<HTMLFormElement>) {
    const obj = this.state.formData;
    obj[event.currentTarget.name] = event.currentTarget.value;
    this.setState(obj);
  }

  logoutUser() {
    window.localStorage.clear();
    this.setState({ isAuthenticated: false });
  }  

  render() {
    return (
      <div>
        <Header title={this.state.title} isAuthenticated={this.state.isAuthenticated} />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route
            exact={true}
            path="/register"
            render={() => (
              <AuthForm
                formType={'Register'}
                formData={this.state.formData}
                handleUserFormSubmit={this.handleUserFormSubmit.bind(this)}
                handleFormChange={this.handleFormChange.bind(this)}
                isAuthenticated={this.state.isAuthenticated}
              />
            )}
          />
          <Route
            exact={true}
            path="/login"
            render={() => (
              <AuthForm
                formType={'Login'}
                formData={this.state.formData}
                handleUserFormSubmit={this.handleUserFormSubmit.bind(this)}
                handleFormChange={this.handleFormChange.bind(this)}
                isAuthenticated={this.state.isAuthenticated}
              />
            )}
          />
          <Route
            exact={true}
            path="/status"
            render={() => (
              <UserStatus
                isAuthenticated={this.state.isAuthenticated}
              />
            )}
          />
          <Route
            exact={true}
            path="/logout"
            render={() => (
              <Logout
                logoutUser={this.logoutUser.bind(this)}
                isAuthenticated={this.state.isAuthenticated}
              />
            )}
          />
          <Route exact={true} path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
