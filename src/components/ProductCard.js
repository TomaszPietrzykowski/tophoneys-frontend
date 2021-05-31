import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import CartIcon from "@material-ui/icons/ShoppingCartOutlined"
import getCategoryLabel from "./GetCategoryLabel"
import SaleIcon from "@material-ui/icons/Loyalty"
import { addToCart } from "../actions/cartActions"

// snackbars:
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { Button } from "@material-ui/core"

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.mont,
    display: "flex",
    // width: "320px",
    maxWidth: "320px",
    // border: "2px solid pink",
    alignItems: "stretch",
    padding: "2rem 2rem",
  },
  card: {
    // border: "2px solid green",
    minHeight: "100%",
    display: "flex",
    alignItems: "left",
    cursor: "pointer",
    borderLeftWidth: "1px",
    borderLeftStyle: "solid",
    borderImage: `linear-gradient(transparent, 30%, ${theme.palette.secondary.main}, 55%, transparent) 1 100%`,
    flexDirection: "column",
    justifyContent: "stretch",
    position: "relative",
  },
  saleBadge: {
    position: "absolute",
    ...theme.flex.col,
    top: "-1.2rem",
    right: 5,
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    // textTransform: "uppercase",
    padding: ".45rem .4rem .3rem .5rem",
    fontSize: ".7rem",
    fontWeight: 500,
    letterSpacing: 1,
    borderRadius: "50%",
  },
  imageContainer: {
    ...theme.flex.col,
    justifyContent: "flex-end",
    height: 320,
    // border: "1px solid orange",
  },
  img: {
    display: "block",
    maxWidth: "100%",
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
    // border: "1px solid red",
  },
  content: {
    display: "flex",
    minHeight: 180,
    // border: "1px solid blue",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "1rem 1rem 0 1rem",
    position: "relative",
  },
  category: {
    fontSize: ".85rem",
    color: theme.palette.text.disabled,
    marginBottom: ".5rem",
    textTransform: "uppercase",
    fontWeight: 500,
    letterSpacing: 0.5,
    // border: "1px solid blue",
  },
  title: {
    fontSize: "1rem",
    color: theme.palette.text.primary,
    // border: "1px solid blue",
  },
  capacity: {
    fontSize: ".8rem",
    margin: ".5rem 0",
    color: theme.palette.text.disabled,
    // border: "1px solid blue",
  },
  price: {
    display: "flex",
    alignItems: "flex-start",
    margin: "auto 0 0.8rem 0",
    fontSize: "1.9rem",
    color: theme.palette.text.secondary,
    // border: "1px solid blue",
    letterSpacing: 1,
    fontWeight: 300,
    flexWrap: "no-wrap",
    overflow: "hidden",
  },
  previousPrice: {
    marginLeft: ".5rem",
    padding: "0.3rem",
    fontSize: "1.1rem",
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
  buttonsContainer: {
    display: "flex",
    margin: "0auto 0 0",
    cursor: "pointer",
    color: theme.palette.common.white,
    padding: "0 0 1rem 1rem",
  },
  cartBtn: {
    border: "none",
    cursor: "pointer",

    padding: ".55rem 1.4rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...theme.typography.mont,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: ".8rem",
    fontWeight: 400,
    borderRadius: 4,
    backgroundColor: theme.palette.secondary.light,
    transition: "all .3s ease",
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: ".85rem",
      flex: 1,
      padding: ".3rem",
    },
  },
  cartIcon: {
    fontSize: "1.2rem",
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

const ProductCard = ({ product }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  // successful alert state
  const [open, setOpen] = useState(false)
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, 1))
    setOpen(true)
  }

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
      <div className={classes.root}>
        <div className={classes.card}>
          {/* {product.isPromo && (
            <div className={classes.saleBadge}>
              <SaleIcon />
            </div>
          )} */}
          <Link to={`/product/${product._id}`}>
            <div className={classes.imageContainer}>
              <img src={product.image} alt="product" className={classes.img} />
            </div>
          </Link>
          <div>
            <Link to={`/product/${product._id}`}>
              <div className={classes.content}>
                {product.isPromo && (
                  <div className={classes.saleBadge}>
                    <SaleIcon />
                  </div>
                )}
                <div className={classes.category}>
                  {getCategoryLabel(product.category[0])}
                </div>
                <div className={classes.title}>{product.name}</div>
                <div className={classes.capacity}>{product.capacity}</div>
                <div className={classes.price}>
                  <div>
                    <span style={{ opacity: 0.45 }}>&euro; </span>
                    {product.price.toFixed(2)}
                  </div>
                  {product.isPromo && product.previousPrice > 0 && (
                    <div className={classes.previousPrice}>
                      {product.previousPrice.toFixed(2)}
                    </div>
                  )}
                </div>
              </div>
            </Link>
            <div className={classes.buttonsContainer}>
              <button
                disabled={!product.countInStock > 0}
                className={classes.cartBtn}
                onClick={addToCartHandler}
              >
                <CartIcon className={classes.cartIcon} />
                <div>
                  <span className={classes.hide}>
                    {product.countInStock > 0 ? "Add to cart" : "Out of stock"}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard
