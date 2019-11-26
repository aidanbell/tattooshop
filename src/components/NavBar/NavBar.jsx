import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {

  render() {
    let loggedIn = this.props.user ?
      <div>
        <Link to='/5ddd5bef234fae454a87c064' className="nav-link">ARTISTS</Link>
        <Link to='/appointment' className="nav-link">APPOINTMENTS</Link>
        <Link to='/profile' className="nav-link">PROFILE</Link>
        <Link to='/logout' className="nav-link" onClick={this.props.handleLogout}>LOG OUT</Link>
      </div>
      :
      <div>
        <Link to='/signup' className="nav-link">SIGN UP</Link>
        <Link to='/login' className="nav-link">LOG IN</Link>
      </div>;

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">Home</a>

        {loggedIn}

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}


export default NavBar;
