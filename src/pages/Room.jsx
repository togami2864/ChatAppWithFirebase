import React, { useState, useEffect, useContext, Suspense } from "react";

import Login from "./Login";
import SignUp from "./SignUp";

import {
  Typography,
  Container,
  Button,
  TextField,
  Icon,
} from "@material-ui/core";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
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
              if (user.displayName === message.user) {
                return (
                  <li key={i} className={styles.chatList}>
                    <div className={styles.user}>
                      <br />
                      <span className={styles.chatBalloon}></span>
                      <ChatBubbleIcon />
                      <span className={styles.message}>{message.content}</span>
                    </div>
                  </li>
                );
              } else if (user.displayName !== message.user) {
                return (
                  <li key={i} className={styles.chatList}>
                    <div className={styles.user_reverse}>
                      <span className={styles.message_user}>
                        {message.user}
                      </span>
                      <br />
                      <div>
                        <span className={styles.chatBalloon_reverse}></span>
                        <span className={styles.message_reverse}>
                          {message.content}
                        </span>
                        <ChatBubbleIcon />
                      </div>
                    </div>
                  </li>
                );
              }
            })
          ) : (
            <p>No Message</p>
          )}
        </ul>
      </Container>
      <Container className={styles.container_input}>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            variant="outlined"
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            variant="outlined"
            className={styles.btn_submit}
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
