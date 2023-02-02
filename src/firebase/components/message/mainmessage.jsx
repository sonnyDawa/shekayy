



import React, { useContext, useEffect, useRef } from "react";
import { UseAuth } from "../../../context/context";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { users } = UseAuth;
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === users.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === users.uid
              ? users.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;