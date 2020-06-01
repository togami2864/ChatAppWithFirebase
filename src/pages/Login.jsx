import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../AuthService";
import { Redirect } from "react-router-dom";

import firebase from "../config/firebase";

import { isValidEmail, isValidPassword } from "../validation";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    if (isValidPassword && isValidEmail) {
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
    }
  };

  const user = useContext(AuthContext);

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span>
            {isValidEmail(email) ? "" : "正しいEmailを入力してください."}
          </span>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="email"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>
            {isValidPassword(password)
              ? ""
              : "正しいパスワードを入力してください"}
          </span>
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/signup">Sign Up</Link>
    </>
  );
};

export default Login;
