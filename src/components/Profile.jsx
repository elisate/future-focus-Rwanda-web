import React from "react";
import '../styles/profile.scss';
import { Link } from "react-router-dom";
function Profile() {
  function Logout() {
    localStorage.removeItem("userToken");
    window.location.href = "/";
  }

  return (
    <div className="fixe_profile">
      {" "}
      <div className="overlayProfile">
        <div className="profile">
          <Link to="/StudentCourse">
            <div>Dashboard</div>
          </Link>
          <div>Account</div>
          <div>Support</div>
          <div onClick={Logout}>Sign out</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
