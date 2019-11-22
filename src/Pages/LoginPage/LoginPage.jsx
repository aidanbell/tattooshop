import React, { Component } from 'react';


class LoginPage extends Component {
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
      <div className = 'LoginPage' >
        <p>LoginPage!</p>
      </div>
    );
  }
}

export default LoginPage;
