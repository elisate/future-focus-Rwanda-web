import React from "react";
import '../styles/profile.scss';
function Profile() {
  function Logout() {
    localStorage.removeItem("userToken");
    window.location.href = "/";
  }

  return (
    <div className="overlay">
      <div className="profile">
        <div>Dashboard</div>
        <div>Account</div>
        <div>Support</div>
        <div onClick={Logout}>Sign out</div>
      </div>
    </div>
  );
}

export default Profile;
