import React from "react";
import Online from "../online/Online";
import { Usersonline } from "../../data";
import "./rightbarhome.scss";

const Rightbarhome = () => {
  return (
    <div className="rightbarhome">
      <div className="birthdayContainer">
        
        <span className="birthdayText">
          <b>Have a Great Day</b> 
        </span>
      </div>
      <img src="/assets/ads/adv.jpg" alt="" className="rightbarAdvert" />

      <span className="rightbarTitle">Online Friends</span>

      <ul className="rightbarFriendList">
        {Usersonline.map((u) => (
          <Online key={u.id} onlineuser={u} />
        ))}
      </ul>
    </div>
  );
};

export default Rightbarhome;
6