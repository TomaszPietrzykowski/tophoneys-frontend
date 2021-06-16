import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
// mui
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { IconButton } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import Tooltip from "@material-ui/core/Tooltip"
import { makeStyles } from "@material-ui/styles"
import PaymentIcon from "@material-ui/icons/Payment"
// custom
import Message from "../components/Message"
import Counter from "../components/Counter"
import { removeFromCart, updateQuantity } from "../actions/cartActions"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.typography.mont,
    fontWeight: 300,
    padding: "3rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: ".5rem",
    },
  },
  title: {
    fontWeight: 300,
    fontSize: "2.4rem",
    color: theme.palette.text.primary,
    margin: "2rem 0 3rem",
    [theme.breakpoints.down("sm")]: {
      margin: "1.5rem .5rem 1.5rem",
      fontSize: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "1rem .5rem 1rem",
      fontSize: "1.6rem",
    },
  },
  tableContainer: {
    fontWeight: 500,
    fontSize: ".9rem",
    letterSpacing: 1,
    paddingRight: "2rem",
    [theme.breakpoints.down("xs")]: {
      paddingRight: 0,
    },
  },
  tableHeader: {
    paddingBottom: "1rem",
    color: theme.palette.text.secondary,
    textTransform: "uppercase",
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
      padding: ".5rem 1rem",
      marginBottom: "2rem",
      position: "relative",
      "&::after": {
        content: "''",
        width: 1,
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        background: `linear-gradient(${theme.palette.common.background}, ${theme.palette.secondary.light}, ${theme.palette.common.background})`,
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
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
  imgContainer: {
    ...theme.flex.colStart,
    padding: "1rem 2rem 1rem 0",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 280,
      padding: "3rem 1rem 3rem 0",
    },
  },
  image: {
    maxWidth: "100%",
    objectFit: "contain",
  },
  deleteIcon: {
    color: theme.palette.text.disabled,
    fontSize: "1.3rem",
  },
  deleteIconContainer: {
    marginLeft: "1rem",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      paddingLeft: 0,
    },
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
      marginLeft: 0,
      marginBottom: "12rem",
      paddingLeft: "1rem",
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
    fontSize: "3rem",
    marginBottom: "3rem",
    [theme.breakpoints.down("xs")]: {
      margin: "0 0 2rem 0",
      fontSize: "2.2rem",
    },
  },
  paymentIcon: {
    fontSize: "1.5rem",
    marginRight: ".5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
    },
  },
  btnContainer: {
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
  checkoutBtn: {
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
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
      flex: 1,
      padding: ".6rem 1.5rem",
    },
  },
  link: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
  productName: {
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.text.primary,
      fontSize: "1.1rem",
      marginBottom: "1.5rem",
    },
  },
  tablePrice: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
      padding: ".5rem 0 1rem 1rem",
    },
  },
  counter: {
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "1rem",
    },
  },
  messageContainer: {
    width: "100%",
    maxWidth: 1400,
    margin: "auto",
    padding: 0,
    ...theme.flex.col,
    marginBottom: "12rem",
    opacity: 0.7,
    [theme.breakpoints.down("xs")]: {
      padding: ".5rem",
    },
  },
}))

const CartScreen = ({ history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  // get cart items read from local storage to redux as an initial state
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping", { from: "checkout" })
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Shopping cart</h1>
      <Grid container>
        <Grid item md={12} lg={8} className={classes.tableContainer}>
          {cartItems.length === 0 ? (
            <div className={classes.messageContainer}>
              <Message
                variant="info"
                message="Your cart is empty"
                action={
                  <Button
                    color="inherit"
                    size="small"
                    onClick={() => history.goBack()}
                  >
                    BACK
                  </Button>
                }
              />
            </div>
          ) : (
            <div>
              {/* <div className={classes.subtotal}>Cart items:</div> */}
              <Grid container className={classes.tableHeader}>
                <Grid item md={2}>
                  View
                </Grid>
                <Grid item md={4}>
                  Product
                </Grid>
                <Grid item md={2}>
                  Price
                </Grid>
                <Grid item md={2}>
                  Quantity
                </Grid>
                <Grid item md={2}>
                  Remove
                </Grid>
              </Grid>
              {cartItems.map((item) => (
                <Grid container key={item.product} className={classes.table}>
                  <Grid item xs={12} sm={6} md={2}>
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
                    sm={6}
                    md={4}
                    className={classes.productName}
                  >
                    <Link
                      to={`/product/${item.product}`}
                      className={classes.link}
                    >
                      {item.name}
                    </Link>
                  </Grid>
                  <Grid item md={2} className={classes.tablePrice}>
                    &euro; {item.price.toFixed(2)}
                  </Grid>
                  <Grid item md={2} className={classes.counter}>
                    <Counter
                      count={item.qty}
                      max={item.countInStock}
                      setCount={(value) =>
                        dispatch(updateQuantity(item.product, Number(value)))
                      }
                    />
                  </Grid>
                  <Grid item md={2}>
                    <Tooltip title="Remove from cart" placement="right-start">
                      <IconButton
                        className={classes.deleteIconContainer}
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <DeleteIcon className={classes.deleteIcon} />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              ))}
            </div>
          )}
        </Grid>
        {cartItems.length > 0 && (
          <>
            <Grid item md={6} lg={4} className={classes.summary}>
              <h2 className={classes.subtotal}>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                {cartItems.reduce((acc, item) => acc + item.qty, 0) > 1
                  ? "items"
                  : "item"}
                ):
              </h2>
              <div className={classes.price}>
                &euro;{" "}
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </div>
              <div className={classes.btnContainer}>
                <Button
                  className={classes.checkoutBtn}
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  <PaymentIcon className={classes.paymentIcon} />
                  checkout
                </Button>
              </div>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  )
}

export default CartScreen
