import React, { useContext, useEffect, useRef } from "react";
import ChatContext from "../../context/ChatContext";
import UserContext from "../../context/UserContext";
import './Messages.scss';

const Messages = () => {

  const { messageArray, membersArray } = useContext(ChatContext);
  const { user } = useContext(UserContext);
  const scrollRef = useRef();

  const current = new Date();

  const time = current.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
});

useEffect(() => {
  if (scrollRef.current) {
    scrollRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }
}, [messageArray]);

  return(
    <section className="messages_area">
      <ul>
        {messageArray.map((m, id) => {
          if(m.type === 'MEMBER_JOINED') {
            return <li className="member_joined_left">"{m.user.username}" {m.message} :)</li>
          }
          if(m.type === 'MEMBER_LEFT') {
            return <li className="member_joined_left">"{m.user.username}" {m.message} :(</li>
          }
          return(
            <>
            <li key={id} className={user.id === m.user.id ? "message_by_me" : "message_by_other"}>
              {m.message.includes('https') ? <a href={m.message}>{m.message}</a> : m.message}
              <p className="chat_buble-username">{user.id !== m.user.id ? m.user.username : ''} {time}</p>
            </li>
              <div ref={scrollRef}></div>
              </>
          )
        })}
      </ul>
    </section>
  );
}

export default Messages;