import React from "react";
import { Link } from "gatsby";
import facebook from "../img/facebook-icon.svg";
import logo from "../img/logo.svg";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img
              src={logo}
              alt="Mary Jane Razor Karaoke"
              style={{ width: "88px" }}
            />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
       <Link className="navbar-item" to="/gdzie-jest-karaoke">
          Gdzie na karaoke?
        </Link>
        <Link className="navbar-item" to="/prowadzenie-imprez">
          Prowadzenie imprez
        </Link>
        <Link className="navbar-item" to="/mary-jane-razor">
          Mary Jane Razor
        </Link>
        <Link className="navbar-item" to="/kontakt">
          Kontakt
        </Link>
      </div>
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
    </div>
  </nav>
);

export default Navbar;
