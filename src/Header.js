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
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./Firebase";
import { logout, selectUser } from "./features/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="logo"
        />

        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Message" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption title="me" onClick={logoutOfApp} avatar={true} />
      </div>
    </div>
  );
};

export default Header;
