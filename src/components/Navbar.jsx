import React from 'react';
import '../styles/index.scss'
import '../styles/navbar.scss';
import '../styles/button.scss';
import '../../src/App.scss';
function Navbar() {
  return (
    <div className='superContainer'>
      <div className="nabarholder">
        <div>
          <img src="logo_official.png" alt="image logo" className="logoimage" />
        </div>
        <div className="listcontent">
          <ul className="contentli">
            <li>HOME</li>
            <li> ALL COURSES</li>
            <li>ABOUT US</li>
            <li>TRAINING </li>
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