import React, { useContext, useEffect, useState } from "react";
import ChatContext from "../context/ChatContext";
import UserContext from "../context/UserContext";
import Header from "../elements/header/Header";
import Sidebar from "../elements/sidebar/Sidebar";
import Messages from "./Messages/Messages";
import Input from "./Input/Input";

const MAIN_ROOM_NAME = "observable-main-room";

const Chat = () => {
  const { user, drone } = useContext(UserContext);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messageArray, setMessageArray] = useState([]);
  const [membersArray, setMembersArray] = useState([]);

  useEffect(() => {
    if (user) {
      setupRoom(drone);
    }
  }, [user, drone]);

  function setupRoom(scaledrone) {
    scaledrone.on("error", (error) => console.error(error));

    const room = scaledrone.subscribe(MAIN_ROOM_NAME);

    room.on("error", (error) => console.error(error));

    room.on("members", function (members) {
      setMembersArray([...members]);
    });

    room.on("member_join", function (member) {
      setMembersArray(function (current) {
        return [...current, member];
      });

      setMessageArray((current) => {
        return [
          ...current,
          {
            message: "has joined the chat!",
            id: Math.random(),
            type: "MEMBER_JOINED",
            user: {
              username: member.clientData.username,
              avatar: member.clientData.avatar,
            },
          },
        ];
      });
    });

    room.on("member_leave", function (member) {
      setMembersArray((current) => {
        return current.filter((oneMember) => oneMember.id !== member.id);
      });
      setMessageArray((current) => {
        return [
          ...current,
          {
            message: "has left the chat!",
            id: Math.random(),
            type: "MEMBER_LEFT",
            user: {
              username: member.clientData.username,
              avatar: member.clientData.avatar,
            },
          },
        ];
      });
    });

    room.on("message", (message) => {
      setMessageArray((current) => {
        return [
          ...current,
          {
            message: message.data.message,
            id: message.id,
            type: "MESSAGE",
            user: {
              id: message.member.id,
              username: message.member.clientData.username,
              avatar: message.member.clientData.avatar,
            },
          },
        ];
      });
    });
  }

  const sendMessage = (message) => {
    drone.publish({
      room: MAIN_ROOM_NAME,
      message: { message },
    });
  }

  return (
    <>
      <ChatContext.Provider
        value={{
          sendMessage,
          messageArray,
          membersArray,
          user,
        }}
      >
        <Header setSidebarStatus={setIsSidebarOpen} />
        <Sidebar isOpen={isSidebarOpen} />
        <Messages />
        <Input />
      </ChatContext.Provider>
    </>
  );
};

export default Chat;
