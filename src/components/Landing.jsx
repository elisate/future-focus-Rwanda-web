import React from 'react';
import '../styles/landing.scss';
import Writer from './Writer';
function Landing() {
  return (
    <div className="landingContainer">
      <div className="landSectiona">
        <div className="textLa">
          
            <div> Welcome to Future Focus Rwanda</div>
            <div>
              <Writer />
            </div>{" "}
       
        </div>
      </div>
    </div>
  );
}

export default Landing