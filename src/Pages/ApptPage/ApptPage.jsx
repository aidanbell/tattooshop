import React, { Component } from 'react';
import ApptForm from '../../components/ApptForm/ApptForm';

class ApptPage extends Component {
  render() {
    return (
      <div className = 'ApptPage' >
        <ApptForm {...this.props}/>
      </div>
    );
  }
}


export default ApptPage;
