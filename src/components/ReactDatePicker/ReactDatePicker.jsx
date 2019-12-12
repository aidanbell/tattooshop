import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import apptService from '../../utils/apptService';

import 'react-datepicker/dist/react-datepicker.css';


class ReactDatePicker extends Component {
    constructor (props) {
      super(props)
      this.state = {
        startDate: new Date()
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(date) {
      this.setState({
        startDate: date
      })
    }

  handleSubmit = async date => {
    try {
      await apptService.updateDate(date, this.props.id)
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
        <DatePicker
          showPopperArrow={false}
          selected={this.state.startDate}
          onChange={this.handleChange}
          onSelect={this.handleSubmit}
        />
    );
  }
}

export default ReactDatePicker;
