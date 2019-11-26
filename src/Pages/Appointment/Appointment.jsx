import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apptService from '../../utils/apptService';


class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appt: {}
    };
  }

  componentDidMount() {
    fetch(`/api/appts/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((appt) => this.setState({
        appt: appt,
      }))
  }

  render() {
    return (
      <div>
        <h1>Appointment</h1>
      </div>
    )
  }
}

export default Appointment;
