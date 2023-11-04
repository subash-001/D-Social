import { React,Component} from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
//import Identicon from 'identicon.js';

import "./navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="navbarContainer">
        <div className="navbarLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">D - Social</span>
          </Link>
        </div>
        <div className="navbarCenter">
          <div className="searchBar">
            <SearchIcon className="searchIcon" />
            <input
              type="text"
              placeholder="Search for friends post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          {/* <div className="navbarLinks">
          <span className="navbarLink">Homepage</span>
          <span className="navbarLink">Timeline</span>
        </div> */}
          <div className="navbarIcons">
            <div className="navbarIconItem">
              <PersonIcon />
              <span className="navbarIconBadge">2</span>
            </div>
            <div className="navbarIconItem">
              <ChatBubbleIcon />
              <span className="navbarIconBadge">10</span>
            </div>
            <div className="navbarIconItem">
              <NotificationsIcon />
              <span className="navbarIconBadge">8</span>
            </div>
          </div>
          <div className="navbarIconBadge">
            <p>{this.props.account}</p>
            {/* <small>{this.props.account}</small> */}
            {/* { this.props.account
              // ? <img alt='nav'
              //   className='ml-2'
              //   width='30'
              //   height='30'
              //   src={`https://picsum.photos/200`}
              //   //src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
              // />
              // : <span></span>
            } */}
          </div>
          {/* <Link to="/profile/userId">
          <img src="/assets/person/user.jpg" alt="" className="navbarImg" />
        </Link> */}
        </div>
      </div>
    );
  }
}

export default Navbar;
