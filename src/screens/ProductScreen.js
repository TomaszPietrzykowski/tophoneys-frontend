import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import { useDispatch, useSelector } from "react-redux"
import { listProductDetails } from "../actions/productActions"
// import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid"
import Loader from "../components/Loader"
import Message from "../components/Message"
import Breadcrumbs from "../components/CustomBreadcrumbs"
import Counter from "../components/Counter"
import CartIcon from "@material-ui/icons/ShoppingCartOutlined"
import RelatedProducts from "../components/RelatedProducts"

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "3rem",
    ...theme.utils.container,
    ...theme.typography.mont,
  },
  backBtn: {
    textTransform: "uppercase",
    letterSpacing: 1,
    padding: ".6rem 2rem .6rem 1.5rem",
    color: theme.palette.text.secondary,
    border: "1px solid rgba(0,0,0,.2)",
    background: "white",
    borderRadius: 4,
    margin: "1rem 2rem",
    cursor: "pointer",
    transition: "all .3s ease",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
    },
  },
  card: {
    padding: "2rem",
  },
  filler1: {
    width: "100%",
    fontSize: "1.2rem",
  },
  filler2: {
    width: "100%",
    fontSize: "1.2rem",
    padding: "1rem 3rem",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: 1,
      background: `linear-gradient(transparent, ${theme.palette.secondary.main}, transparent )`,
      opacity: 0.7,
    },
  },
  image: {
    width: "100%",
    objectFit: "contain",
  },
  name: {
    margin: "1.6rem 0",
    fontWeight: 400,
    fontSize: "1.8rem",
    color: theme.palette.text.primary,
  },
  price: {
    margin: "1.6rem 0",
    fontWeight: 300,
    fontSize: "2.4rem",
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "flex-start",
  },
  previousPrice: {
    marginLeft: "1rem",
    padding: "0.4rem",
    fontSize: "1.4rem",
    color: "red",
    opacity: 0.5,
    // textDecoration: "line-through",
    // border: "1px solid blue",
    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      top: "50%",
      left: 0,
      width: "100%",
      height: 1,
      backgroundColor: "red",
      transform: "rotate(-10deg)",
    },
  },
  description: {
    maxWidth: 700,
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    letterSpacing: 0.5,
  },
  listItem: {
    padding: "0 3rem",
    color: theme.palette.text.secondary,
  },
  detail: {
    color: theme.palette.text.secondary,
    fontSize: "1rem",
    margin: "1rem 0",
  },
  descriptionContainer: {
    margin: "2rem 0 4rem",
    padding: "1.8rem",
    paddingLeft: 0,
    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: 2,
      background: `linear-gradient(90deg, transparent, ${theme.palette.secondary.main}, transparent )`,
      opacity: 0.7,
    },
  },
  descriptionHeader: {
    color: theme.palette.primary.main,
    textAlign: "left",
    textTransform: "uppercase",
  },
  buttonsContainer: {
    display: "flex",
    margin: "1.6rem auto 0 0",

    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  cartBtn: {
    border: "none",
    padding: ".8rem 2.5rem",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...theme.typography.mont,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: "1rem",
    fontWeight: 500,
    borderRadius: 4,
    backgroundColor: theme.palette.secondary.main,
    transition: "all .3s ease",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: ".85rem",
      flex: 1,
      padding: ".3rem",
    },
  },
  cartIcon: {
    fontSize: "1.4rem",
    marginRight: ".5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
      margin: 0,
    },
  },
  hide: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}))

const ProductScreen = ({ match, history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  )

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [match, dispatch])

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`)
  }
  const disabledButtonInline =
    product.countInStock === 0
      ? { color: "white", background: "rgba(0,0,0,.25", cursor: "default" }
      : { color: "white" }
  return (
    <>
      <div className={classes.container}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="error" message={error} />
        ) : (
          <>
            <button
              className={classes.backBtn}
              onClick={() => history.goBack()}
            >
              &larr; Back
            </button>
            {product && (
              <>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    mmd={12}
                    md={6}
                    lg={6}
                    className={classes.card}
                  >
                    <div className={classes.filler1}>
                      <img
                        src={product.image}
                        className={classes.image}
                        alt={product.name}
                      />
                    </div>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    s={12}
                    md={6}
                    lg={6}
                    className={classes.card}
                  >
                    <div className={classes.filler2}>
                      {product && <Breadcrumbs category={product.category} />}
                      <h1 className={classes.name}>{product.name}</h1>
                      <div className={classes.price}>
                        <div>&euro; {Number(product.price).toFixed(2)}</div>
                        {product.isPromo && product.previousPrice > 0 && (
                          <div className={classes.previousPrice}>
                            {product.previousPrice.toFixed(2)}
                          </div>
                        )}
                      </div>
                      {product.countryOfOrigin && (
                        <p className={classes.detail}>
                          Country: {product.countryOfOrigin}
                        </p>
                      )}
                      <p className={classes.detail}>
                        Status:{" "}
                        {product.countInStock > 0 ? (
                          <span style={{ color: "green" }}>{"In Stock"}</span>
                        ) : (
                          <span style={{ color: "red" }}>{"Out of Stock"}</span>
                        )}
                      </p>

                      {/* {product.brand && (
                        <p className={classes.inStock}>
                          Brand: {product.brand}
                        </p>
                      )} */}
                      {product.countInStock > 0 && (
                        <>
                          <p className={classes.detail}>Quantity: </p>
                          <p className={classes.detail}>
                            <Counter
                              count={qty}
                              max={product.countInStock}
                              setCount={setQty}
                            />
                            {/* <input
                              className={classes.input}
                              type="number"
                              value={qty}
                              min={1}
                              max={product.countInStock}
                              onChange={(e) => setQty(Number(e.target.value))}
                            /> */}
                          </p>
                        </>
                      )}

                      <div className={classes.buttonsContainer}>
                        <button
                          className={classes.cartBtn}
                          disabled={product.countInStock === 0}
                          onClick={addToCartHandler}
                          style={disabledButtonInline}
                        >
                          <CartIcon className={classes.cartIcon} />
                          <div>Add to cart</div>
                        </button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid container className={classes.descriptionContainer}>
                  <Grid item xs={12} md={4} lg={4} className={classes.card}>
                    <div className={classes.filler}>
                      <p className={classes.descriptionHeader}>
                        {product.name}
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={8} lg={8} className={classes.card}>
                    <div className={classes.filler}>
                      <p className={classes.description}>
                        {product.description}
                      </p>
                    </div>
                  </Grid>
                </Grid>
                {product && product.category && (
                  <RelatedProducts category={product.category} />
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default ProductScreen
