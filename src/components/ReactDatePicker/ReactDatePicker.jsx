import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import apptService from '../../utils/apptService';

import 'react-datepicker/dist/react-datepicker.css';


class ReactDatePicker extends Component {
    constructor (props) {
      super(props)
      this.state = {
        startDate: new Date(),
        toUpdate: {}
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(date) {
      this.setState({
        startDate: date,
        toUpdate: {
          id: this.props.id,
          date: date
        }
      })
    }

  handleSubmit = async date => {
    try {
      await apptService.updateDate(this.state.toUpdate)
      .then((updatedAppt) => {
        this.setState({startDate: date})
      })
    } catch(err) {
      alert(err);
    }
  };

  parseDate = date => {
    return
  }

  render() {
    return (
      <div>
        {!this.props.date ?
          <div>
          <DatePicker
            showPopperArrow={false}
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit} className="btn btn-success"><i className="material-icons">check_circle</i></button>
          </div>
          :
          <span>{this.props.date.slice(0, 10)}</span>
    }
  </div>
    );
  }
}

export default ReactDatePicker;
