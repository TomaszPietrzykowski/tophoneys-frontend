import React from "react"
import { makeStyles } from "@material-ui/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import bannerMobile from "../../assets/banner-mobile.jpeg"
import bannerDesktop from "../../assets/iPhone8-119.jpeg"

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0 3rem 3rem",
    minHeight: 420,
    width: "100%",
    height: "auto",
    borderRadius: 7,
  },
  containerMobile: {
    padding: "0px 15px",
    // margin: "30px 0px",
    width: "100%",
    height: "auto",
    borderRadius: 7,
    [theme.breakpoints.down("xs")]: {
      padding: "0px .5rem",
    },
  },
  banner: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
}))

const Showcase = () => {
  const isTablet = useMediaQuery("(max-width:860px)")
  const classes = useStyles()
  const isMobile = useMediaQuery("(max-width: 600px)")
  const banner = isMobile ? bannerMobile : bannerDesktop

  return (
    <div className={isTablet ? classes.containerMobile : classes.container}>
      <img src={banner} alt="I love TOP HONEYS" className={classes.banner} />
    </div>
  )
}

export default Showcase
