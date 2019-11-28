import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import apptService from '../../utils/apptService'

import Landing from '../../components/Landing/Landing';
import NavBar from '../../components/NavBar/NavBar';

import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import About from '../About/About';
import NewApptPage from '../NewApptPage/NewApptPage';
import Appointment from '../Appointment/Appointment';
import Artists from '../Artists/Artists';
import Profile from '../Profile/Profile';
import Aftercare from '../Aftercare/Aftercare';

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

  handleStatus = (status) => {
    switch(status) {
      case "requested":
        return(
          <h4><span class="badge badge-info">REQUESTED</span></h4>
        );
      case "accepted":
        return(
          <h4><span class="badge badge-primary">ACCEPTED</span></h4>
        );
      case "deposit-received":
        return(
          <h4><span class="badge badge-secondary">DEPOSIT RECEIVED</span></h4>
        );
      case "booked":
        return(
          <h4><span class="badge badge-success">BOOKED</span></h4>
        );
    }
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
            />
          }/>
          <Route exact path='/artists' render={props =>
            <Artists
              {...props}
              user={this.state.user}
            />
          }/>
          <Route exact path='/profile' render={props =>
            <Profile
              {...props}
              user={this.state.user}
              handleStatus={this.handleStatus}
            />
          }/>
        <Route exact path='/aftercare' render={props =>
            <Aftercare
              {...props}
              user={this.state.user}
            />
          }/>
          <Route exact path='/:id' render={props =>
            <Appointment
              {...props}
              user={this.state.user}
              handleStatus={this.handleStatus}
            />
          }/>
        </Switch>
      </div>
    );
}
}

export default App;
