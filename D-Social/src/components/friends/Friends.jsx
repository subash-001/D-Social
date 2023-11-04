import React from "react";
import "./friends.scss";
const Friends = ({ user }) => {
  function getInitials(name) {
    const initials = name.match(/\b\w/g) || [];
    return initials.join('').toUpperCase();
  }
  
  return (
    <div>
      <li className="sidebarFriend">
      <div className="profile-image">{getInitials(user.username)}</div>

        {/* <img src={user.profilePicture} alt="" className="sidebarFriendImg" /> */}
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
};

export default Friends;
