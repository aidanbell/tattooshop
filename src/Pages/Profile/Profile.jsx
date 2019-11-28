import React, { Component } from 'react';

import ApptTable from '../../components/ApptTable/ApptTable';
import MyAppts from '../../components/MyAppts/MyAppts';

class Profile extends Component {


  render() {
    let isArtist = this.props.user.artist ?
      <ApptTable
        user={this.props.user}
        handleStatus={this.props.handleStatus}
      />
      :
      <MyAppts
        user={this.props.user}
        handleStatus={this.props.handleStatus}
      />
    return (
      <div>
        {isArtist}
      </div>
    )
  }

}

export default Profile;
