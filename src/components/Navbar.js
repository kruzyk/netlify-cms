import React from "react";
import { Link } from "gatsby";
import facebook from "../img/facebook-icon.svg";
// import logo from "../img/logo.svg";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <div className="logo">
          karaoke
          </div>
        </Link>
      </div>
      {/* [THE HAMBURGER] */}
    <label for="hamburger">&#9776;</label>
    <input type="checkbox" id="hamburger"/>
      <ul className="navbar-start">
        <li><Link className="navbar-item" to="/gdzie-jest-karaoke">
          Gdzie na karaoke?
        </Link></li>
        <li><Link className="navbar-item" to="/prowadzenie-imprez">
          Prowadzenie imprez
        </Link></li>
        <li><Link className="navbar-item" to="/mary-jane-razor">
          Mary Jane Razor
        </Link></li>
        <li><Link className="navbar-item" to="/kontakt">
          Kontakt
        </Link></li>

      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://www.facebook.com/MaryJaneRazorKaraoke/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={facebook} alt="Facebook" />
          </span>
        </a>
      </div>

      </ul>
      
    </div>
  </nav>
);

export default Navbar;
