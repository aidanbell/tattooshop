import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const logo = require('../../images/tattoo.png')

class NavBar extends Component {

  render() {
    let loggedIn = this.props.user ?
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/artists' className="nav-link">ARTISTS</Link>
          </li>
          <li className="nav-item">
            <Link to='/profile' className="nav-link">PROFILE</Link>
          </li>
          <li className="nav-item">
            <Link to='/aftercare' className="nav-link">AFTERCARE</Link>
          </li>
          <li className="nav-item">
            <Link to='/' className="nav-link" onClick={this.props.handleLogout}>LOG OUT</Link>
          </li>
      </ul>
      </div>
      :
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/signup' className="nav-link">SIGN UP</Link>
          </li>
          <li className="nav-item">
            <Link to='/login' className="nav-link">LOG IN</Link>
          </li>
        </ul>
      </div>;

    return (
      <nav className="navbar navbar-expand-md navbar-dark">
        <a className="navbar-brand" href="/"><img className="logo" src={logo} alt=""/></a>


        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {loggedIn}
      </nav>

    )
  }
}


export default NavBar;
