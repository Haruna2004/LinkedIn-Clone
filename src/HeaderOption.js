import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";

const HeaderOption = ({ avatar, Icon, title, onClick, link }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && (
        <a href={link}>
          <Icon className="headerOption_Icon" />
        </a>
      )}
      {avatar && (
        <Avatar className="headerOption_icon">{user?.email[0]}</Avatar>
      )}
      {avatar ? (
        <h3 className="logoutbtn">{title}</h3>
      ) : (
        <h3 className="headerOption_title">{title}</h3>
      )}
    </div>
  );
};

export default HeaderOption;
