import React, { useState, useEffect } from "react";

import Login from "./Login";
import SignUp from "./SignUp";

import firebase from "../config/firebase";

const Room = () => {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map((doc) => {
          return doc.data;
        });

        setMessage(messages);
      });
  }, []);

  return (
    <>
      <h1>Room</h1>
      <ul>
        <li>sample user: sample message</li>
      </ul>
      <form>
        <input
          type="text"
          //   value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
      <button onClick={() => firebase.auth().signOut()}>Logout</button>
    </>
  );
};

export default Room;
