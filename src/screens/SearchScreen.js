import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { makeStyles } from "@material-ui/styles"
import { getProductsByKeyword } from "../actions/productActions"
import Loader from "../components/Loader"
import Message from "../components/Message"
import Paginate from "../components/Paginate"

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
    <main className={classes.container}>
      Search screen:
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="error" message={error} />
      ) : products.length === 0 ? (
        <Message
          variant="info"
          message={"No products matching search query..."}
        />
      ) : (
        <>
          <div>
            <p>Search results for fraze: "{keyword}"</p>
            {products.map((product) => {
              return <h3 key={product._id}>{product.name}</h3>
            })}
          </div>
          <Paginate id={keyword} page={page} pages={pages} url="search" />
        </>
      )}
    </main>
  )
}

export default SearchScreen
