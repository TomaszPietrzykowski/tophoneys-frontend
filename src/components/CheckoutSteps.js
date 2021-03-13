import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.typography.prosto,
  },
  nav: {
    ...theme.flex.row,
    listStyle: "none",
    "& > *": {
      padding: ".5rem 2rem",
    },
  },
  liActive: {
    ...theme.flex.row,
    color: theme.palette.primary.main,
  },
  liDisabled: {
    ...theme.flex.row,
    color: theme.palette.text.disabled,
  },
  circleActive: {
    ...theme.flex.col,
    padding: ".5rem",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    width: 30,
    height: 30,
    borderRadius: "50%",
  },
  circleDisabled: {
    ...theme.flex.col,
    padding: ".5rem",
    backgroundColor: "white",
    border: `3px solid ${theme.palette.text.disabled}`,
    color: theme.palette.text.disabled,
    width: 30,
    height: 30,
    borderRadius: "50%",
  },
  link: {
    textDecoration: "none",
    padding: ".5rem 2rem",
  },
  stepContainerActive: {
    position: "relative",
    "&::before": {
      content: "''",
      backgroundColor: theme.palette.primary.main,
      position: "absolute",
      top: "calc(50% - 2px)",
      width: "100%",
      height: "4px",
      zIndex: -2,
    },
  },
  stepContainerDisabled: {
    position: "relative",
    "&::before": {
      content: "''",
      backgroundColor: theme.palette.text.disabled,
      position: "absolute",
      top: "calc(50% - 2px)",
      width: "100%",
      height: "4px",
      zIndex: -2,
    },
  },
  span: {
    padding: "0 .5rem",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const CheckoutSteps = ({ step1, step2, step3 }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ul className={classes.nav}>
        {step1 ? (
          <div className={classes.stepContainerActive}>
            <Link to="/shipping" className={classes.link}>
              <li className={classes.liActive}>
                <div className={classes.circleActive}>1</div>
                <span className={classes.span}>Shipping</span>
              </li>
            </Link>
          </div>
        ) : (
          <div className={classes.stepContainerDisabled}>
            <li className={classes.liDisabled}>
              <div className={classes.circleDisabled}>1</div>
              <span className={classes.span}>Shipping</span>
            </li>
          </div>
        )}
        {step2 ? (
          <div className={classes.stepContainerActive}>
            <Link to="/paymentmethod" className={classes.link}>
              <li className={classes.liActive}>
                <div className={classes.circleActive}>2</div>
                <span className={classes.span}>Payment</span>
              </li>
            </Link>
          </div>
        ) : (
          <div className={classes.stepContainerDisabled}>
            <li className={classes.liDisabled}>
              <div className={classes.circleDisabled}>2</div>
              <span className={classes.span}>Payment</span>
            </li>
          </div>
        )}
        {step3 ? (
          <div>
            <Link to="/placeorder" className={classes.link}>
              <li className={classes.liActive}>
                <div className={classes.circleActive}>3</div>
                <span className={classes.span}>Order</span>
              </li>
            </Link>
          </div>
        ) : (
          <div>
            <li className={classes.liDisabled}>
              <div className={classes.circleDisabled}>3</div>
              <span className={classes.span}>Order</span>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default CheckoutSteps;
