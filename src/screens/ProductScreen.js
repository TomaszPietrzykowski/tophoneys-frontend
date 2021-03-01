import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Loader from "../components/Loader";
import Message from "../components/Message";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "3rem",
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
  box1: {
    padding: "2rem",
    border: "1px solid blue",
  },
  box2: {
    padding: "2rem",
    border: "1px solid orange",
  },
  box3: {
    padding: "2rem",
    border: "1px solid green",
  },
  filler: {
    width: "100%",
  },
  image: {
    width: "100%",
    objectFit: "contain",
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
        <Grid container>
          <Grid item xs={12} md={6} lg={4} className={classes.box1}>
            <div className={classes.filler}>
              <img
                src={product.image}
                className={classes.image}
                alt={product.name}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={5} className={classes.box2}>
            <div className={classes.filler}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={3} className={classes.box3}>
            <div className={classes.filler}>c</div>
          </Grid>
        </Grid>
        <p>{product && `product fetched: ${product.name}`}</p>
      </div>
    </>
  );
};

export default ProductScreen;
