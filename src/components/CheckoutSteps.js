import React from "react"
import { makeStyles } from "@material-ui/styles"
import CheckIcon from "@material-ui/icons/CheckRounded"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 1400,
    margin: "auto",
    padding: "3rem 3rem 2rem",
    ...theme.typography.mont,
    opacity: 0.8,
    [theme.breakpoints.down("xs")]: {
      padding: "2rem",
      maxWidth: 380,
    },
  },
  containerPassive: {
    ...theme.flex.row,
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 600,
    margin: "auto",
    marginBottom: "2rem",
    ...theme.typography.mont,
    position: "relative",
    "&::before": {
      content: "''",
      backgroundColor: theme.palette.text.disabled,
      opacity: 0.7,
      position: "absolute",
      top: "calc(50% - 1px)",
      width: "50%",
      height: 2,
      zIndex: -2,
      [theme.breakpoints.down("xs")]: {
        height: 1,
      },
    },
    "&::after": {
      content: "''",
      backgroundColor: theme.palette.text.disabled,
      opacity: 0.7,
      position: "absolute",
      top: "calc(50% - 1px)",
      right: 0,
      width: "50%",
      height: 2,
      zIndex: -2,
      [theme.breakpoints.down("xs")]: {
        height: 1,
      },
    },
  },
  container: {
    ...theme.flex.row,
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 600,
    margin: "auto",
    marginBottom: "2rem",
    ...theme.typography.mont,
    // border: "1px solid magenta",
    position: "relative",
    "&::before": {
      content: "''",
      backgroundColor: theme.palette.secondary.light,
      position: "absolute",
      top: "calc(50% - 1px)",
      width: "50%",
      height: 2,
      zIndex: -2,
      [theme.breakpoints.down("xs")]: {
        height: 1,
      },
    },
    "&::after": {
      content: "''",
      backgroundColor: theme.palette.text.disabled,
      opacity: 0.7,
      position: "absolute",
      top: "calc(50% - 1px)",
      right: 0,
      width: "50%",
      height: 2,
      zIndex: -2,
      [theme.breakpoints.down("xs")]: {
        height: 1,
      },
    },
  },
  containerActive: {
    ...theme.flex.row,
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 600,
    margin: "auto",
    marginBottom: "2rem",
    ...theme.typography.mont,
    position: "relative",
    "&::before": {
      content: "''",
      backgroundColor: theme.palette.secondary.light,
      position: "absolute",
      top: "calc(50% - 1px)",
      width: "50%",
      height: 2,
      zIndex: -2,
      [theme.breakpoints.down("xs")]: {
        height: 1,
      },
    },
    "&::after": {
      content: "''",
      backgroundColor: theme.palette.secondary.light,
      position: "absolute",
      top: "calc(50% - 1px)",
      right: 0,
      width: "50%",
      height: 2,
      zIndex: -2,
      [theme.breakpoints.down("xs")]: {
        height: 1,
      },
    },
  },
  circle: {
    ...theme.flex.col,
    padding: ".5rem",
    backgroundColor: "white",
    color: theme.palette.text.disabled,
    border: `2px solid ${theme.palette.text.disabled}`,
    width: 30,
    height: 30,
    borderRadius: "50%",
    position: "relative",
    fontSize: ".85rem",
    [theme.breakpoints.down("xs")]: {
      border: `1px solid ${theme.palette.text.disabled}`,
      fontSize: ".7rem",
      width: 26,
      height: 26,
    },
  },
  circleActive: {
    fontSize: ".85rem",
    ...theme.flex.col,
    padding: ".5rem",
    backgroundColor: "white",
    color: theme.palette.secondary.light,
    border: `2px solid ${theme.palette.secondary.light}`,
    width: 30,
    height: 30,
    borderRadius: "50%",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      border: `1px solid ${theme.palette.secondary.light}`,
      fontSize: ".7rem",
      width: 26,
      height: 26,
    },
  },
  label: {
    fontSize: ".85rem",
    textTransform: "uppercase",
    position: "absolute",
    minWidth: "100%",
    textAlign: "center",
    bottom: "-100%",
    left: "50%",
    transform: "translateX(-50%)",
    color: "inherit",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".75rem",
    },
  },
  check: {
    fontSize: "1.2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
    },
  },
}))

const CheckoutSteps = ({ step1, step2, step3 }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {step2 ? (
        step3 ? (
          <div className={classes.containerActive}>
            <div className={classes.circleActive}>
              <CheckIcon className={classes.check} />
              <span className={classes.label}>Shipping</span>
            </div>

            <div className={classes.circleActive}>
              <CheckIcon className={classes.check} />
              <span className={classes.label}>Order</span>
            </div>

            <div className={classes.circleActive}>
              3<span className={classes.label}>Pay</span>
            </div>
          </div>
        ) : (
          <div className={classes.container}>
            <div className={classes.circleActive}>
              <CheckIcon className={classes.check} />
              <span className={classes.label}>Shipping</span>
            </div>

            <div className={classes.circleActive}>
              2<span className={classes.label}>Order</span>
            </div>
            <div className={classes.circle}>
              3<span className={classes.label}>Pay</span>
            </div>
          </div>
        )
      ) : (
        <div className={classes.containerPassive}>
          <div className={classes.circleActive}>
            1<span className={classes.label}>Shipping</span>
          </div>
          <div className={classes.circle}>
            2<span className={classes.label}>Order</span>
          </div>
          <div className={classes.circle}>
            3<span className={classes.label}>Pay</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheckoutSteps
