import React from "react"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    width: "100%",
    height: "11rem",
    [theme.breakpoints.down("md")]: {
      height: 86,
    },
    [theme.breakpoints.down("sm")]: {
      height: 68,
    },
    [theme.breakpoints.down("xs")]: {
      height: 62,
    },
  },
}))

const NavbarMargin = () => {
  const classes = useStyles()
  return <div className={classes.root} />
}

export default NavbarMargin
