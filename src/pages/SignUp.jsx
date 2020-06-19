import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Typography, Container, Button, TextField } from "@material-ui/core";

import { useStyles } from "./styles.js";

import firebase from "../config/firebase";

const SignUp = ({ history }) => {
  const styles = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName: name,
        });
      })
      .then(() => {
        history.push("login");
      })
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
    setPassword("");
    setName("");
  };
  return (
    <Container maxWidth="sm" className={styles.container}>
      <Typography align="center" component="h1" variant="h3" paragraph>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className="form-group">
          <label htmlFor="name" className={styles.label_email}>
            Name
          </label>
          <TextField
            type="name"
            id="name"
            placeholder="name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className={styles.label_email}>
            E-mail
          </label>
          <TextField
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className={styles.label_pass}>
            Password
          </label>
          <TextField
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.button}
          fullWidth
        >
          Sign Up
        </Button>
      </form>
      <div className={styles.link}>
        <span>Have an account? </span>
        <Link to="/login">Login</Link>
      </div>
    </Container>
  );
};

export default SignUp;
