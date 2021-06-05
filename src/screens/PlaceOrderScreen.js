import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import { Button, Grid } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import { createOrder } from "../actions/orderActions"
import Message from "../components/Message"
import { ORDER_CREATE_RESET } from "../constants/orderConstants"
import { CART_EMPTY_ITEMS } from "../constants/cartConstants"
import CheckoutSteps from "../components/CheckoutSteps"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.typography.mont,
    fontWeight: 300,
    padding: "3rem",
    paddingTop: 0,
    // border: "1px solid blue",
  },
  title: {
    fontWeight: 300,
    fontSize: "2.4rem",
    color: theme.palette.text.primary,
    margin: "3rem 0 5rem",
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
      background: `linear-gradient(90deg, transparent, ${theme.palette.text.disabled}, transparent)`,
      opacity: 0.5,
    },
    "& > *": {
      ...theme.flex.col,
      alignItems: "flex-start",
      paddingLeft: "1rem",
    },
  },
  imgContainer: {
    ...theme.flex.colStart,
    padding: "1rem 2rem 1rem 0",
    paddingLeft: 0,
  },
  image: {
    maxWidth: "100%",
    objectFit: "contain",
  },
  center: {
    ...theme.flex.row,
  },
  summary: {
    ...theme.flex.colStart,
    paddingLeft: "2rem",
    "& > *": {
      marginLeft: "2rem",
    },
    position: "relative",
    "&::after": {
      content: "''",
      width: 1,
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      background: `linear-gradient(transparent, ${theme.palette.secondary.main}, transparent)`,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "50%",
    },
  },
  subtotal: {
    fontWeight: 300,
    fontSize: "1.8rem",
    color: theme.palette.text.primary,
    marginBottom: "3rem",
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
  },
  detailsSection: {
    marginBottom: "3.5rem",
  },
  details: {
    color: theme.palette.text.primary,
    fontSize: "1.4rem",
    marginBottom: "1rem",
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
      background: `linear-gradient(90deg, ${theme.palette.secondary.light}, transparent)`,
    },
  },
  link: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
  placeOrderBtn: {
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
    [theme.breakpoints.down("md")]: {
      fontSize: ".85rem",
      flex: 1,
      padding: ".3rem",
    },
  },

  messageContainer: {
    maxWidth: 600,
  },
}))

const PlaceOrderScreen = ({ history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const { cartItems, shippingAddress } = cart

  const userInfo = useSelector((state) => state.userLogin.userInfo)

  if (
    cartItems.length > 0 &&
    (!shippingAddress.address || !shippingAddress.city)
  ) {
    history.push("/shipping")
  }

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  cart.shippingPrice = cart.itemsPrice >= 39 ? 0 : 4.95
  // cart.taxPrice = addDecimals(Number((0.1 * cart.itemsPrice).toFixed(2)));
  cart.taxPrice = 0
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate
  const orderAnonymous = useSelector((state) => state.orderAnonymous)
  const { anonymousShoppingSelected, name, email } = orderAnonymous

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
      dispatch({ type: ORDER_CREATE_RESET })
      dispatch({ type: CART_EMPTY_ITEMS })
      localStorage.removeItem("cartItems")
    }
    // eslint-disable-next-line
  }, [dispatch, success, history])

  const placeOrderHandler = () => {
    const user =
      userInfo && userInfo.name
        ? {
            _id: userInfo._id,
            name: userInfo.name,
            email: userInfo.email,
          }
        : {
            _id: "Anonymous",
            name,
            email,
          }
    dispatch(
      createOrder({
        user,
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod || "PayPal",
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

  return (
    <>
      <CheckoutSteps step1 step2 />
      <div className={classes.container}>
        <h1 className={classes.title}>Place order</h1>

        <Grid container>
          <Grid item md={12} lg={8}>
            <Grid container className={classes.detailsSection}>
              <Grid item className={classes.label}>
                Customer:
              </Grid>
              <Grid item md={12} className={classes.details}>
                {userInfo && userInfo.name
                  ? userInfo.name
                  : anonymousShoppingSelected
                  ? name
                  : "Anonymous"}
              </Grid>
            </Grid>
            <Grid container className={classes.detailsSection}>
              <Grid item className={classes.label}>
                Email:
              </Grid>
              <Grid item md={12} className={classes.details}>
                {userInfo && userInfo.email ? userInfo.email : email}
              </Grid>
            </Grid>
            <Grid container className={classes.detailsSection}>
              <Grid item className={classes.label}>
                Shipping address:
              </Grid>
              <Grid item md={12} className={classes.details}>
                {shippingAddress.address}
              </Grid>
              <Grid item md={12} className={classes.details}>
                {shippingAddress.postalCode} {shippingAddress.city}
              </Grid>
              <Grid item md={12} className={classes.details}>
                {shippingAddress.country}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item className={classes.label}>
                Order items:
              </Grid>
            </Grid>
            {cartItems.length === 0 ? (
              <div className={classes.messageContainer}>
                <Message variant="info" message="Your cart is empty" />
              </div>
            ) : (
              cartItems.map((item) => (
                <Grid container key={item.product} className={classes.table}>
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
                  <Grid item md={6}>
                    <Link
                      to={`/product/${item.product}`}
                      className={classes.link}
                    >
                      {item.name}
                    </Link>
                  </Grid>
                  <Grid item md={4}>
                    {item.qty} x {item.price} = &euro;{" "}
                    {(item.qty * item.price).toFixed(2)}
                  </Grid>
                </Grid>
              ))
            )}
          </Grid>
          {/* ------------------------------------------- RIGHT */}
          <Grid item md={6} lg={4} className={classes.summary}>
            <h2 className={classes.subtotal}>Order summary</h2>
            <Grid container>
              <Grid item md={6} className={classes.price}>
                Items:
              </Grid>
              <Grid item md={6} className={classes.price}>
                &euro; {cart.itemsPrice}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={6} className={classes.price}>
                Shipping:
              </Grid>
              <Grid item md={6} className={classes.price}>
                &euro; {cart.shippingPrice}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={6} className={classes.total}>
                Total:
              </Grid>
              <Grid item md={6} className={classes.total}>
                &euro; {cart.totalPrice}
              </Grid>
            </Grid>
            {error && <Message variant="error" message={error} />}
            <Button
              disabled={cartItems.length === 0}
              onClick={placeOrderHandler}
              className={classes.placeOrderBtn}
            >
              Place order
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default PlaceOrderScreen
