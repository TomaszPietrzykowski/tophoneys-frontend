import React from "react"
import { makeStyles } from "@material-ui/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import banner from "../../assets/iPhone8-119.jpeg"

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
    margin: "30px 0px",
    width: "100%",
    height: "auto",
    borderRadius: 7,
    [theme.breakpoints.down("md")]: {
      margin: "30px 0px 20px 0px",
    },
  },
  banner: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
}))

const Showcase = () => {
  const isMobile = useMediaQuery("(max-width:600px)")
  const classes = useStyles()

  return (
    <div className={isMobile ? classes.containerMobile : classes.container}>
      <img src={banner} alt="I love TOP HONEYS" className={classes.banner} />
    </div>
  )
}

export default Showcase
