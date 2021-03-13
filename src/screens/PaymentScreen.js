import React from "react";
import { makeStyles } from "@material-ui/styles";
import CheckoutSteps from "../components/CheckoutSteps";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.col,
    marginTop: "15rem",
  },
}));

const PaymentScreen = ({ history }) => {
  const classes = useStyles();

  const handleSubmit = () => {
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
