import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export const Form = (props) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get(`https://api.github.com/users/${username}`).then((resp) => {
      props.onSubmit(resp.data);
      setUsername("");
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="GitHub username"
          required
        />
        <button type="submit">Add card</button>
      </form>
    </div>
  );
};
