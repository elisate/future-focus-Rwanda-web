import React from "react";
import "../DesignStyles/navpart.scss";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessage } from "react-icons/bi";
import { IoIosList } from "react-icons/io";

function NavPart() {
  return (
    <div className="navpartcontainer">
      <div className="menusnav"></div>
      <div className="icon-wrapper">
        <IoMdNotificationsOutline />
        <span className="badge">3</span>
      </div>
      <div className="icon-wrapper">
        <BiMessage />
        <span className="badge">4</span>
      </div>
      <div className="icon-wrapper">
        <IoIosList />
      </div>
      <div className="profile">
        <img src="profile.png" alt="Profile" />
      </div>
    </div>
  );
}

export default NavPart;
