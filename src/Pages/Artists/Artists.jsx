import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Artists.css';

const emmaProfile = require('../../images/emma-profile.jpg');
const cinarProfile = require('../../images/cinar-profile.jpg');

class Artists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
    };
  }

  componentDidMount() {
    fetch('/api/users/get-artists')
      .then((res) => res.json())
      .then((artists) => this.setState({
        artists: artists,
    }))
  }

  render() {
    return(
      <div className="artsts-page">
        <div className="artist">
          <hr/>
          <div className="artist-bio">
            <h3>Emma Grace</h3>
            <p>
              Emma has been tattooing since 2013. She completed her Bachelor of
              Arts degree in Painting and Sculpture at Brandeis University,
              earning High Honors in Fine Arts. After attending university,
              Emma continued to pursue a career in the arts, first in New York
              City, then while traveling in India and Turkey.  Emma completed
              her tattoo apprenticeship at Çinar Arts in Istanbul, where she
              met her husband and business partner, Çinar Topakli. They have
              since returned to Montclair, Emma's hometown, to open their
              second business, Painted Soul Arts.
            </p>
            <Link to="/book_appointment" className="btn">BOOK APPOINTMENT</Link>
          </div>
          <img className="profile" src={emmaProfile}/>
        </div>
        <div className="artist">
          <hr/>
          <div className="artist-bio">
            <h3>Çinar Topakli</h3>
            <p>
              Cinar is one of Istanbul's first generation of contemporary tattoo
              artists. Tattooing for over two decades, Çınar started by making
              his own machines before tattoo equipment was available in Turkey.
              He has over twenty years of experience in the business, and is
              the owner of Çinar Arts, a high end tattoo studio and art gallery
              in the luxury fashion district of Nisantasi. He studied
              traditional Turkish arts at the Mimar Sinan University for Fine
              Arts and Architecture.
              <br/>
              Çınar, though well-versed in many styles of tattooing, prefers
              abstract black and color works that replicate the energy and feel
              of oil paintings.  He argues that the movement and expressionist
              nature of this style connects to the true nature of a tattoo:
              to become one with the physical body by following it's natural
              lines and curves, and to energize the soul of the wearer through
              color and movement.
            </p>
          </div>
          <img className="profile" src={cinarProfile} />
        </div>
      </div>
    )
  }

}

export default Artists;
