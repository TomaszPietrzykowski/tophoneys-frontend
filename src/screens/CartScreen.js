import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";

const CartScreen = ({ match, location, history }) => {
  // get product id from url
  const productId = match.params.id;
  // get quantity from url params
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

  return <div style={{ marginTop: "20rem" }}>cart</div>;
};

export default CartScreen;
