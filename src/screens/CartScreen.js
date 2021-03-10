import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";

const CartScreen = ({ match, location, history }) => {
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
    console.log(`item ${id} deleted`);
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <div style={{ marginTop: "15rem" }}>
      <Grid container>
        <Grid item md={9}>
          <h1>Shopping cart</h1>
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
              {cartItems.map((item) => (
                <Grid container key={item.product}>
                  <Grid item md={2}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        objectFit: "contain",
                        padding: ".5rem",
                      }}
                    />
                  </Grid>
                  <Grid item md={4}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Grid>
                  <Grid item md={2}>
                    &euro; {item.price}
                  </Grid>
                  <Grid item md={2}>
                    <input
                      // className={classes.input}
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
                        <DeleteIcon
                          style={{ color: "rgb(150,0,0)", fontSize: "1.2rem" }}
                        />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                </Grid>
              ))}
            </div>
          )}
        </Grid>
        <Grid item md={3}>
          <h2>
            Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
            items):
          </h2>
          <div style={{ fontSize: "2rem" }}>
            &euro;{" "}
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)
              .toFixed(2)}
          </div>
          <div>
            <Button disabled={cartItems.length === 0} onClick={checkoutHandler}>
              checkout
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartScreen;
