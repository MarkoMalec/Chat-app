import React, { useContext, useEffect, useRef } from "react";
import ChatContext from "../../context/ChatContext";
import UserContext from "../../context/UserContext";
import './Messages.scss';

const Messages = () => {


  const { messageArray } = useContext(ChatContext);
  const { user } = useContext(UserContext);
  console.log(user);
  return(
    <section className="messages_area">
      <ul>
        {messageArray.map((m) => {
          return(
            <li>
              <p>{m.user.username}</p>
              {m.message}
            </li>
          )
        })}
      </ul>
    </section>
  );
}

export default Messages;