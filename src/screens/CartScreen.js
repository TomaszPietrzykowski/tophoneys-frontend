import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartActions";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    marginTop: "15rem",
  },
  title: {
    ...theme.typography.prosto,
    fontSize: "1.5rem",
    padding: "1rem",
    marginBottom: "2rem",
  },
  tableHeader: {
    "& > *": {
      ...theme.typography.open,
      ...theme.flex.col,
      padding: ".5rem",
    },
  },
  table: {
    "& > *": {
      ...theme.flex.col,
    },
  },
  image: {
    width: "100%",
    objectFit: "contain",
    padding: ".5rem",
  },
  qtyInput: {
    padding: ".2rem",
  },
  deleteIcon: {
    color: "rgb(150,0,0)",
    fontSize: "1.2rem",
  },
  summary: {
    "& > *": {
      ...theme.flex.col,
      ...theme.typography.prosto,
    },
    [theme.breakpoints.down("md")]: {
      // border: "1px solid green",
      marginLeft: "50%",
    },
  },
  subtotal: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  price: {
    fontSize: "2rem",
  },
  btnContainer: {
    padding: "3rem",
  },
  checkoutBtn: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const CartScreen = ({ match, location, history }) => {
  const classes = useStyles();
  // get product id from url
  const productId = match.params.id;
  // get quantity from url query string
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  // define dispatch
  const dispatch = useDispatch();
  // get cart items read from local storage to redux as an initial state
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Shopping cart</h1>
      <Grid container>
        <Grid item md={12} lg={9}>
          {cartItems.length === 0 ? (
            <Message
              variant="info"
              message="Your cart is empty"
              action={
                <Button
                  color="inherit"
                  size="small"
                  onClick={() => history.push("/")}
                >
                  Back
                </Button>
              }
            />
          ) : (
            <div>
              <Grid container className={classes.tableHeader}>
                <Grid item md={2}>
                  Preview
                </Grid>
                <Grid item md={4}>
                  Name
                </Grid>
                <Grid item md={2}>
                  Price
                </Grid>
                <Grid item md={2}>
                  Quantity
                </Grid>
                <Grid item md={2}>
                  Actions
                </Grid>
              </Grid>
              {cartItems.map((item) => (
                <Grid container key={item.product} className={classes.table}>
                  <Grid item md={2}>
                    <Link to={`/product/${item.product}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className={classes.image}
                      />
                    </Link>
                  </Grid>
                  <Grid item md={4}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Grid>
                  <Grid item md={2}>
                    &euro; {item.price}
                  </Grid>
                  <Grid item md={2}>
                    <input
                      className={classes.qtyInput}
                      type="number"
                      value={item.qty}
                      min={1}
                      max={item.countInStock}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    />
                  </Grid>
                  <Grid item md={2}>
                    <Tooltip title="Delete" placement="right-start">
                      <IconButton
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
        <Grid item md={6} lg={3} className={classes.summary}>
          {cartItems.length > 0 && (
            <>
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
                  checkout
                </Button>
              </div>
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default CartScreen;
