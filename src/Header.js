import React from "react";
import "./Header.css";
import "./avatar1.jpg";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { auth } from "./Firebase";
import { logout } from "./features/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <a href="home">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="logo"
          />
        </a>

        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" link="#feeds" />
        <HeaderOption
          Icon={SupervisorAccountIcon}
          title="My Network"
          link="#sidebar"
        />
        <HeaderOption
          Icon={BusinessCenterIcon}
          title="Jobs"
          link="https://www.jobberman.com/"
        />
        <HeaderOption
          Icon={ChatIcon}
          title="Message"
          link="https://wa.me/qr/LWZJZHJ2AAOYE1"
        />
        <HeaderOption
          Icon={NotificationsIcon}
          title="Notifications"
          link="#widgets"
        />
        <HeaderOption title="Logout" onClick={logoutOfApp} avatar={true} />
      </div>
    </div>
  );
};

export default Header;
