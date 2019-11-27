import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apptService from '../../utils/apptService';

import './Appointment.css';


class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appt: {},
      toUpdate: {},
      msg: {},
    };
  }

  componentDidMount() {
    fetch(`/api/appts/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((appt) => this.setState({
        appt: appt,
    }))
  }

  handleChange = (e) => {
      if(e.target.name === "message") {
        this.setState({
          msg: {
            author: this.props.user.first_name,
            content: e.target.value
          }
      })
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apptService.createMessage(this.state.msg, this.state.appt._id)
      .then((appt) => {
        this.setState({appt: appt})
      })
    } catch(err) {
      alert(err);
    }
  };



  render() {
    let statusBadge;
    switch(this.state.appt.status) {
      case "requested":
        statusBadge =
        <div>
          <h4><span class="badge badge-info">REQUESTED</span></h4>
        </div>
        break;
      case "accepted":
        statusBadge =
        <div>
          <h4><span class="badge badge-primary">ACCEPTED</span></h4>
        </div>
        break;
      case "deposit-received":
        statusBadge =
        <div>
          <h4><span class="badge badge-seconday">DEPOSIT RECEIVED</span></h4>
        </div>
        break;
      case "booked":
        statusBadge =
        <div>
          <h4><span class="badge badge-success">BOOKED</span></h4>
        </div>
        break;
    }

    let messages;
    if (this.state.appt.messages) {
      messages = this.state.appt.messages.map(m => (
        <div className="msg">
          <p>{m.content}</p>
          <p>{m.author}</p>
        </div>
      ))
    } else {
      messages =
      <div>
        <p>No Messages Yet</p>
      </div>
    }


    return (
        <div className='appointment'>
          <div className="details">
            <h2>{this.state.appt.name}</h2>
            {statusBadge}

            <p>{this.state.appt.description}</p>
          </div>
          <div className="photos">
            <h3>Photos:</h3>
          </div>
          <div className="messages">
            <h3>Messages:</h3>
            {messages}
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <textarea className="form-control" name="message" value={this.state.msg.content} onChange={this.handleChange} />
                </div>
                <div className="col-auto right-align">
                  <button type="submit" className="btn btn-primary">Send</button>
                </div>
              </form>
          </div>
        </div>
    )
  }
}

export default Appointment;
