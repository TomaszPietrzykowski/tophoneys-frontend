import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import CartIcon from "@material-ui/icons/ShoppingCartOutlined"
import getCategoryLabel from "./GetCategoryLabel"

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.mont,
    display: "flex",
    width: "320px",
    maxWidth: "320px",
    // border: "2px solid pink",
    alignItems: "stretch",
    padding: "2rem 1.8rem",
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
    minHeight: 220,
    // border: "1px solid blue",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1rem",
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
    margin: "auto 0 0.8rem 0",
    fontSize: "1.9rem",
    color: theme.palette.text.secondary,
    // border: "1px solid blue",
    letterSpacing: 1,
    fontWeight: 300,
  },
  buttonsContainer: {
    // border: "1px solid blue",
    display: "flex",
    margin: "0auto 0 0",
    cursor: "pointer",
    color: theme.palette.common.white,
    [theme.breakpoints.down("md")]: {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  cartBtn: {
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

  //   const slideWidth = 100 / 4

  return (
    <div className={classes.root}>
      <Link to={`/product/${product._id}`}>
        <div className={classes.card}>
          <div className={classes.imageContainer}>
            <img src={product.image} alt="product" className={classes.img} />
          </div>
          <div className={classes.content}>
            <div className={classes.category}>
              {getCategoryLabel(product.category[0])}
            </div>
            <div className={classes.title}>{product.name}</div>
            <div className={classes.capacity}>{product.capacity}</div>
            <div className={classes.price}>
              <span style={{ opacity: 0.45 }}>&euro; </span>
              {product.price.toFixed(2)}
            </div>
            <div className={classes.buttonsContainer}>
              <div className={classes.cartBtn}>
                <CartIcon className={classes.cartIcon} />
                <div>
                  <span className={classes.hide}>Add to cart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
