import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ApptTable from '../../components/ApptTable/ApptTable';

class Profile extends Component {


  render() {
    let isArtist = this.props.user.artist ?
      <ApptTable
        user={this.props.user}
      />
      :
      <div>
        <h1>HI CUSTOMER</h1>
      </div>
    return (
      <div>
        {isArtist}
      </div>
    )
  }

}

export default Profile;
