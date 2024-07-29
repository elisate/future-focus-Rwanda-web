import React from 'react';
import '../styles/index.scss'
import '../styles/navbar.scss';
import '../styles/button.scss';
import '../../src/App.scss';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="superContainer">
      <div className="nabarholder">
        <div>
          <img src="logo_official.png" alt="image logo" className="logoimage" />
        </div>
        <div className="listcontent">
          <ul className="contentli">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              {" "}
              <Link to="/program">PROGRAMS</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/">TRAINING </Link>
            </li>
          </ul>
        </div>
        <div>
          <button type="submit" className="buttonFix">
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar