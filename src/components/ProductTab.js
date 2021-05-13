import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import CartIcon from "@material-ui/icons/ShoppingCartOutlined"
import HeartIcon from "@material-ui/icons/FavoriteBorder"

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.mont,
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "left",
    cursor: "pointer",
    // border: "1px solid green",
    "&:hover $buttonsContainer": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
      // transform: "scale(1,1)",
    },
  },
  imageContainer: {
    height: "50%",
    // border: "1px solid red",
  },
  img: {
    maxHeight: "100%",
    maxWidth: "100%",
    // padding: ".5rem",
    objectFit: "contain",
    // border: "1px solid red",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  title: {
    fontSize: "1rem",
    // fontWeight: "bold",
    padding: ".5rem",
    color: theme.palette.text.primary,
    // border: "1px solid red",
  },
  // description: {
  //   ...theme.typography.mont,
  //   fontSize: ".9rem",
  //   padding: ".5rem",
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  //   // border: "1px solid red",
  // },
  price: {
    padding: "1rem 0",
    fontSize: "1.6rem",
    color: theme.palette.text.secondary,
    // fontWeight: "bold",
    // border: "1px solid red",
  },
  buttonsContainer: {
    display: "flex",
    width: "80%",
    margin: "1rem auto 0 0",
    cursor: "pointer",
    color: theme.palette.common.white,
    borderRadius: 4,
    transition: "all 0.4s ease-in-out",
    // transform: "scale(0,0)",
    // border: "1px solid red",
    [theme.breakpoints.down("md")]: {
      // transform: "scale(1,1)",
      backgroundColor: theme.palette.secondary.main,
    },
  },
  cartBtn: {
    flex: 4,
    padding: ".6rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...theme.typography.mont,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: ".85rem",
    fontWeight: 400,
    borderRadius: 4,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
      color: "white",
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

  wishlistBtn: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
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
        transition: "transform .8s ease-in-out",
      }}
    >
      <div className={classes.imageContainer}>
        <img src={img} alt="product" className={classes.img} />
      </div>
      <div className={classes.title}>{title}</div>
      {/* <div className={classes.description}>{description}</div> */}
      <div className={classes.price}>&euro;{price}</div>
      <div className={classes.buttonsContainer}>
        <div className={classes.cartBtn}>
          <CartIcon className={classes.cartIcon} />
          <div>
            <span className={classes.hide}>Add to cart</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTab
