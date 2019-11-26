import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import apptService from '../../utils/apptService'

import Landing from '../../components/Landing/Landing';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import About from '../About/About';
import NavBar from '../../components/NavBar/NavBar';
import NewApptPage from '../NewApptPage/NewApptPage';
import Appointment from '../Appointment/Appointment';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      user: userService.getUser(),
    }
  }

  getInitialState() {
    return {
      testState: 'Hello'
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={() =>
            <Landing />
          }/>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/about' render={({ history }) =>
            <About />
          }/>
          <Route exact path='/book_appointment' render={({ history }) =>
            <NewApptPage
              user={this.state.user}
              history={history}
              appt={this.state.appt}
            />
          }/>
        <Route exact path='/:id' render={props =>
              <Appointment
                {...props}

                />
            }/>
        </Switch>
      </div>
    );
}
}

export default App;
