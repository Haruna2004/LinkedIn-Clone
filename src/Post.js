import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";
const Post = forwardRef(
  ({ name, description, message, photoUrl, id, likes }, ref) => {
    return (
      <div ref={ref} className="post">
        <div className="post_header">
          <Avatar src={photoUrl}>{name[0]}</Avatar>
          <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="post_body">
          <p>{message}</p>
        </div>

        <div className="post_buttons">
          <InputOption
            className="InputOption"
            Icon={ThumbUpAltOutlinedIcon}
            title="Like"
            color="gray"
            count={true}
            id={id}
            likes={likes}
          />
          <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);

export default Post;

// Redux and ref in react doc
