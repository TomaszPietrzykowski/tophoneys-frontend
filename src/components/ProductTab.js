import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CartIcon from "@material-ui/icons/ShoppingCartOutlined"
import HeartIcon from "@material-ui/icons/FavoriteBorder"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    cursor: "pointer",
    // border: "1px solid green",
    "&:hover $buttonsContainer": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      transform: "scale(1,1)",
    },
  },
  imageContainer: {
    height: "40%",
    // border: "1px solid red",
  },
  img: {
    maxHeight: "100%",
    maxWidth: "100%",
    // padding: ".5rem",
    objectFit: "scale-down",
    // border: "1px solid red",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  title: {
    fontFamily: "Open Sans",
    fontSize: "1rem",
    fontWeight: "bold",
    padding: ".5rem",
    color: theme.palette.text.primary,
    // border: "1px solid red",
  },
  description: {
    fontFamily: "Bree Serif",
    fontSize: ".9rem",
    padding: ".5rem",
    textAlign: "center",
    color: theme.palette.text.secondary,
    // border: "1px solid red",
  },
  price: {
    padding: "1rem 0",
    fontFamily: "Open Sans",
    fontSize: "1rem",
    fontWeight: "bold",
    // border: "1px solid red",
  },
  buttonsContainer: {
    display: "flex",
    width: "90%",
    margin: "1rem auto",
    cursor: "pointer",
    color: theme.palette.common.white,
    transition: "all .15s",
    transform: "scale(0,0)",
    // border: "1px solid red",
    [theme.breakpoints.down("md")]: {
      transform: "scale(1,1)",
      backgroundColor: theme.palette.primary.main,
    },
  },
  cartBtn: {
    flex: 4,
    padding: ".6rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    fontFamily: "Bree Serif",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: ".85rem",
      flex: 1,
      padding: ".3rem",
    },
  },
  cartIcon: {
    fontSize: "1.6rem",
    marginRight: ".5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.2rem",
      margin: 0,
    },
  },

  wishlistBtn: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
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

const ProductTab = ({
  title,
  img,
  description,
  price,
  slidesAtOnce,
  activeIndex,
}) => {
  const classes = useStyles()

  const slideWidth = 100 / slidesAtOnce

  return (
    <div
      className={classes.root}
      style={{
        minWidth: `${slideWidth}%`,
        transform: `translate3d(-${activeIndex * 100}%, 0, 0)`,
        transition: "transform .5s",
      }}
    >
      <div className={classes.imageContainer}>
        <img src={img} alt="product" className={classes.img} />
      </div>
      <div className={classes.title}>{title}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{price}</div>
      <div className={classes.buttonsContainer}>
        <div className={classes.cartBtn}>
          <CartIcon className={classes.cartIcon} />
          <div>
            <span className={classes.hide}>Do koszyka</span>
          </div>
        </div>
        <div className={classes.wishlistBtn}>
          <HeartIcon className={classes.cartIcon} />
        </div>
      </div>
    </div>
  )
}

export default ProductTab
