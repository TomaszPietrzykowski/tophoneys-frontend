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
    margin: "10rem 0",
    ...theme.flex.row,
    justifyContent: "space-around",
    alignItems: "stretch",
    width: "100%",
    minHeight: "100%",
    flexWrap: "wrap",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      margin: "4rem 0px 20px 0px",
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
                  id={product._id}
                  slidesAtOnce={slides}
                  title={product.name}
                  price={product.price}
                  img={product.image}
                  capacity={product.capacity}
                  isFeatured={true}
                />
                // <div className={classes.productTab} key={product._id}>
                //   <Link to={`/product/${product._id}`} className={classes.link}>
                //     <img
                //       src={`${product.image}`}
                //       alt={product.name}
                //       style={{ width: 230, height: 230, margin: 10 }}
                //     />
                //     <h3 style={{ margin: 10 }}>{product.name}</h3>
                //     <p style={{ margin: 10 }}>
                //       &euro; {product.price.toFixed(2)}
                //     </p>
                //     <p style={{ margin: 10 }}>{product.image}</p>
                //   </Link>
                // </div>
              )
            })}
        </div>
      )}
    </>
  )
}

export default Featured
