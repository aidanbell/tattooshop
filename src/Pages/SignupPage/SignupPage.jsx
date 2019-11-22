import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
  }

  updateMessage = (msg) => {
    this.setState({
      message: msg
    });
  }

  render() {
    return (
      <div className = 'SignupPage' >
        <SignupForm />
      </div>
    );
  }
}

export default SignupPage;
