import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// mui
import { makeStyles } from "@material-ui/styles"
// custom
import { getProductsByKeyword } from "../actions/productActions"
import Loader from "../components/ui/Loader"
import Message from "../components/Message"
import Paginate from "../components/Paginate"
import ProductCard from "../components/ProductCard"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.col,
    justifyContent: "flex-start",
    padding: "2rem 3rem 0",
    ...theme.typography.mont,
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
    paddingTop: "2rem",
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
  searchResults: {
    width: "100%",
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontWeight: 300,
    fontSize: ".8rem",
    letterSpacing: 0.5,
    [theme.breakpoints.down("sm")]: {
      padding: "1rem .5rem 0",
      letterSpacing: 0.4,
    },
  },
}))

const SearchScreen = ({ match }) => {
  const classes = useStyles()
  const { loading, error, products, page, pages } = useSelector(
    (state) => state.productSearch
  )
  const dispatch = useDispatch()
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1

  useEffect(() => {
    dispatch(getProductsByKeyword(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <main className={classes.container}>
        {loading ? (
          <Loader />
        ) : error ? (
          <div className={classes.messageContainer}>
            <Message variant="error" message={error} />
          </div>
        ) : products.length === 0 ? (
          <div className={classes.messageContainer}>
            <Message
              variant="info"
              message={`No products matching keyword:  "${keyword}"`}
            />
          </div>
        ) : (
          <>
            {products.length > 0 && (
              <div className={classes.searchResults}>
                Search results for keyword: "{keyword}"
              </div>
            )}
            <div className={classes.flex}>
              {products.map((product, i) => {
                return <ProductCard key={i} product={product} />
              })}
            </div>
            <Paginate id={keyword} page={page} pages={pages} url="search" />
          </>
        )}
      </main>
    </>
  )
}

export default SearchScreen
