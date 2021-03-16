import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
// import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Loader from "../components/Loader";
import Message from "../components/Message";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "3rem",
    marginTop: "10rem",
    ...theme.utils.container,
  },
  backBtn: {
    ...theme.typography.prosto,
    textTransform: "uppercase",
    padding: ".6rem 2rem .6rem 1.5rem",
    color: theme.palette.text.secondary,
    border: "1px solid rgba(0,0,0,.2)",
    background: "white",
    borderRadius: 4,
    margin: "1rem 2rem",
    cursor: "pointer",
  },
  card: {
    padding: "2rem",
  },
  filler: {
    width: "100%",
    ...theme.typography.source,
    fontSize: "1.2rem",
  },
  image: {
    width: "100%",
    objectFit: "contain",
  },
  name: {
    ...theme.typography.prosto,
    marginBottom: "3rem",
  },
  price: {
    ...theme.typography.prosto,
    marginBottom: "3rem",
  },
  description: {
    color: theme.palette.text.secondary,
    marginBottom: "3rem",
  },
  listItem: {
    paddingBottom: "1rem",
    color: theme.palette.text.secondary,
  },
  input: {
    padding: ".3rem",
    border: "none",
    color: "inherit",
  },
  addToCartButton: {
    ...theme.typography.prosto,
    textTransform: "uppercase",
    width: "100%",
    background: "black",
    color: "white",
    padding: ".6rem",
    margin: "2rem 0",
    cursor: "pointer",
  },
}));

const ProductScreen = ({ match, history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [match, dispatch]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <div className={classes.container}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="error" message={error} />
        ) : (
          <>
            <button
              className={classes.backBtn}
              onClick={() => history.goBack()}
            >
              &larr; Back
            </button>
            {product && (
              <Grid container>
                <Grid item xs={12} md={6} lg={5} className={classes.card}>
                  <div className={classes.filler}>
                    <img
                      src={product.image}
                      className={classes.image}
                      alt={product.name}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6} lg={4} className={classes.card}>
                  <div className={classes.filler}>
                    <h3 className={classes.name}>{product.name}</h3>
                    <p className={classes.listItem}>{product.description}</p>
                    <p className={classes.listItem}>
                      Country: {product.countryOfOrigin}
                    </p>
                    <p className={classes.listItem}>
                      Capacity: {product.capacity}
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} md={12} lg={3} className={classes.card}>
                  <div className={classes.filler}>
                    <h3 className={classes.price}>
                      Price: &euro; {product.price}
                    </h3>
                    <p className={classes.listItem}>
                      Availability:{" "}
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </p>
                    {product.countInStock > 0 && (
                      <p className={classes.listItem}>
                        Quantity:{" "}
                        <input
                          className={classes.input}
                          type="number"
                          value={qty}
                          min={1}
                          max={product.countInStock}
                          onChange={(e) => setQty(Number(e.target.value))}
                        />
                      </p>
                    )}
                    <button
                      className={classes.addToCartButton}
                      disabled={product.countInStock === 0}
                      onClick={addToCartHandler}
                    >
                      Add to cart
                    </button>
                  </div>
                </Grid>
              </Grid>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default ProductScreen;
