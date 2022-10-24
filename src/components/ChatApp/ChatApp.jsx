import React, { useState } from "react";
import UserContext from "../context/UserContext";
import Chat from "../Chat/Chat";
import Login from "../Login/Login";

const CHANNEL_ID = "8GJzp3Saeranqsdd";

const ChatApp = () => {
  const [user, setUser] = useState("");
  const [drone, setDrone] = useState(null);

  const userLogin = (username) => {
    if (username) {
      const drone = new window.Scaledrone(CHANNEL_ID, {
        data: { username },
      });
      drone.on("open", () => {
        setDrone(drone);
        setUser({ id: drone.clientId, username });
      });
      console.log(drone);
    }
  };

  return (
      <UserContext.Provider value={{ user, drone, userLogin }}>
        {!user && <Login />}
        {user && <Chat />}
      </UserContext.Provider>
  );
};

export default ChatApp;
