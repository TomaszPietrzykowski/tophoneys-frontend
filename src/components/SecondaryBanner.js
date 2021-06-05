import React from "react"
import { makeStyles } from "@material-ui/styles"
import image from "../assets/Frame 63.jpeg"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    padding: "4rem 10rem",
    minHeight: 0,
    [theme.breakpoints.down("md")]: {
      padding: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
  },
  banner: {
    width: "100%",
    // height: "auto",
    objectFit: "contain",
  },
}))

const SecondaryBanner = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <img src={image} alt="Great idea for a gift" className={classes.banner} />
    </div>
  )
}

export default SecondaryBanner
