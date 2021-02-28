import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import { getProductsByCategory } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const useStyles = makeStyles((theme) => ({
  flex: {
    ...theme.flex.row,
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: "3rem",
  },
  productTab: {
    ...theme.flex.col,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 250,
    height: 400,
    border: "1px solid rgba(0,0,0,0.05)",
    borderRadius: 4,
  },
}));

const Featured = ({ match }) => {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const { loading, error, products } = useSelector(
    (state) => state.productCategory
  );
  const dispatch = useDispatch();
  const id = "honeys";

  useEffect(() => {
    dispatch(getProductsByCategory(id));
  }, [id, dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error" message={error} />
      ) : (
        <div className={classes.flex}>
          {products
            .filter((p, i) => i < 4)
            .map((product) => {
              return (
                <div className={classes.productTab} key={product._id}>
                  <img
                    src={`${product.image}`}
                    alt={product.name}
                    style={{ width: 230, height: 230, margin: 10 }}
                  />
                  <h3 style={{ margin: 10 }}>{product.name}</h3>
                  <p style={{ margin: 10 }}>&euro; {product.price}</p>
                  <p style={{ margin: 10 }}>{product.image}</p>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default Featured;
