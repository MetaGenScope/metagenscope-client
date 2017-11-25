import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import AuthForm from './components/AuthForm';
import UserStatus from './components/UserStatus';
import Logout from './components/Logout';
import Home from './components/Home';
import About from './components/About/About';
import Organizations from './components/Organizations/Organizations';
import Dashboard from './components/Dashboard/Dashboard';
import Docs from './components/Docs';

import './App.css';

interface AppState {
  username: string;
  email: string;
  title: string;
  isAuthenticated: boolean;
}

class App extends React.Component<{}, AppState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      username: '',
      email: '',
      title: 'MetaGenScope',
      isAuthenticated: false
    };
  }

  componentWillMount() {
    if (window.localStorage.getItem('authToken')) {
      this.setState({ isAuthenticated: true });
    }
  }

  loginUser(token: string) {
    window.localStorage.setItem('authToken', token);
    this.setState({ isAuthenticated: true });
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
                formType={'register'}
                isAuthenticated={this.state.isAuthenticated}
                loginUser={this.loginUser.bind(this)}
              />
            )}
          />
          <Route
            exact={true}
            path="/login"
            render={() => (
              <AuthForm
                formType={'login'}
                isAuthenticated={this.state.isAuthenticated}
                loginUser={this.loginUser.bind(this)}
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
            path="/dashboard"
            render={() => (
              <Dashboard
                isAuthenticated={this.state.isAuthenticated}
              />
            )}
          />
          <Route
            path="/organizations"
            render={() => (
              <Organizations
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
          <Route exact={true} path="/docs" component={Docs} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
