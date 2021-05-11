import React from "react"
import { makeStyles } from "@material-ui/styles"
// import Slider from "@farbenmeer/react-spring-slider";
import { useMediaQuery } from "@material-ui/core"
import products1 from "../db/productsDB"
import products2 from "../db/productsDB2"
import CustomSlider from "./CustomSlider"

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1300,
    margin: "auto",
    padding: "0px 15px",
    marginTop: "4rem",
    [theme.breakpoints.down("md")]: {
      padding: "0px",
    },
  },
  sliderHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
  },
  headerText: {
    padding: "15px",
    fontFamily: "Bree Serif",
    fontSize: "1.5rem",
    textAlign: "center",
    position: "relative",
    "&:after": {
      content: '""',
      width: "70px",
      height: "2px",
      background: theme.palette.primary.main,
      position: "absolute",
      top: "50%",
      left: "-70px",
    },
    "&:before": {
      content: '""',
      width: "70px",
      height: "2px",
      background: theme.palette.primary.main,
      position: "absolute",
      top: "50%",
      right: "-70px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      "&:before, &:after": {
        height: "1px",
        width: "50px",
      },
      "&:before": { right: "-50px" },
      "&:after": { left: "-50px" },
    },
  },
}))

const ProductsSlider = ({ title, endpoint }) => {
  const classes = useStyles()
  const isTablet = useMediaQuery("(max-width: 990px)")
  const isMobile = useMediaQuery("(max-width: 600px)")
  const slides = isMobile ? 2 : isTablet ? 3 : 5
  const products = endpoint === "new" ? products1 : products2
  return (
    <div className={classes.container}>
      <div className={classes.sliderHeader}>
        <div className={classes.headerText}>{title}</div>
      </div>
      <div className={classes.productsSlider}>
        <CustomSlider
          timeout={6500}
          slidesAtOnce={slides}
          products={products}
        />
      </div>
    </div>
  )
}

export default ProductsSlider
