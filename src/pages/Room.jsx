import React, { useState, useEffect, useContext } from "react";

import Login from "./Login";
import SignUp from "./SignUp";

import { Typography, Container, Button } from "@material-ui/core";
import { useStyles } from "./styles.js";

import firebase from "../config/firebase";
import { AuthContext } from "../AuthService";

const Room = () => {
  const styles = useStyles();
  const [messages, setMessages] = useState(null);
  const [value, setValue] = useState("");

  const user = useContext(AuthContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection("messages")
      .orderBy("date")
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map((doc) => {
          return doc.data;
        });

        setMessages(messages);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase.firestore().collection("messages").add({
      user: user.displayName,
      content: value,
      date: new Date(),
    });
    setMessages([
      ...messages,
      {
        user: user.displayName,
        email: user.email,
        content: value,
      },
    ]);
  };
  return (
    <>
      <Container maxWidth="lg" className={styles.container_room}>
        <div className={styles.header}>
          <Typography component="h1" variant="h3" paragraph>
            Room
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            onClick={() => firebase.auth().signOut()}
          >
            Logout
          </Button>
        </div>
        <ul>
          {messages ? (
            messages.map((message) => (
              <li>
                {message.user}({message.email}):{message.content}
              </li>
            ))
          ) : (
            <p>No Message</p>
          )}
        </ul>
      </Container>
      <form onSubmit={handleSubmit} className={styles.form_room}>
        <input
          type="text"
          className={styles.input_room}
          value={value}
          onChange={(e) => setMessages(e.target.value)}
        />
        <Button type="submit" color="primary" variant="outlined">
          送信
        </Button>
      </form>
    </>
  );
};

export default Room;
