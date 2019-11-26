import React, { Component } from 'react';
import ApptForm from '../../components/ApptForm/ApptForm';

class ApptPage extends Component {
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
      <div className = 'ApptPage' >
        <ApptForm
          {...this.props}
          updateMessage={this.updateMessage}
          history={this.props.history}
          user={this.props.user}
          />
      </div>
    );
  }
}


export default ApptPage;
