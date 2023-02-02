import React, { useContext } from "react";
// import Cam from "../img/cam.png";
// import Add from "../img/add.png";
// import More from "../img/more.png";
import Messages from "./messages";
import Input from "./input";
import { UseAuth } from "../../../context/context";

const Chat = () => {
  const { data } = UseAuth;


  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img  alt="" />
          <img  alt="" />
          <img  alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;