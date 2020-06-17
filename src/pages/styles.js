import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    border: "3px solid #DBDBDB",
    marginTop: "10vh",
    padding: "50px",
    height: "600px",
  },
  container_room: {
    borderTop: "3px solid #DBDBDB",
    borderLeft: "3px solid #DBDBDB",
    borderRight: "3px solid #DBDBDB",
    marginTop: "10vh",
    padding: "20px",
  },
  form: {
    marginTop: "80px",
  },
  label_email: {
    marginRight: "65px",
  },
  label_pass: {
    marginRight: "40px",
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    margin: theme.spacing(1),
    width: "25ch",
  },
  link: {
    margin: "20px",
    textAlign: "center",
  },
  button: {
    margin: "20px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  messages: {
    listStyle: "none",
  },
  message: {
    marginBottom: "15px",
  },
  message_user: {
    fontSize: "24px",
  },
}));
