import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
// import axios from "axios";
import { getProductsByCategory } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.col,
    marginTop: "20rem",
    padding: "1rem",
    [theme.breakpoints.down("md")]: {
      marginTop: 130,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 90,
    },
  },
}));

const CategoryScreen = ({ match }) => {
  const classes = useStyles();
  const [message, setMessage] = useState("testowa wiadomosc");
  const { loading, error, products } = useSelector(
    (state) => state.productCategory
  );
  const dispatch = useDispatch();
  const id = match.params.id;

  useEffect(() => {
    dispatch(getProductsByCategory(id));
  }, [id, dispatch]);

  return (
    <main className={classes.container}>
      Category screen:{" "}
      {message && (
        <Message
          // variant="error"
          message={message}
          onClose={() => setMessage("")}
        />
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div>
          {products.map((product) => {
            return <h3 key={product._id}>{product.name}</h3>;
          })}
        </div>
      )}
    </main>
  );
};

export default CategoryScreen;
