import React, { useContext, useEffect, useRef } from "react";
import ReactLinkify from "react-linkify";
import ChatContext from "../../context/ChatContext";
import UserContext from "../../context/UserContext";
import "./Messages.scss";

const Messages = () => {
  const { messageArray } = useContext(ChatContext);
  const { user } = useContext(UserContext);
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, [messageArray]);

  return (
    <section className="messages_area">
      <ul>
        {messageArray.map((m, id) => {
          if (m.type === "MEMBER_JOINED") {
            return (
              <li key={m.id} className="member_joined_left">
                "{m.user.username}" {m.message}
              </li>
            );
          }
          if (m.type === "MEMBER_LEFT") {
            return (
              <li key={m.id} className="member_joined_left">
                "{m.user.username}" {m.message}
              </li>
            );
          }
          if (m.type === "HISTORY_MESSAGE") {
            return (
              <li key={m.id}>
                <ReactLinkify>{m.message}</ReactLinkify>
                <span className="chat_buble-username">{m.user.username}</span>
              </li>
            );
          }
          return (
            <li
              key={m.id}
              className={
                user.id === m.user.id ? "message_by_me" : "message_by_other"
              }
            >
              <>
                <ReactLinkify>{m.message}</ReactLinkify>
                <span className="chat_buble-username">
                  {user.id !== m.user.id ? m.user.username : ""} {m.time}
                </span>
              </>
              <div ref={scrollRef}></div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Messages;
