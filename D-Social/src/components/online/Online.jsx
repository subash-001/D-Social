import React from "react";
import "./online.scss";

const Online = ({ onlineuser }) => {
  function getInitials(name) {
    const initials = name.match(/\b\w/g) || [];
    return initials.join('').toUpperCase();
  }

  return (
    <div className="online">
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
        <div className="profile-image">{getInitials(onlineuser.username)}</div>

          {/* <img
            src={onlineuser.profilePicture}
            alt=""
            className="rightbarProfileImg"
          /> */}
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{onlineuser.username}</span>
      </li>
    </div>
  );
};

export default Online;
