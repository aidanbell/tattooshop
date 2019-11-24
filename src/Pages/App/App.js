import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Landing from '../../components/Landing/Landing';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {...this.getInitialState()};
  }

  getInitialState() {
    return {
      testState: 'Hello'
    };
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' render={() =>
            <Landing />
          }/>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage />
          }/>
          <Route exact path='/login' render={({ history }) =>
            <LoginPage />
          }/>
        </Switch>
      </div>
    );
}
}

export default App;
