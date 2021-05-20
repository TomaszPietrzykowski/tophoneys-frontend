import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { getProductsByCategory } from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCard from "../components/ProductCard";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.col,
    justifyContent: "flex-start",
    padding: "2rem 3rem 0",
    // padding querry to do
    // [theme.breakpoints.down("md")]: {
    //   padding: ?,
    // },
    // [theme.breakpoints.down("sm")]: {
    //   padding: ?,
    // },
  },
  flex: {
    paddingTop: "2rem",
    ...theme.flex.row,
    alignItems: "stretch",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    overflow: "wrap",
  },
}));

const CategoryScreen = ({ match, history }) => {
  const classes = useStyles();
  // const isTablet = useMediaQuery("(max-width: 990px)")
  // const isMobile = useMediaQuery("(max-width: 600px)")
  // const slides = isMobile ? 2 : isTablet ? 3 : 4
  const { loading, error, products, page, pages } = useSelector(
    (state) => state.productCategory
  );
  const dispatch = useDispatch();
  const id = match.params.id;
  const pageNumber = match.params.pageNumber || 1;
  useEffect(() => {
    dispatch(getProductsByCategory(id, pageNumber));
  }, [id, pageNumber, dispatch]);

  return (
    <>
      <main className={classes.container}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="error" message={error} />
        ) : products.length === 0 ? (
          <Message
            variant="info"
            message={"There are currently no products in this category"}
            action={
              <Button
                color="inherit"
                size="small"
                onClick={() => history.goBack()}
              >
                Back
              </Button>
            }
          />
        ) : (
          <>
            <div className={classes.flex}>
              {products.map((product) => {
                return <ProductCard product={product} />;
              })}
            </div>
            <Paginate id={id} page={page} pages={pages} url="category" />
          </>
        )}
      </main>
    </>
  );
};

export default CategoryScreen;
