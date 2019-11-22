import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Landing from '../../components/Landing/Landing';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

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
        <header className="App-header">
          <div class="title">Tattoo Shop</div>
          <div class="nav">
            <ul>
              <li>Log In</li>
              <li>Artists</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
        </div>
        </header>
        <Switch>
          <Route exact path='/' render={() =>
            <Landing />
          }/>
          <Route exact path='/signup' render={() =>
            <SignupPage />
          }/>
          <Route exact path='/login' render={() =>
            <LoginPage />
          }/>
        </Switch>
      </div>
    );
}
}

export default App;
