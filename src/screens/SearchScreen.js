import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/styles"
import { getProductsByKeyword } from "../actions/productActions"
import Loader from "../components/Loader"
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
  searchResults: {
    width: "100%",
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontWeight: 300,
    fontSize: ".8rem",
    letterSpacing: 0.5,
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
          <Message variant="error" message={error} />
        ) : products.length === 0 ? (
          <Message
            variant="info"
            message={`No products matching keyword:  "${keyword}"`}
          />
        ) : (
          <>
            {products.length > 0 && (
              <div className={classes.searchResults}>
                Search results for keyword: "{keyword}"
              </div>
            )}
            <div className={classes.flex}>
              {products.map((product) => {
                return <ProductCard product={product} />
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
