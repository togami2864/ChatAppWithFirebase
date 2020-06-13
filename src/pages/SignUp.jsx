import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Typography, Container, Button, TextField } from "@material-ui/core";

import { useStyles } from "./styles.js";

import firebase from "../config/firebase";

const SignUp = () => {
  const styles = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Container maxWidth="sm" className={styles.container}>
      <Typography align="center" component="h1" variant="h3" paragraph>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
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
