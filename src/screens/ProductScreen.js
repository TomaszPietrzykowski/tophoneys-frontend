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

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "3rem",
    marginTop: "10rem",
    ...theme.utils.container,
    ...theme.typography.mont,
  },
  backBtn: {
    textTransform: "uppercase",
    padding: ".6rem 2rem .6rem 1.5rem",
    color: theme.palette.text.secondary,
    border: "1px solid rgba(0,0,0,.2)",
    background: "white",
    borderRadius: 4,
    margin: "1rem 2rem",
    cursor: "pointer",
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
  },
  description: {
    color: theme.palette.text.secondary,
  },
  listItem: {
    padding: "0 3rem",
    color: theme.palette.text.secondary,
  },
  detail: {
    color: theme.palette.text.secondary,
    fontSize: "1rem",
    margin: ".8rem 0",
  },
  descriptionContainer: {
    marginTop: "6rem",
    padding: "1.8rem",
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
    textAlign: "right",
    textTransform: "uppercase",
  },
  input: {
    padding: ".3rem",
    border: "none",
    color: "inherit",
  },
  addToCartButton: {
    ...theme.typography.prosto,
    textTransform: "uppercase",
    width: "100%",
    background: "black",
    color: "white",
    padding: ".6rem",
    margin: "2rem 0",
    cursor: "pointer",
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
                      <h2 className={classes.price}>
                        &euro; {Number(product.price).toFixed(2)}
                      </h2>
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
                      <button
                        className={classes.addToCartButton}
                        disabled={product.countInStock === 0}
                        onClick={addToCartHandler}
                      >
                        Add to cart
                      </button>
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
              </>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default ProductScreen
