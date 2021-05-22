import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/styles"
import { useMediaQuery } from "@material-ui/core"
import { getProductsByCategory } from "../actions/productActions"
import Loader from "../components/Loader"
import Message from "../components/Message"
import ProductTab from "./ProductTab"

const useStyles = makeStyles((theme) => ({
  flex: {
    // border: "1px solid magenta",
    margin: "7rem auto",
    ...theme.flex.row,
    justifyContent: "space-around",
    alignItems: "stretch",
    width: "90%",
    minHeight: "100%",
    flexWrap: "wrap",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      margin: "4rem 0px 20px 0px",
    },
    "& > * > *": {
      margin: "0 1rem",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}))

const Featured = ({ match }) => {
  const classes = useStyles()
  const isTablet = useMediaQuery("(max-width: 990px)")
  const isMobile = useMediaQuery("(max-width: 600px)")
  const slides = isMobile ? 2 : isTablet ? 3 : 4
  const { loading, error, products } = useSelector(
    (state) => state.productCategory
  )
  const dispatch = useDispatch()
  const id = "honeys"

  useEffect(() => {
    dispatch(getProductsByCategory(id))
  }, [id, dispatch])

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
                />
              )
            })}
        </div>
      )}
    </>
  )
}

export default Featured
