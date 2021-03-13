import React from "react";
import { makeStyles } from "@material-ui/styles";
import CheckoutSteps from "../components/CheckoutSteps";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.col,
    marginTop: "15rem",
  },
}));

const OrderScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CheckoutSteps step1 step2 step3 />
      <h2>Order</h2>
    </div>
  );
};

export default OrderScreen;
