import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Alert from "@material-ui/lab/Alert"

// Alert component API:
// variant: success - green, warning - yellow, error - red, info - blue
// onClose - callback (passing onClose argument causes component render close btn)

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 1000,
    "& > * + *": {
      marginTop: theme.spacing(2),
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 300,
    },
    "&:first-child > *": {
      paddingRight: "1.6rem",
    },
    "& > * > *": {
      ...theme.typography.mont,
      fontWeight: 500,
    },
    opacity: 0.8,
  },
}))

const Message = ({ variant = "info", message, onClose, action }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Alert
        severity={variant}
        color={
          variant === "error"
            ? "error"
            : variant === "success"
            ? "success"
            : "warning"
        }
        variant="outlined"
        onClose={onClose}
        action={action}
      >
        {message}
      </Alert>
    </div>
  )
}

export default Message
