import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
// mui
import { makeStyles, useTheme } from "@material-ui/styles"
import { Grid, Button } from "@material-ui/core"
import PaymentIcon from "@material-ui/icons/Payment"
// custom
import Loader from "../components/ui/Loader"
import { getOrderDetails, deliverOrder } from "../actions/orderActions"
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
  ORDER_PAY_FAIL,
  ORDER_PAY_REQUEST,
} from "../constants/orderConstants"
import Message from "../components/Message"
import CheckoutSteps from "../components/CheckoutSteps"
// snackbars:
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.typography.mont,
    fontWeight: 300,
    padding: "3rem",
    paddingTop: 0,
    [theme.breakpoints.down("xs")]: {
      padding: ".5rem",
    },
  },
  marginTop: {
    // margin applied to container when checkout steps component not rendered
    height: "3rem",
    [theme.breakpoints.down("xs")]: {
      height: ".5rem",
    },
  },
  title: {
    fontWeight: 300,
    fontSize: "2.4rem",
    color: theme.palette.text.primary,
    margin: "3rem 0 5rem",
    [theme.breakpoints.down("xs")]: {
      margin: "1rem .5rem 2rem",
      fontSize: "1.6rem",
    },
  },
  subtitle: {
    fontWeight: 300,
    fontSize: "1.8rem",
    color: theme.palette.text.primary,
    margin: "2rem 0 5rem",
  },

  tableContainer: {
    fontWeight: 500,
    fontSize: ".9rem",
    letterSpacing: 1,
    paddingRight: "2rem",
  },
  table: {
    color: theme.palette.text.secondary,
    fontWeight: 300,
    fontSize: ".95rem",
    position: "relative",
    "&::after": {
      content: "''",
      width: "100%",
      height: 1,
      position: "absolute",
      bottom: 0,
      left: 0,
      background: `linear-gradient(90deg, ${theme.palette.common.background}, ${theme.palette.text.disabled}, ${theme.palette.common.background})`,
      opacity: 0.5,
    },
    "& > *": {
      ...theme.flex.col,
      alignItems: "flex-start",
      paddingLeft: "1rem",
    },
  },
  center: {
    ...theme.flex.row,
  },
  imgContainer: {
    ...theme.flex.colStart,
    padding: "1rem 2rem 1rem 0",
    paddingLeft: 0,
    [theme.breakpoints.down("xs")]: {
      padding: "1rem",
    },
  },
  image: {
    maxWidth: "100%",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      maxHeight: 270,
    },
  },
  tableMobileRow: {
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 1rem 1rem",
      fontSize: "1rem",
      color: theme.palette.text.primary,
    },
  },
  summary: {
    ...theme.flex.colStart,
    paddingLeft: "2rem",
    "& > *": {
      marginLeft: "2rem",
      [theme.breakpoints.down("md")]: {
        marginLeft: 0,
      },
    },
    position: "relative",
    "&::after": {
      content: "''",
      width: 1,
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      background: `linear-gradient(${theme.palette.common.background}, ${theme.palette.secondary.main}, ${theme.palette.common.background})`,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "50%",
      marginTop: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "12rem",
      paddingLeft: "1rem",
      width: "100%",
    },
  },
  subtotal: {
    fontWeight: 300,
    fontSize: "1.8rem",
    color: theme.palette.text.primary,
    marginBottom: "3rem",
    [theme.breakpoints.down("xs")]: {
      margin: "2rem 0",
      fontSize: "1.5rem",
    },
  },
  price: {
    color: theme.palette.text.secondary,
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  total: {
    color: theme.palette.text.primary,
    fontSize: "1.8rem",
    margin: "1rem 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  label: {
    color: theme.palette.text.secondary,
    fontSize: "1rem",
    marginBottom: "1rem",
    position: "relative",
    "&::after": {
      content: "''",
      height: 1,
      width: "100%",
      position: "absolute",
      top: "-.5rem",
      left: 0,
      background: `linear-gradient(90deg, ${theme.palette.secondary.light}, ${theme.palette.common.background})`,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
      marginBottom: ".5rem",
    },
  },
  link: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
  detailsSection: {
    marginBottom: "3.5rem",
    [theme.breakpoints.down("xs")]: {
      padding: ".5rem",
      marginBottom: "1rem",
    },
  },
  details: {
    color: theme.palette.text.primary,
    fontSize: "1.4rem",
    marginBottom: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  payBtn: {
    border: "none",
    padding: ".8rem 3.5rem .8rem 2.5rem",
    marginTop: "2rem",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...theme.typography.mont,
    textTransform: "uppercase",
    letterSpacing: 2,
    fontSize: "1rem",
    fontWeight: 600,
    borderRadius: 4,
    color: "white",
    backgroundColor: theme.palette.common.success,
    transition: "all .3s ease",
    opacity: 0.85,
    "&:hover": {
      backgroundColor: theme.palette.common.success,
      opacity: 1,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      flex: 1,
      // padding: ".6rem 3rem .6rem 2rem",
    },
  },
  paymentIcon: {
    fontSize: "1.8rem",
    marginRight: ".5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  markAsSendBtn: {
    marginTop: "2rem",
    border: "none",
    padding: ".8rem 2.5rem",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...theme.typography.mont,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: "1rem",
    fontWeight: 500,
    borderRadius: 4,
    color: "white",
    backgroundColor: theme.palette.secondary.main,
    transition: "all .3s ease",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
    "&:disabled": {
      backgroundColor: theme.palette.text.disabled,
      color: "white",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
      padding: ".6rem 1.5rem",
    },
  },
}))

const OrderScreen = ({ match, history, location }) => {
  const classes = useStyles()
  const theme = useTheme()
  const dispatch = useDispatch()
  // successful alert state
  const [open, setOpen] = useState(false)
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }
  const orderId = match.params.id

  const { userInfo } = useSelector((state) => state.userLogin)

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

  const orderDeliver = useSelector((state) => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  if (!loading && order) {
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
  }
  // Determine redirection from mollie payments
  const successfulPaymentRedirectAlert = () => {
    const query = new URLSearchParams(location.search)
    if (query.get("redirect") === "mollie" && order.isPaid) {
      setOpen(true)
    }
  }

  // lifecycle
  useEffect(() => {
    if (!order || successPay || successDeliver || order._id !== orderId) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch({ type: ORDER_DELIVER_RESET })
      dispatch(getOrderDetails(orderId))
    }
    if (order) {
      successfulPaymentRedirectAlert()
    }
    // eslint-disable-next-line
  }, [dispatch, order, orderId, successPay, successDeliver, userInfo, history])

  // --------------------------------------------------------- HANDLERS

  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }
  const handleMollie = async () => {
    try {
      dispatch({ type: ORDER_PAY_REQUEST })
      const { data } = await axios.post("/api/checkout/proceed", {
        orderID: orderId,
      })
      window.location.href = data.checkoutUrl
    } catch (error) {
      dispatch({
        type: ORDER_PAY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="success">
          Payment successful. Thank you!.
        </Alert>
      </Snackbar>
      {order && !order.isPaid ? (
        <CheckoutSteps step1 step2 step3 orderId={orderId} />
      ) : (
        <div className={classes.marginTop} />
      )}
      <div className={classes.container}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="error" message={error} />
        ) : (
          <>
            <h1 className={classes.title}>Order details</h1>
            <Grid container>
              <Grid item md={12} lg={8}>
                <Grid container className={classes.detailsSection}>
                  <Grid item className={classes.label}>
                    Order number:
                  </Grid>
                  <Grid item xs={12} md={12} className={classes.details}>
                    {orderId}
                  </Grid>
                </Grid>
                <Grid container className={classes.detailsSection}>
                  <Grid item className={classes.label}>
                    Customer:
                  </Grid>
                  <Grid item xs={12} md={12} className={classes.details}>
                    {order.user.name}
                  </Grid>
                </Grid>
                <Grid container className={classes.detailsSection}>
                  <Grid item className={classes.label}>
                    Email:
                  </Grid>
                  <Grid item xs={12} md={12} className={classes.details}>
                    {order.user.email}
                  </Grid>
                </Grid>
                <Grid container className={classes.detailsSection}>
                  <Grid item className={classes.label}>
                    Payment status:
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    className={classes.details}
                    style={
                      order.isPaid
                        ? { color: theme.palette.common.success }
                        : { color: theme.palette.text.secondary }
                    }
                  >
                    {order.isPaid
                      ? `Paid on ${order.paidAt
                          .substring(0, 16)
                          .replace("T", " at ")}`
                      : "Not paid"}
                  </Grid>
                </Grid>
                <Grid container className={classes.detailsSection}>
                  <Grid item className={classes.label}>
                    Shipping status:
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    className={classes.details}
                    style={
                      order.isDelivered
                        ? { color: theme.palette.common.success }
                        : { color: theme.palette.text.secondary }
                    }
                  >
                    {order.isDelivered
                      ? `Sent on ${order.deliveredAt
                          .substring(0, 16)
                          .replace("T", " at ")}`
                      : "Not sent"}
                  </Grid>
                </Grid>
                <Grid container className={classes.detailsSection}>
                  <Grid item className={classes.label}>
                    Shipping address:
                  </Grid>
                  <Grid item xs={12} md={12} className={classes.details}>
                    {order.shippingAddress.address}
                  </Grid>
                  <Grid item xs={12} md={12} className={classes.details}>
                    {order.shippingAddress.postalCode}{" "}
                    {order.shippingAddress.city}
                  </Grid>
                  <Grid item xs={12} md={12} className={classes.details}>
                    {order.shippingAddress.country}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item className={classes.label}>
                    Order items:
                  </Grid>
                </Grid>
                {order.orderItems.length === 0 ? (
                  <div className={classes.messageContainer}>
                    <Message variant="info" message="Your cart is empty" />
                  </div>
                ) : (
                  order.orderItems.map((item) => (
                    <Grid
                      container
                      key={item.product}
                      className={classes.table}
                    >
                      <Grid item md={2} style={{ paddingLeft: 0 }}>
                        <Link
                          className={classes.imgContainer}
                          to={`/product/${item.product}`}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className={classes.image}
                          />
                        </Link>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={6}
                        className={classes.tableMobileRow}
                      >
                        <Link
                          to={`/product/${item.product}`}
                          className={classes.link}
                        >
                          {item.name}
                        </Link>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        md={4}
                        className={classes.tableMobileRow}
                      >
                        {item.qty} x {item.price} = &euro;{" "}
                        {(item.qty * item.price).toFixed(2)}
                      </Grid>
                    </Grid>
                  ))
                )}
              </Grid>
              {/* -------------------------------------------------------- Right */}
              <Grid item md={6} lg={4} className={classes.summary}>
                <h2 className={classes.subtotal}>Order summary:</h2>
                <Grid container>
                  <Grid item xs={6} md={6} className={classes.price}>
                    Products:
                  </Grid>
                  <Grid item xs={6} md={6} className={classes.price}>
                    &euro; {order.itemsPrice}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6} md={6} className={classes.price}>
                    Shipping:
                  </Grid>
                  <Grid item xs={6} md={6} className={classes.price}>
                    &euro; {order.shippingPrice}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6} md={6} className={classes.total}>
                    Total:
                  </Grid>
                  <Grid item xs={6} md={6} className={classes.total}>
                    &euro; {Number(order.totalPrice).toFixed(2)}
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item className={classes.paypal}>
                    {!order.isPaid && (
                      <>
                        {loadingPay ? (
                          <Loader />
                        ) : (
                          <Button
                            onClick={handleMollie}
                            className={classes.payBtn}
                          >
                            <PaymentIcon className={classes.paymentIcon} />
                            Pay
                          </Button>
                        )}
                      </>
                    )}
                    {loadingDeliver ? (
                      <Loader />
                    ) : (
                      userInfo &&
                      userInfo.isAdmin &&
                      order.isPaid &&
                      !order.isDelivered && (
                        <Button
                          onClick={deliverHandler}
                          className={classes.markAsSendBtn}
                        >
                          Mark as sent
                        </Button>
                      )
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </>
  )
}

export default OrderScreen
