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
    ...theme.typography.source,
    marginTop: "15rem",
    maxWidth: 1140,
    color: theme.palette.text.secondary,
  },
  h1: {
    ...theme.typography.prosto,
    color: theme.palette.text.primary,
    fontSize: "1.7rem",
    padding: "1rem",
    wordWrap: "break-word",
    fontWeight: 500,
  },
  h2: {
    ...theme.typography.prosto,
    fontSize: "1.4rem",
    padding: ".5rem 0",
    marginBottom: ".5rem",
    fontWeight: 400,
  },
  image: {
    width: "100%",
    objectFit: "contain",
    padding: "1rem",
  },
  productListItem: {
    borderBottom: "1px solid rgba(0,0,0,.125)",
  },
  center: {
    ...theme.flex.row,
    justifyContent: "flex-start",
    paddingLeft: "1rem",
  },
  link: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
  column: {
    padding: "1rem",
    "& > *": {
      marginBottom: "1rem",
    },
  },
  card: {
    border: "1px solid rgba(0,0,0,.125)",
    borderRadius: 4,
    "& > *": {
      padding: ".75rem 1.25rem",
      borderBottom: "1px solid rgba(0,0,0,.125)",
    },
  },
  mr: {
    paddingRight: "1rem",
    width: "50%",
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
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=EUR`;
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
    // console.log(paymentResult);
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
          <h1 className={classes.h1}>Order {orderId}</h1>
          <Grid container>
            <Grid item md={8} className={classes.column}>
              <h2 className={classes.h2}>Shipping:</h2>
              <p>Name: {order.user.name}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                Address: {order.shippingAddress.address},{" "}
                {order.shippingAddress.postalCode} {order.shippingAddress.city},{" "}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message
                  variant="success"
                  message={`Sent on ${order.deliveredAt
                    .substring(0, 16)
                    .replace("T", " at ")}`}
                />
              ) : (
                <Message variant="error" message="Status: not sent" />
              )}
              <h2 className={classes.h2}>Payment:</h2>
              <div>
                {order.isPaid ? (
                  <Message
                    variant="success"
                    message={`Paid on ${order.paidAt
                      .substring(0, 16)
                      .replace("T", " at ")}`}
                  />
                ) : (
                  <Message variant="error" message="Not paid" />
                )}
              </div>
              <h2 className={classes.h2}>Order Items:</h2>
              {order.orderItems.length === 0 ? (
                <Message variant="info" message="Order is empty" />
              ) : (
                order.orderItems.map((item) => (
                  <Grid
                    container
                    key={item.product}
                    className={classes.productListItem}
                  >
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
                      {item.qty} x &euro;{item.price} = &euro;
                      {(item.qty * item.price).toFixed(2)}
                    </Grid>
                  </Grid>
                ))
              )}
            </Grid>
            <Grid item md={4}>
              <div className={classes.card}>
                <h2 className={classes.h2}>Order summary:</h2>
                <Grid container>
                  <Grid item md={6} className={classes.mr}>
                    Products:
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
                  <Grid item md={6} className={classes.mr}>
                    Shipping:
                  </Grid>
                  <Grid item md={6}>
                    &euro; {order.shippingPrice}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item md={6} className={classes.mr}>
                    Total:
                  </Grid>
                  <Grid item md={6}>
                    &euro; {order.totalPrice}
                  </Grid>
                </Grid>
                {!order.isPaid && (
                  <>
                    {loadingPay ? (
                      <Loader />
                    ) : !sdkReady ? (
                      <Loader />
                    ) : (
                      <PayPalButton
                        amount={order.totalPrice}
                        currency="EUR"
                        shippingPreference="NO_SHIPPING"
                        onSuccess={successPaymentHandler}
                      />
                    )}
                  </>
                )}
              </div>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default OrderScreen;
