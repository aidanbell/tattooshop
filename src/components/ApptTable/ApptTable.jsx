import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apptService from '../../utils/apptService';
import ReactDatePicker from '../ReactDatePicker/ReactDatePicker';

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
    fetch(`/api/appts/getArtistAppts/${this.props.user.first_name}`)
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

  handleDate = (e) => {
    console.log(e.target)
  }


  render() {
    return (
      <div className="ApptTable">
        <table className="table">
          <thead>
            <tr>
              <th>Name:</th>
              <th>Date:</th>
              <th>Photos:</th>
              <th>Status:</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.appts.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : -1).map((a, idx) => (
              <tr>
                <td><Link to={`/${a._id}`}>{a.name}</Link></td>
                <td>{a.status === "deposit-received" ?
                  <ReactDatePicker/>
                  :
                  "None Yet"
                }</td>
                <td>{a.photos.length}</td>
                <td>{this.props.handleStatus(a.status)}</td>
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
                        <button type="submit" className="btn btn-success" value={this.state.toUpdate.id}><i className="material-icons">check_circle</i></button>
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
