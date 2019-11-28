import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apptService from '../../utils/apptService';

import './Appointment.css';

const paypallogo = require('../../images/paypal-logo.png');

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

    // Messaging Display Logic
    let messages;
    if (this.state.appt.messages) {
      messages = this.state.appt.messages.map(m => (
        <div className="msg">
          <p>{m.content}</p>
          <span className="badge badge-light">From: {m.author}</span>
        </div>
      ))
    } else {
      messages =
      <div>
        <p>No Messages Yet</p>
      </div>
    }

    // Payment Button Logic
    let payment;
    let paymentStyle = {
      backgroundImage: `url(${paypallogo})`
    }
    if (this.state.appt.status === "accepted" && !this.props.user.artist) {
      payment =
      <div className="paymentLink">
        <h4>Your Appointment has been Accepted!</h4>
        <p>Please submit your deposit with paypal</p>
        <a className="paypal btn" href="https://www.youtube.com/watch?v=nqAvFx3NxUM&feature=youtu.be&t=63"style={paymentStyle}></a>
      </div>
    } else if (this.props.user.artist) {
      payment =
      <div className="paymentLink">
        <h4>Customer Information:</h4>
        <p>Name: Aidan Bell</p>
        <p>Email: a@bell.com</p>
        <p>Phone: 908-242-4040</p>
      </div>
    }



    return (
        <div className='appointment'>
          <div className="details">
            <h2>{this.state.appt.name}</h2>
            {this.props.handleStatus(this.state.appt.status)}

            <p>{this.state.appt.description}</p>
            {payment}
          </div>
          <div className="photos">
            <h3>Photos:</h3>
          </div>
          <div className="messages">
            <h3>Messages:</h3>
            {messages}
              <form className="msgForm" onSubmit={this.handleSubmit}>
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
