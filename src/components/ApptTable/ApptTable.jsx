import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ApptTable.css';

class ApptTable extends Component {
  constructor(props) {
    super(props);
    this.state={
      appts: []
    }
  }

  componentDidMount() {
    fetch(`/api/appts/getAppts/${this.props.user.first_name}`)
      .then((res) => res.json())
      .then((appts) => this.setState({
        appts: appts,
    }))
  }

  render() {
    return (
      <div>
        <table className="table">
          <tr>
            <th>Name:</th>
            <th>Date:</th>
            <th>Photos:</th>
            <th>Status:</th>
          </tr>
          {this.state.appts.map(a => (
            <tr>
              <td><Link to={`/${a._id}`}>{a.name}</Link></td>
              <td>{a.date ? a.date : "None Yet"}</td>
              <td>{a.photos.length}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  }

}

export default ApptTable;
