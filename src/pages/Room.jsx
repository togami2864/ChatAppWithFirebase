import React, { useState, useEffect, useContext, Suspense } from "react";

import Login from "./Login";
import SignUp from "./SignUp";

import { Typography, Container, Button, TextField } from "@material-ui/core";
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
          return doc.data();
        });
        setMessages(messages);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");

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

  const valueIsEmpty = value === "";

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
        <ul className={styles.messages}>
          {messages ? (
            messages.map((message, i) => {
              return (
                <li key={i} className={styles.message}>
                  <span className={styles.message_user}>{message.user}</span>
                  <br />
                  <span>{message.content}</span>
                </li>
              );
            })
          ) : (
            <p>No Message</p>
          )}
        </ul>
      </Container>
      <Container>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type="text"
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            variant="outlined"
            disabled={valueIsEmpty}
          >
            送信
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Room;
