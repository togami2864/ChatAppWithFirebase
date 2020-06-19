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
  container_input: {
    margin: "30px 0 50px 0",
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

  //Room message関連
  messages: {
    listStyle: "none",
    paddingTop: "20px",
    paddingRight: "40px",
  },
  chatList: {
    marginBottom: "15px",
  },
  message_user: {
    fontSize: "24px",
  },
  message: {
    display: "inline-block",
    backgroundColor: "grey",
    color: "white",
    borderRadius: "10px",
    minHeight: "40px",
    verticalAlign: "middle",
    padding: "10px",
  },
  message_reverse: {
    display: "inline-block",
    backgroundColor: "lightGreen",
    color: "black",
    borderRadius: "10px",
    minHeight: "40px",
    verticalAlign: "middle",
    padding: "10px",
  },
  user: {
    position: "relative",
  },
  user_reverse: {
    textAlign: "right",
    position: "relative",
  },
  chatBalloon: {
    width: "15px",
    height: "15px",
    transform: "rotate(-59deg)",
    backgroundColor: "grey",
    display: "inline-block",
    position: "absolute",
    top: "21px",
    left: "32px",
  },
  chatBalloon_reverse: {
    width: "15px",
    height: "15px",
    transform: "rotate(60deg)",
    backgroundColor: "lightGreen",
    display: "inline-block",
    position: "absolute",
    top: "31px",
    right: "35px",
  },
  btn_submit: {
    display: "block!important",
    marginLeft: "auto!important",
  },
}));
