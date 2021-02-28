import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
// import axios from "axios";
import { getProductsByCategory } from "../actions/productActions";

const useStyles = makeStyles((theme) => ({
  test: {
    ...theme.flex.col,
    color: "green",
    marginTop: "20rem",
  },
}));

const CategoryScreen = ({ match }) => {
  const classes = useStyles();
  const { loading, error, products } = useSelector(
    (state) => state.productCategory
  );
  const dispatch = useDispatch();
  const id = match.params.id;

  useEffect(() => {
    dispatch(getProductsByCategory(id));
  }, [id, dispatch]);

  return (
    <div className={classes.test}>
      Category screen:{" "}
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div>
          {products.map((product) => {
            return <h3 key={product._id}>{product.name}</h3>;
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryScreen;
