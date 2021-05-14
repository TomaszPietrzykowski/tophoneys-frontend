import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import CartIcon from "@material-ui/icons/ShoppingCartOutlined"
// import HeartIcon from "@material-ui/icons/FavoriteBorder"

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.mont,
    display: "flex",
    // border: "2px solid pink",
  },
  card: {
    flexBasis: 1,
    flexGrow: 1,
    flexShrink: 0,
    // border: "2px solid green",
    minHeight: "100%",
    margin: "0 1rem",
    display: "flex",
    alignItems: "left",
    cursor: "pointer",
    borderLeftWidth: "1px",
    borderLeftStyle: "solid",
    borderImage: `linear-gradient(transparent, 30%, ${theme.palette.secondary.main}, 55%, transparent) 1 100%`,
    flexDirection: "column",
    justifyContent: "center",
  },
  imageContainer: {
    flexBasis: 1,
    flexGrow: 1,
    flexShrink: 1,
    // border: "1px solid orange",
  },
  img: {
    display: "block",
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain",
    flex: 1,
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  content: {
    // flex: 1,
    flexBasis: 1,
    flexGrow: 1,
    flexShrink: 1,
    // border: "1px solid blue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "1rem",
    padding: "1.4rem 1.4rem 0 1.4rem",
    color: theme.palette.text.secondary,
  },
  capacity: {
    fontSize: ".8rem",
    padding: ".5rem 1.4rem",
    color: theme.palette.text.disabled,
  },
  price: {
    padding: "1.4rem",
    fontSize: "1.6rem",
    color: theme.palette.text.disabled,
    letterSpacing: 2.5,
  },
  buttonsContainer: {
    marginLeft: "1.4rem",
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

  // wishlistBtn: {
  //   flex: 1,
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   "&:hover": {
  //     backgroundColor: theme.palette.secondary.dark,
  //   },
  //   [theme.breakpoints.down("md")]: {
  //     fontSize: "1.2rem",
  //     margin: 0,
  //   },
  // },
  hide: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}))

const ProductTab = ({
  title,
  img,
  capacity,
  id,
  price,
  slidesAtOnce,
  activeIndex,
  isFeatured,
}) => {
  const classes = useStyles()

  const slideWidth = 100 / slidesAtOnce

  return (
    <div
      className={classes.root}
      style={
        isFeatured
          ? {
              width: `${slideWidth}%`,
              minWidth: `${slideWidth}%`,
            }
          : {
              minWidth: `${slideWidth}%`,
              transform: `translate3d(-${activeIndex * 100}%, 0, 0)`,
              transition: "transform .8s ease-in-out",
            }
      }
    >
      <Link to={`/product/${id}`}>
        <div className={classes.card}>
          <div className={classes.imageContainer}>
            <img src={img} alt="product" className={classes.img} />
          </div>
          <div className={classes.content}>
            <div className={classes.title}>{title}</div>
            <div className={classes.capacity}>{capacity}</div>
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
        </div>
      </Link>
    </div>
  )
}

export default ProductTab
