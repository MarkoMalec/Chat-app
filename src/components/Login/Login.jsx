import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import ChatBubble from "../../assets/chat-bubble.png";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const { userLogin } = useContext(UserContext);

  const setName = (e) => {
    e.preventDefault();
    if (!username|| !username.replace(/\s/g, "").length) {
      setError("No username set");
    } else {
      setError(null);
      userLogin(username);
      setDisabled(true);
    }
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <img className="login-img" src={ChatBubble} alt="chat-bubble" />
        <form onSubmit={setName}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            maxLength="12"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit" disabled={disabled}>Enter Chat!</button>
          <div id="form-error">{error}</div>
        </form>
      </div>
    </div>
  );
};

export default Login;
