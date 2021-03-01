import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "20rem",
    ...theme.utils.container,
  },
  backBtn: {
    padding: ".3rem 2rem",
    color: "black",
    border: "1px solid black",
    background: "white",
    borderRadius: 4,
  },
}));

const ProductScreen = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [match, dispatch]);

  return (
    <>
      <div className={classes.container}>
        <Link to="/">
          <button className={classes.backBtn}>Go Back</button>
        </Link>
        <p>{product && `product fetched: ${product.name}`}</p>
      </div>
    </>
  );
};

export default ProductScreen;
