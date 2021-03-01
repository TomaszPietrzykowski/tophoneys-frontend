import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Message = ({ variant = "success", message, onClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={variant} onClose={onClose}>
        {message}
      </Alert>
    </div>
  );
};

export default Message;
