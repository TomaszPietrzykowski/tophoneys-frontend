import React from "react"
// material-ui
import { makeStyles } from "@material-ui/styles"
import { Link } from "react-router-dom"
// custom
import teaser1 from "../assets/teaser1.jpeg"
import teaser2 from "../assets/teaser2.jpeg"
import teaser3 from "../assets/teaser3.jpeg"

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1400,
    margin: "3rem",
    marginBottom: "9rem",
    display: "flex",
    justifyContent: "center",
    // border: "1px solid green",
    // [theme.breakpoints.down("md")]: {
    //   flexDirection: "column",
    // },
    [theme.breakpoints.down("md")]: {
      margin: "3rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      margin: 0,
    },
  },
  teaser: {
    margin: ".8rem",
    // flex: 1,
    ...theme.flex.col,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: 0,
      padding: ".5rem",
    },
    transition: "all .3s ease",
    "&:hover": {
      opacity: 0.87,
    },
  },
  img: {
    maxWidth: 380,
    objectFit: "contain",
    borderRadius: 7,
    [theme.breakpoints.down("xl")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}))

const Teasers = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Link to="/category/honeys">
        <div className={classes.teaser}>
          <img src={teaser1} alt="teaser one" className={classes.img} />
        </div>
      </Link>
      <Link to="/category/specialoffer">
        <div className={classes.teaser}>
          <img src={teaser2} alt="teaser one" className={classes.img} />
        </div>
      </Link>
      <Link to="/category/teas">
        <div className={classes.teaser}>
          <img src={teaser3} alt="teaser one" className={classes.img} />
        </div>
      </Link>
    </div>
  )
}

export default Teasers
