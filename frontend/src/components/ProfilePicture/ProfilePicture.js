import React from "react";
import './ProfilePicture.css';
const ProfilePicture = () => {
  return (
    <img
      className="profileImg"
      src={require("../../assets/avatar.jpg")}
      alt="Profile"
    />
  );
};

export default ProfilePicture;
