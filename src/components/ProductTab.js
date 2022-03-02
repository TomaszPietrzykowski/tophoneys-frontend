import React, { useState } from "react";
import { makeStyles /*, useTheme */ } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import CartIcon from "@material-ui/icons/ShoppingCartOutlined";
import SaleIcon from "@material-ui/icons/Loyalty";
import getCategoryLabel from "./GetCategoryLabel";
import { addToCart } from "../actions/cartActions";
import { useHistory } from "react-router-dom";

// snackbars:
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Button } from "@material-ui/core";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.mont,
    display: "flex",
  },

  card: {
    margin: "0 1rem",
    display: "grid",
    gridTemplateRows: "3fr 2fr",
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
    [theme.breakpoints.down("sm")]: {
      margin: "0 .5rem",
    },
    [`@media (max-width: 470px)`]: {
      gridTemplateRows: "4fr 3fr",
    },
    [`@media (max-width: 410px)`]: {
      gridTemplateRows: "1fr 1fr",
    },
  },
  imageContainer: {
    height: "100%",
    ...theme.flex.colStart,
    justifyContent: "flex-end",
  },
  img: {
    display: "block",
    maxWidth: "100%",
    objectFit: "contain",
  },
  bottom: {
    height: "100%",
    position: "relative",
    display: "flex",
    ...theme.flex.colStart,
    justifyContent: "space-between",
  },
  saleBadge: {
    position: "absolute",
    ...theme.flex.col,
    top: "-1.2rem",
    right: 5,
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    padding: ".45rem .4rem .3rem .5rem",
    fontSize: ".7rem",
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

  content: {
    ...theme.flex.colStart,
    padding: "1.4rem 0 0 1.4rem",
    [theme.breakpoints.down("sm")]: {
      padding: ".5rem 0 0 .5rem",
    },
  },
  category: {
    fontSize: ".8rem",
    color: theme.palette.text.disabled,
    marginBottom: ".4rem",
    textTransform: "uppercase",
    fontWeight: 500,
    letterSpacing: 0.5,
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7rem",
      letterSpacing: 0.2,
    },
  },
  title: {
    fontSize: "1rem",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
      fontSize: ".85rem",
      letterSpacing: 0.4,
    },
  },
  capacity: {
    fontSize: ".8rem",
    margin: ".5rem 0",
    color: theme.palette.text.primary,
    [theme.breakpoints.down("sm")]: {
      fontSize: ".75rem",
    },
  },
  price: {
    display: "flex",
    alignItems: "flex-start",
    marginTop: "auto",
    marginBottom: ".8rem",
    fontSize: "1.8rem",
    fontWeight: 300,
    color: theme.palette.text.primary,
    letterSpacing: 1,
    flexWrap: "no-wrap",
    overflow: "hidden",
    paddingLeft: "1.4rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      letterSpacing: 0.5,
      paddingLeft: ".5rem",
    },
  },

  previousPrice: {
    marginLeft: ".5rem",
    padding: "0.3rem",
    fontSize: "1rem",
    color: "red",
    opacity: 0.5,
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
      letterSpacing: 0.4,
      padding: "0 0.3rem",
    },
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
    paddingLeft: "1.4rem",
    display: "flex",
    marginTop: "auto",
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: ".5rem",
    },
  },
  cartBtn: {
    border: "none",
    cursor: "pointer",
    padding: ".55rem .8rem",
    display: "flex",
    justifyContent: "center",
    color: "white",
    alignItems: "center",
    ...theme.typography.mont,
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: ".8rem",
    fontWeight: 400,
    borderRadius: 4,
    backgroundColor: theme.palette.secondary.light,
    transition: "all .3s ease",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".7rem",
      flex: 1,
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
}));

const ProductTab = ({
  title,
  img,
  capacity,
  category,
  id,
  price,
  previousPrice,
  slidesAtOnce,
  activeIndex,
  isFeatured,
  isSale,
  countInStock,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // successful alert state
  const [open, setOpen] = useState(false);

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const addToCartHandler = () => {
    dispatch(addToCart(id, 1));
    setOpen(true);
  };

  const slideWidth = 100 / slidesAtOnce;

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
      <div
        className={classes.root}
        style={
          isFeatured
            ? { maxWidth: `100%`, minWidth: `100%` }
            : {
                maxWidth: `${slideWidth}%`,
                minWidth: `${slideWidth}%`,
                transform: `translate3d(-${activeIndex * 100}%, 0, 0)`,
                transition: "transform .8s ease-in-out",
              }
        }
      >
        <div className={classes.card}>
          <div className={classes.imageContainer}>
            <Link to={`/product/${id}`}>
              <img src={img} alt="product" className={classes.img} />
            </Link>
          </div>
          <div className={classes.bottom}>
            {isSale && (
              <div className={classes.saleBadge}>
                <SaleIcon className={classes.saleIcon} />
              </div>
            )}
            <Link to={`/product/${id}`}>
              <div className={classes.content}>
                {category && (
                  <div className={classes.category}>
                    {getCategoryLabel(category[0])}
                  </div>
                )}

                <div className={classes.title}>{title}</div>
                <div className={classes.capacity}>{capacity}</div>
              </div>
            </Link>
            <div>
              <Link to={`/product/${id}`}>
                <div className={classes.price}>
                  <div style={{ whiteSpace: "nowrap" }}>
                    <span style={{ opacity: 0.5 }}>&euro;&nbsp;</span>
                    {Number(price).toFixed(2)}
                  </div>
                  {isSale && previousPrice > 0 && (
                    <div className={classes.previousPrice}>
                      {Number(previousPrice).toFixed(2)}
                    </div>
                  )}
                </div>
              </Link>

              <div className={classes.buttonsContainer}>
                <button
                  disabled={!countInStock > 0}
                  className={classes.cartBtn}
                  onClick={addToCartHandler}
                >
                  {countInStock > 0 && (
                    <CartIcon className={classes.cartIcon} />
                  )}
                  <div>
                    {countInStock > 0 ? (
                      <span className="notranslate">Add to cart</span>
                    ) : (
                      <span className="notranslate">Out of stock</span>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTab;
