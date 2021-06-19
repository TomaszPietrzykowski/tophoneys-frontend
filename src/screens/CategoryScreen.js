import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// mui
import { makeStyles } from "@material-ui/styles"
import Button from "@material-ui/core/Button"
// custom
import { getProductsByCategory } from "../actions/productActions"
import Loader from "../components/ui/Loader"
import Message from "../components/Message"
import Paginate from "../components/Paginate"
import ProductCard from "../components/ProductCard"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.col,
    justifyContent: "flex-start",
    padding: "2rem 0 0",
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  messageContainer: {
    width: "100%",
    maxWidth: 1400,
    margin: "auto",
    padding: "0 3rem",
    ...theme.flex.col,
    marginBottom: "12rem",
    opacity: 0.8,
    [theme.breakpoints.down("md")]: {
      padding: ".8rem",
    },
  },
  flex: {
    width: "100%",
    paddingTop: "2rem",
    // ...theme.flex.row,
    // alignItems: "stretch",
    // justifyContent: "center",
    // flexWrap: "wrap",
    // overflow: "wrap",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      paddingTop: "1rem",
    },
  },
}))

const CategoryScreen = ({ match, history }) => {
  const classes = useStyles()
  // const isTablet = useMediaQuery("(max-width: 990px)")
  // const isMobile = useMediaQuery("(max-width: 600px)")
  // const slides = isMobile ? 2 : isTablet ? 3 : 4
  const { loading, error, products, page, pages } = useSelector(
    (state) => state.productCategory
  )
  const dispatch = useDispatch()
  const id = match.params.id
  const pageNumber = match.params.pageNumber || 1
  useEffect(() => {
    dispatch(getProductsByCategory(id, pageNumber))
  }, [id, pageNumber, dispatch])

  return (
    <>
      <main className={classes.container}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="error" message={error} />
        ) : products.length === 0 ? (
          <div className={classes.messageContainer}>
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
            <div style={{ height: "12rem" }} />
          </div>
        ) : (
          <>
            <div className={classes.flex}>
              {products.map((product) => {
                return <ProductCard key={product._id} product={product} />
              })}
            </div>
            <Paginate id={id} page={page} pages={pages} url="category" />
          </>
        )}
      </main>
    </>
  )
}

export default CategoryScreen
