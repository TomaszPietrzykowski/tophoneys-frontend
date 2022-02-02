import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";
import axios from "axios";
import Loader from "./ui/Loader";
import Message from "../components/Message";
import ProductTab from "./ProductTab";

const useStyles = makeStyles((theme) => ({
  flex: {
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "1rem",
    width: "100%",

    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
      margin: "4rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      margin: "4rem 0",
    },
    "& > * > *": {
      margin: "0 1rem",
      [theme.breakpoints.down("sm")]: {
        margin: "0 .5rem",
      },
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const Featured = () => {
  const classes = useStyles();
  const isTablet = useMediaQuery("(max-width: 1250px)");
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const slides = isMobile ? 4 : isTablet ? 3 : 5;

  const getRandom = async (number) => {
    try {
      setLoading(true);
      const nr = number || 6;
      const { data } = await axios.get(`/api/products/featured?number=${nr}`);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      const err =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandom(6);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error" message={error} />
      ) : (
        <div className={classes.flex}>
          {products
            .filter((p, i) => i < slides)
            .map((product) => {
              return (
                <ProductTab
                  key={product._id}
                  id={product._id}
                  category={product.category}
                  slidesAtOnce={slides}
                  title={product.name}
                  price={product.price}
                  previousPrice={product.previousPrice}
                  img={product.image}
                  capacity={product.capacity}
                  isSale={product.isPromo}
                  isFeatured={true}
                  countInStock={product.countInStock}
                />
                // <ProductCard product={product} />
              );
            })}
        </div>
      )}
    </>
  );
};

export default Featured;
