import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apptService from '../../utils/apptService';

import './ApptTable.css';

class ApptTable extends Component {
  constructor(props) {
    super(props);
    this.state={
      appts: [],
      toUpdate: {},
    }
  }

  componentDidMount() {
    fetch(`/api/appts/getAppts/${this.props.user.first_name}`)
      .then((res) => res.json())
      .then((appts) => this.setState({
        appts: appts,
    }))
  }

  handleChange = (e) => {
    console.log(e.target.dataset.id);
    this.setState({
      toUpdate: {
        [e.target.name]: e.target.value,
        id: e.target.dataset.id
      }
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apptService.updateStatus(this.state.toUpdate)
      .then((updatedAppt) => {
        const arr = this.state.appts.filter(appt => appt._id !== updatedAppt._id);
        this.setState({appts: [...arr, updatedAppt]})
      })
    } catch(err) {
      alert(err);
    }
  };

  render() {
    return (
      <div>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Name:</th>
              <th>Date:</th>
              <th>Photos:</th>
              <th>Status:</th>
            </tr>
          </thead>
          <tbody>
            {this.state.appts.map((a, idx) => (
              <tr>
                <td><Link to={`/${a._id}`}>{a.name}</Link></td>
                <td>{a.date ? a.date : "None Yet"}</td>
                <td>{a.photos.length}</td>
                <td>{a.status}</td>
                <td>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                      <div className="col-auto">
                        <select data-id={a._id} className="form-control" name="status" onChange={this.handleChange}>
                          <option disabled selected value="">Select a Status</option>
                          <option value="requested">Requested</option>
                          <option value="accepted">Accepted</option>
                          <option value="deposit-received">Deposit Received</option>
                          <option value="booked">Booked</option>
                        </select>
                      </div>
                      <div className="col-auto">
                        <button type="submit" className="btn btn-primary" value={this.state.toUpdate.id}>Change</button>
                      </div>
                    </div>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

}

export default ApptTable;
