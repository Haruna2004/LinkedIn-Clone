import React, { useState } from "react";
import { db } from "./Firebase";
import "./InputOption.css";
const InputOption = ({ Icon, title, color, count, id, likes }) => {
  //Initializing the previous count here assumes I've gotten it from the db
  const [likescount, setLikesCount] = useState(likes);
  const updateLike = () => {
    setLikesCount(likescount + 1);
    //dispatch the likes count
    db.collection("posts")
      .doc(id)
      .set({ likesCount: likescount }, { merge: true });
  };
  return (
    <div className="inputOption" onClick={count && updateLike}>
      <Icon style={{ color: `${count && "#5D8EE3"}` }} />
      {likescount > 0 && count ? (
        <h4 style={{ color: "#5D8EE3" }}>{likescount}</h4>
      ) : null}
    </div>
  );
};

export default InputOption;
