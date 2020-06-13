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
  form_room: {
    margin: "0 62.5px 0 200px",
    width: "1350px",
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
  input_room: {
    width: "1215px",
    display: "inline",
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
}));
