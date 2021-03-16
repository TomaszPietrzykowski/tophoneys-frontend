import React, { useState, useEffect } from "react";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import { getOrderDetails, payOrder } from "../actions/orderActions";
import { ORDER_PAY_RESET } from "../constants/orderConstants";
import Message from "../components/Message";

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
  center: {
    ...theme.flex.row,
  },
  link: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const OrderScreen = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const orderId = match.params.id;

  const [sdkReady, setSdkReady] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  //   const userInfo = useSelector((state) => state.userLogin.userInfo);

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  if (!loading) {
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || successPay || order._id !== orderId) {
      dispatch({ type: ORDER_PAY_RESET });
      // dispatch({ type: ORDER_DELIVER_RESET })
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, order, orderId, successPay]);

  // --------------------------------------------------------- HANDLERS

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  return (
    <div className={classes.container}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error" message={error} />
      ) : (
        <>
          <h1>Order {orderId}</h1>
          <Grid container>
            <Grid item md={8}>
              <h3>Customer:</h3>
              <p>
                <strong>Name: </strong>
                {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <h3>Shipping address:</h3>
              <p>{order.shippingAddress.address}</p>
              <p>{order.shippingAddress.postalCode}</p>
              <p>{order.shippingAddress.city}</p>
              <p>{order.shippingAddress.country}</p>
              <div>
                {order.isDelivered ? (
                  <Message
                    variant="success"
                    message={`Sent on ${order.deliveredAt}`}
                  />
                ) : (
                  <Message variant="error" message="Not sent" />
                )}
              </div>
              <h3>Payment:</h3>
              <div>
                {order.isPaid ? (
                  <Message
                    variant="success"
                    message={`Paid on ${order.paidAt}`}
                  />
                ) : (
                  <Message variant="error" message="Not paid" />
                )}
              </div>
              <h3>Order Items:</h3>
              {order.orderItems.length === 0 ? (
                <Message variant="info" message="Order is empty" />
              ) : (
                order.orderItems.map((item) => (
                  <Grid container key={item.product}>
                    <Grid item md={2}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className={classes.image}
                      />
                    </Grid>
                    <Grid item md={6} className={classes.center}>
                      <Link
                        to={`/product/${item.product}`}
                        className={classes.link}
                      >
                        {item.name}
                      </Link>
                    </Grid>
                    <Grid item md={4} className={classes.center}>
                      {item.qty} x {item.price} = {item.qty * item.price}
                    </Grid>
                  </Grid>
                ))
              )}
            </Grid>
            <Grid item md={4}>
              <h3>Order summary</h3>
              <Grid container>
                <Grid item md={6}>
                  Items:
                </Grid>
                <Grid item md={6}>
                  &euro; {order.itemsPrice}
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
                  &euro; {order.shippingPrice}
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={6}>
                  Total:
                </Grid>
                <Grid item md={6}>
                  &euro; {order.totalPrice}
                </Grid>
              </Grid>
              {!order.isPaid && (
                <div>
                  {loadingPay && <Loader />}
                  {!sdkReady ? (
                    <Loader />
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    />
                  )}
                </div>
              )}
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default OrderScreen;
