import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../AuthService";
import { Redirect } from "react-router-dom";

import firebase from "../config/firebase";
import { useStyles } from "./styles.js";

import { Typography, Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";

import { isValidEmail, isValidPassword } from "../validation";

const Login = ({ history }) => {
  const styles = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const user = useContext(AuthContext);

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <Container maxWidth="sm" className={styles.container}>
      <Typography align="center" component="h1" variant="h3" paragraph>
        Login
      </Typography>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className="form-group">
          <label htmlFor="email" className={styles.label_email}>
            E-mail
          </label>
          <TextField
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className={styles.label_pass}>
            Password
          </label>
          <TextField
            type="password"
            id="password"
            name="email"
            className="form-control"
            placeholder="password"
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
          Login
        </Button>
      </form>
      <div className={styles.link}>
        <span>Don't have an account? </span>
        <Link to="/signup">Sign Up</Link>
      </div>
    </Container>
  );
};

export default Login;
