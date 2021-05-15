import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/styles"
// import { useMediaQuery } from "@material-ui/core"
import { getProductsByCategory } from "../actions/productActions"
import Loader from "../components/Loader"
import Message from "../components/Message"
import Paginate from "../components/Paginate"
import NavbarMargin from "../components/ui/NavbarMargin"
import ProductCard from "../components/ProductCard"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.col,
    justifyContent: "flex-start",
    padding: "6rem 3rem 12rem",
    // padding querry to do
    // [theme.breakpoints.down("md")]: {
    //   padding: ?,
    // },
    // [theme.breakpoints.down("sm")]: {
    //   padding: ?,
    // },
  },
  flex: {
    ...theme.flex.row,
    alignItems: "stretch",
    flexWrap: "wrap",
    overflow: "wrap",
  },
}))

const CategoryScreen = ({ match }) => {
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
      <NavbarMargin />
      <main className={classes.container}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="error" message={error} />
        ) : products.length === 0 ? (
          <Message
            variant="info"
            message={"There are currently no products in this category"}
          />
        ) : (
          <>
            <div className={classes.flex}>
              {products.map((product) => {
                return <ProductCard product={product} />
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
