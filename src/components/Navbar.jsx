import React from 'react';
import '../styles/index.scss'
import '../styles/navbar.scss';
import '../styles/button.scss';
function Navbar() {
  return (
    <section className="nabarholder">
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
    </section>
  );
}

export default Navbar