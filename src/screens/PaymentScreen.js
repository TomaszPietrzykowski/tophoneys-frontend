import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { useSelector, useDispatch } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { Button } from "@material-ui/core";
import { savePaymentMethod } from "../actions/cartActions";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.col,
    marginTop: "15rem",
  },
}));

const PaymentScreen = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const shippingAddress = useSelector((state) => state.cart.shippingAddress);

  if (!shippingAddress.address || !shippingAddress.city) {
    history.push("/shipping");
  }

  const handleSubmit = () => {
    // e.preventDefault()
    // to be enchanced with other payments
    setPaymentMethod(paymentMethod);
    dispatch(savePaymentMethod("PayPal"));
    history.push("/placeorder");
  };

  return (
    <div className={classes.container}>
      <CheckoutSteps step1 step2 />
      <h2>Payment methods</h2>
      <Button className={classes.continueBtn} onClick={handleSubmit}>
        Continue
      </Button>
    </div>
  );
};

export default PaymentScreen;
