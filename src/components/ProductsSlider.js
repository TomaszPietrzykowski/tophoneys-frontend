import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import { useMediaQuery } from "@material-ui/core"
import Loader from "../components/Loader"
import CustomSlider from "./CustomSlider"
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1300,
    margin: "12rem auto",
    padding: "0px 15px",
    [theme.breakpoints.down("md")]: {
      padding: "0px",
    },
  },
  sliderHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3rem",
  },
  headerText: {
    ...theme.typography.merienda,
    padding: "15px",
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

const ProductsSlider = ({ title, endpoint, timeout }) => {
  const classes = useStyles()
  const isTablet = useMediaQuery("(max-width: 990px)")
  const isMobile = useMediaQuery("(max-width: 600px)")
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(
        `/api/products/category/${endpoint}?pageNumber=1`
      )
      setProducts(data.products)
      setLoading(false)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line
  }, [])

  const slides = isMobile ? 2 : isTablet ? 3 : 5
  const to = timeout
  return (
    <div className={classes.container}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={classes.sliderHeader}>
            <div className={classes.headerText}>{title}</div>
          </div>
          <div className={classes.productsSlider}>
            <CustomSlider
              timeout={to}
              slidesAtOnce={slides}
              products={products}
            />
          </div>
        </>
      )}
    </div>
  )
}

export default ProductsSlider
