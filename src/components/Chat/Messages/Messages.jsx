import React, { useContext, useEffect, useRef } from "react";
import ChatContext from "../../context/ChatContext";
import UserContext from "../../context/UserContext";
import './Messages.scss';

const Messages = () => {

  const { messageArray } = useContext(ChatContext);
  const { user } = useContext(UserContext);

  return(
    <section className="messages_area">
      <ul>
        {messageArray.map((m) => {
          return(
            <li>
              <p>{user.username}</p>
              {m.message}
            </li>
          )
        })}
      </ul>
    </section>
  );
}

export default Messages;