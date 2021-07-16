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
    maxWidth: "320px",
    alignItems: "stretch",
    padding: "2rem 2rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "3rem",
      maxWidth: 290,
      padding: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "50%",
      padding: "0 .5rem",
      alignItems: "flex-end",
    },
  },
  card: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    cursor: "pointer",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: 1,
      background: `linear-gradient(${theme.palette.common.background}, 40%, ${theme.palette.secondary.main}, 60%, ${theme.palette.common.background})`,
    },
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
    [theme.breakpoints.down("sm")]: {
      padding: ".3rem",
      paddingLeft: ".4rem",
      top: "-1rem",
      right: 5,
    },
  },
  saleIcon: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  imageContainer: {
    ...theme.flex.col,
    justifyContent: "flex-end",
    height: "100%",
  },
  img: {
    display: "block",
    maxWidth: "100%",
    objectFit: "contain",
  },
  content: {
    height: "100%",
    display: "flex",
    minHeight: 180,
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "1rem 0 0 1rem",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      padding: ".5rem 0 0 .5rem",
      minHeight: 145,
    },
  },
  category: {
    fontSize: ".85rem",
    color: theme.palette.text.disabled,
    marginBottom: ".5rem",
    textTransform: "uppercase",
    fontWeight: 500,
    letterSpacing: 0.5,
    [theme.breakpoints.down("xs")]: {
      fontSize: ".75rem",
      letterSpacing: 0.4,
    },
  },
  title: {
    fontSize: "1rem",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("xs")]: {
      fontSize: ".85rem",
      letterSpacing: 0.4,
    },
  },
  capacity: {
    fontSize: ".8rem",
    margin: ".5rem 0",
    color: theme.palette.text.disabled,
    [theme.breakpoints.down("xs")]: {
      fontSize: ".75rem",
    },
  },
  price: {
    display: "flex",
    alignItems: "flex-start",
    margin: "auto 0 0.8rem 0",
    fontSize: "1.9rem",
    color: theme.palette.common.price,
    letterSpacing: 1,
    fontWeight: 300,
    flexWrap: "no-wrap",
    whiteSpace: "nowrap",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
      letterSpacing: 0.5,
    },
  },
  previousPrice: {
    marginLeft: ".5rem",
    padding: "0.3rem",
    fontSize: "1.1rem",
    color: "red",
    opacity: 0.5,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8rem",
      letterSpacing: 0.4,
      padding: "0 0.3rem",
    },
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
    margin: "0 auto 0 0",
    cursor: "pointer",
    color: theme.palette.common.white,
    padding: "0 0 1rem 1rem",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      paddingLeft: ".5rem",
      margin: "auto auto 0 0",
    },
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
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".85rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".7rem",
      padding: ".5rem .8rem",
      letterSpacing: 0.3,
    },
  },
  cartIcon: {
    fontSize: "1.2rem",
    marginRight: ".5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".85rem",
      margin: "0 .3rem 0 0",
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
                    <SaleIcon className={classes.saleIcon} />
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
                {product.countInStock > 0 && (
                  <CartIcon className={classes.cartIcon} />
                )}
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
