import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.col,
    ...theme.typography.source,
    marginTop: "15rem",
  },
  image: {
    width: "100%",
    objectFit: "contain",
    padding: ".5rem",
  },
}));

const OrderScreen = ({ history }) => {
  const classes = useStyles();
  const { cartItems, shippingAddress, paymentMethod } = useSelector(
    (state) => state.cart
  );
  const userInfo = useSelector((state) => state.userLogin.userInfo);

  if (
    cartItems.length > 0 &&
    (!shippingAddress.address || !shippingAddress.city)
  ) {
    history.push("/shipping");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(history.location.state.from);
  };

  return (
    <div className={classes.container}>
      <CheckoutSteps step1 step2 step3 />
      <h2>Order</h2>
      <Grid container>
        <Grid item md={8}>
          <h3>Customer:</h3>
          <p>{userInfo.name}</p>
          <h3>Shipping address:</h3>
          <p>{shippingAddress.address}</p>
          <p>{shippingAddress.postalCode}</p>
          <p>{shippingAddress.city}</p>
          <p>{shippingAddress.country}</p>
          <h3>Cart Items:</h3>
          {cartItems.map((item) => (
            <Grid container key={item._id}>
              <Grid item md={2}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={classes.image}
                />
              </Grid>
              <Grid item md={6}>
                {item.name}
              </Grid>
              <Grid item md={4}>
                {item.qty} x {item.price} = {item.qty * item.price}
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item md={4}>
          Buttons
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default OrderScreen;
