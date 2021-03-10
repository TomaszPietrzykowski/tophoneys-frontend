import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

// Alert component API:
// variant: success - green, warning - yellow, error - red, info - blue
// onClose - callback (passing onClose argument causes component render close btn)

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Message = ({ variant = "success", message, onClose, action }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={variant} onClose={onClose} action={action}>
        {message}
      </Alert>
    </div>
  );
};

export default Message;
