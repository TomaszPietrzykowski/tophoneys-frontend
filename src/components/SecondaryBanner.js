import React from "react"
import { makeStyles } from "@material-ui/styles"
import image from "../assets/Frame 63.jpeg"

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 1400,
    margin: "auto",
    marginTop: "05rem",
    marginBottom: "3rem",
  },
  banner: {
    width: "100%",
    height: "auto",
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
