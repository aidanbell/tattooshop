import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MyAppts.css';

class MyAppts extends Component {
  constructor(props) {
    super(props);
    this.state={
      appts: [],
    }
  }

  componentDidMount() {
    fetch(`/api/appts/getCustAppts/${this.props.user._id}`)
      .then((res) => res.json())
      .then((appts) => this.setState({
        appts: appts,
    }))
  }


  render() {
    return(
      <div>
        {this.state.appts.map(a => (
          <Link to={`/${a._id}`}>
          <div className='appt-card'>
            <div className='left'>
              <h3>{a.name}</h3>
              <p>{a.description}</p>
            </div>
            <div className='right'>
              {this.props.handleStatus(a.status)}
            </div>
          </div>
        </Link>
        ))}
      </div>
    )
  }
}

export default MyAppts;
