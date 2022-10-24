import { useContext } from "react";
import UserContext from "../../context/UserContext";
import ChatContext from "../../context/ChatContext";
import "./Sidebar.scss";

const Sidebar = ({ isOpen }) => {
  const { user } = useContext(UserContext);
  const { membersArray } = useContext(ChatContext);

  return (
    <section className={!isOpen ? "sidebar absolute_sidebar" : "sidebar"}>
      <div className="users_container">
        <p className="users_list_title">Current Users in room</p>
        <ul>
          {membersArray.map((member) => (
            <div key={member.id}>
              {member.clientData.username !== user.username ? (
                <li>{member.clientData.username}</li>
              ) : (
                ""
              )}
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
