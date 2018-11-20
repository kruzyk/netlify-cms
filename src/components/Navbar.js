import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/facebook-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          Info
        </Link>
        <Link className="navbar-item" to="/products">
          Mary Jane Razor
        </Link>
        <Link className="navbar-item" to="/kontakt">
          Kontakt
        </Link>
        <Link className="navbar-item" to="/kontakt/examples">
          Examples
        </Link>
      </div>
      <div className="navbar-end">
        {/* <a
          className="navbar-item"
          href="https://www.facebook.com/MaryJaneRazorKaraoke/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={facebook} alt="Facebook" />
          </span>
        </a> */}
        <div className="fb-like" data-href="https://www.facebook.com/MaryJaneRazorKaraoke/" data-layout="button" data-action="like" data-size="large" data-show-faces="true" data-share="false"></div>
      </div>
    </div>
  </nav>
)

export default Navbar
