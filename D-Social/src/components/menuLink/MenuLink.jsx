import React from "react";
import "./menuLink.scss";
import { Link } from "react-router-dom";


const MenuLink = ({ Icon, text }) => {
  const Logout = () => {
    <Link to="/register"></Link>
  }
  return (
    <div className="menuLink" >
      {Icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName" onClick={Logout()}>{text === "Logout"}</span>
    </div>
  );
};

export default MenuLink;
