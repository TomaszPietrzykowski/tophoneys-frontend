import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    width: "100%",
    height: "11rem",
    [theme.breakpoints.down("md")]: {
      height: 130,
    },
    [theme.breakpoints.down("sm")]: {
      height: 90,
    },
  },
}))

const NavbarMargin = () => {
  const classes = useStyles()
  return <div className={classes.root} />
}

export default NavbarMargin
