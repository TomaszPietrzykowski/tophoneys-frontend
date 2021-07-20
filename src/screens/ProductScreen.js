import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// mui
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { Button } from "@material-ui/core"
import CartIcon from "@material-ui/icons/ShoppingCartOutlined"
// custom
import { listProductDetails } from "../actions/productActions"
import { addToCart } from "../actions/cartActions"
import Loader from "../components/ui/Loader"
import Message from "../components/Message"
import Breadcrumbs from "../components/CustomBreadcrumbs"
import Counter from "../components/Counter"
import RelatedProducts from "../components/RelatedProducts"

// snackbars:
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "3rem",
    ...theme.utils.container,
    ...theme.typography.mont,
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem",
      marginBottom: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: ".5rem",
      marginBottom: "5rem",
    },
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
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  card: {
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      padding: ".5rem",
    },
  },
  card2: {
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      padding: ".5rem",
    },
  },
  filler: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
    },
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
      background: `linear-gradient(${theme.palette.common.background}, ${theme.palette.secondary.main}, ${theme.palette.common.background})`,
      opacity: 0.7,
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 .5rem 0 1rem",
    },
  },
  image: {
    width: "100%",
    objectFit: "contain",
    [theme.breakpoints.down("sm")]: {
      maxWidth: 420,
    },
  },
  name: {
    margin: "1.6rem 0",
    fontWeight: 400,
    fontSize: "1.8rem",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("xs")]: {
      margin: ".8rem 0",
      fontSize: "1.4rem",
    },
  },
  price: {
    margin: "1.6rem 0 0",
    fontWeight: 300,
    fontSize: "2.8rem",
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "flex-start",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.4rem",
    },
  },
  previousPrice: {
    marginLeft: "1rem",
    padding: "0.4rem",
    fontSize: "1.4rem",
    color: "red",
    opacity: 0.5,
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      paddingTop: ".3rem",
    },
  },

  listItem: {
    padding: "0 3rem",
    color: theme.palette.text.secondary,
  },
  capacitySelect: {
    marginLeft: ".3rem",
    padding: ".2rem .5rem",
    ...theme.typography.mont,
    fontSize: "1rem",
    color: theme.palette.text.secondary,
    borderColor: "rgba(0,0,0,.12)",
    borderRadius: 4,
    outline: "none",
    "&:focus": {
      borderColor: theme.palette.secondary.main,
    },
    "&:active": {
      borderColor: theme.palette.secondary.main,
    },
  },
  detail: {
    color: theme.palette.text.secondary,
    fontSize: "1rem",
    margin: "1rem 0",
    [theme.breakpoints.down("xs")]: {
      fontWeight: 300,
    },
  },
  vat: {
    color: theme.palette.text.disabled,
    fontSize: ".85rem",
    fontStyle: "italic",
    margin: ".5rem 0 2rem",
    [theme.breakpoints.down("xs")]: {
      fontWeight: 300,
    },
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
      background: `linear-gradient(90deg, ${theme.palette.common.background}, ${theme.palette.secondary.main}, ${theme.palette.common.background})`,
      opacity: 0.7,
      [theme.breakpoints.down("sm")]: {
        height: 1,
      },
    },
    [theme.breakpoints.down("xs")]: {
      margin: "4rem 0",
      padding: ".5rem",
      fontSize: ".9rem",
    },
  },
  descriptionHeader: {
    color: theme.palette.primary.main,
    textAlign: "left",
    textTransform: "uppercase",
  },
  description: {
    maxWidth: 700,
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
    letterSpacing: 0.5,
    marginBottom: "1rem",
  },
  buttonsContainer: {
    display: "flex",
    margin: "1.6rem auto 0 0",
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
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
      padding: ".6rem 1.6",
    },
  },
  cartIcon: {
    fontSize: "1.4rem",
    marginRight: ".5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
      margin: "0 .3rem 0 0",
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
  // successful alert state
  const [open, setOpen] = useState(false)

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  )

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [match, dispatch])

  const addToCartHandler = () => {
    dispatch(addToCart(match.params.id, qty))
    setOpen(true)
  }
  const handleCapacitySelect = (e) => {
    history.push(`/product/${e.target.value}`)
  }

  const disabledButtonInline =
    product.countInStock === 0
      ? { color: "white", background: "rgba(0,0,0,.25", cursor: "default" }
      : { color: "white" }

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert
          onClose={handleAlertClose}
          severity="success"
          action={
            <Button
              style={{ marginLeft: "1rem", marginRight: "1rem" }}
              color="inherit"
              size="small"
              onClick={() => history.push("/cart")}
            >
              Go to cart
            </Button>
          }
        >
          Product added to cart.
        </Alert>
      </Snackbar>
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
                    className={classes.card2}
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
                      <div className={classes.vat}>incl. VAT</div>
                      {product.capacityDropdown &&
                      product.capacityDropdown.length > 0 ? (
                        <p className={classes.detail}>
                          Contents:{" "}
                          {
                            <select
                              className={classes.capacitySelect}
                              label={product.capacity}
                              onChange={handleCapacitySelect}
                            >
                              <option
                                className={classes.capacityOption}
                                value={product._id}
                              >
                                {product.capacity}
                              </option>
                              {product.capacityDropdown.map((obj) => (
                                <option
                                  className={classes.capacityOption}
                                  key={obj.productId}
                                  value={obj.productId}
                                >
                                  {obj.label}
                                </option>
                              ))}
                            </select>
                          }
                        </p>
                      ) : (
                        <p className={classes.detail}>
                          Contents: {product.capacity}
                        </p>
                      )}
                      {product.countryOfOrigin && (
                        <p className={classes.detail}>
                          Country:{" "}
                          <span style={{ marginLeft: ".3rem" }}>
                            {product.countryOfOrigin}
                          </span>
                        </p>
                      )}
                      {product.brand && (
                        <p className={classes.detail}>
                          Brand:{" "}
                          <span style={{ marginLeft: ".3rem" }}>
                            {product.brand}
                          </span>
                        </p>
                      )}
                      <p className={classes.detail}>
                        Status:{" "}
                        {product.countInStock > 0 ? (
                          <span style={{ color: "green", marginLeft: ".3rem" }}>
                            {"In Stock"}
                          </span>
                        ) : (
                          <span style={{ color: "red", marginLeft: ".3rem" }}>
                            {"Out of Stock"}
                          </span>
                        )}
                      </p>
                      {product.countInStock > 0 && (
                        <>
                          <p className={classes.detail}>Quantity: </p>
                          <div className={classes.detail}>
                            <Counter
                              count={qty}
                              max={product.countInStock}
                              setCount={setQty}
                            />
                          </div>
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
                  <Grid item xs={12} md={4} lg={4} className={classes.card2}>
                    <div className={classes.filler}>
                      <p className={classes.descriptionHeader}>
                        {product.name}
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={8} lg={8} className={classes.card2}>
                    <div className={classes.filler}>
                      {product.description &&
                        product.description
                          .split("\n")
                          .map((string) => (
                            <p className={classes.description}>{string}</p>
                          ))}
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
