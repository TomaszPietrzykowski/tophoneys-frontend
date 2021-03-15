import React from "react";
import { Link } from "react-router-dom";
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
  link: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const OrderScreen = ({ history }) => {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress, paymentMethod } = cart;
  const userInfo = useSelector((state) => state.userLogin.userInfo);

  if (
    cartItems.length > 0 &&
    (!shippingAddress.address || !shippingAddress.city)
  ) {
    history.push("/shipping");
  }

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 20 ? 0 : 10;
  // cart.taxPrice = addDecimals(Number((0.1 * cart.itemsPrice).toFixed(2)));
  cart.taxPrice = 0;
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);
  const placeOrderHandler = () => {
    console.log("Place order button hit");
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
            <Grid container key={item.product}>
              <Grid item md={2}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={classes.image}
                />
              </Grid>
              <Grid item md={6}>
                <Link to={`/product/${item.product}`} className={classes.link}>
                  {item.name}
                </Link>
              </Grid>
              <Grid item md={4}>
                {item.qty} x {item.price} = {item.qty * item.price}
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item md={4}>
          <h3>Order summary</h3>
          <Grid container>
            <Grid item md={6}>
              Items:
            </Grid>
            <Grid item md={6}>
              &euro; {cart.itemsPrice}
            </Grid>
          </Grid>
          {/* <Grid container>
            <Grid item md={6}>
              Tax:
            </Grid>
            <Grid item md={6}>
              &euro; {cart.taxPrice}
            </Grid>
          </Grid> */}
          <Grid container>
            <Grid item md={6}>
              Shipping:
            </Grid>
            <Grid item md={6}>
              &euro; {cart.shippingPrice}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={6}>
              Total:
            </Grid>
            <Grid item md={6}>
              &euro; {cart.totalPrice}
            </Grid>
          </Grid>
          <Button disabled={cartItems.length === 0} onClick={placeOrderHandler}>
            Place order
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderScreen;
