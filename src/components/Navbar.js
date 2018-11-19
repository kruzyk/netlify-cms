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
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Mary Jane Razor
        </Link>
        <Link className="navbar-item" to="/kontakt">
          Kontakt
        </Link>
        <Link className="navbar-item" to="/kontakt/examples">
          Form Examples
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
        <div id="fb-root"></div>
        <script>{`(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v3.2&appId=226864780659472&autoLogAppEvents=1';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));`}</script>
        <div class="fb-like" data-href="https://www.facebook.com/MaryJaneRazorKaraoke/" data-layout="button" data-action="like" data-size="large" data-show-faces="true" data-share="false"></div>
        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FMaryJaneRazorKaraoke%2F&width=63&layout=button&action=like&size=large&show_faces=true&share=false&height=65&appId=135854876778462" width="63" height="65" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
  </nav>
)

export default Navbar
