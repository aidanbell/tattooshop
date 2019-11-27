import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apptService from '../../utils/apptService';

class ApptForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      artist: '',
      user: '',
      description: '',
      photos: '',
      size: '',
    };
  }

  componentDidMount() {
    fetch('/api/users/get-artists')
      .then((res) => res.json())
      .then((artists) => this.setState({
        artists: artists,
    }))
  }


  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apptService.create(this.state).then(({appt}) => {
        this.props.history.push(`/${appt._id}`)
      })
    } catch(err) {
      alert(err);
    }
  };

  render() {
    return (
      <div>
        <div>
          <h4>{this.props.user.first_name} {this.props.user.last_name}</h4>
          <h5>{this.props.user.phone}</h5>
          <h5>{this.props.user._id}</h5>
        </div>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="name" className="form-control" placeholder="Let's give this project a name!" value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <select type="artist" className="form-control" placeholder="Select an Artist" value={this.state.artist} name="artist" onChange={this.handleChange}>
                {this.state.artists.map(a => (
                  <option value={a.first_name} key={a.first_name}>{a.first_name} {a.last_name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <select type="size" className="form-control" placeholder="Select a size" value={this.state.size} name="size" onChange={this.handleChange}>
                <option value="XS">'XS (0.5"x0.5")'</option>
                <option value="S">'S (1"x2")'</option>
                <option value="M">'M (2"x3")'</option>
                <option value="L">'L (3"x4")'</option>
                <option value="XL">'XL (5"x6")'</option>
                <option value="XXL">'XXL (>6"x7")'</option>
                <option value="multiple">Multiple</option>
                <option value="?">Undecided</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <textarea type="description" className="form-control" placeholder="Describe your tattoo idea!" value={this.state.description} name="description" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default">Request Consultation!</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ApptForm;
