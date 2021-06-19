import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "react-router-dom"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // background: `linear-gradient(110deg,${theme.palette.primary.main}, ${theme.palette.secondary.dark})`,
    backgroundColor: theme.palette.primary.main,
    color: "white",
    marginTop: "4rem",
  },
  container: {
    maxWidth: 1300,
    minHeight: 200,
    margin: "auto",
    padding: "1.5rem 15px",
  },
  gridContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "2rem",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    minWidth: 200,
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      padding: "1rem",
    },
  },
  columnHeader: {
    ...theme.typography.prosto,
    fontSize: "1.2rem",
    padding: ".8rem .4rem",
  },
  link: {
    ...theme.typography.mont,
    fontSize: ".9rem",
    padding: ".4rem",
    cursor: "pointer",
    transition: "all .2s ease",
    letterSpacing: 0.5,
    "&:hover": {
      color: theme.palette.common.brown2,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: ".85rem",
    },
  },
  social: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
    "&:before": {
      content: '""',
      width: "50%",
      height: 1,
      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.common.background}, ${theme.palette.primary.main})`,
      position: "absolute",
      top: 0,
      [theme.breakpoints.down("md")]: {
        width: "70%",
      },
    },
    "&:after": {
      content: '""',
      width: "50%",
      height: 1,
      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.common.background}, ${theme.palette.primary.main})`,
      position: "absolute",
      bottom: 0,
      [theme.breakpoints.down("md")]: {
        width: "80%",
      },
    },
  },
  socialIcon: {
    fontSize: "3rem",
    margin: "1rem",
    cursor: "pointer",
    transition: "all .2s ease",
    "&:hover": {
      color: theme.palette.common.brown2,
    },
  },
  anchor: {
    color: "white",
  },
  copy: {
    ...theme.flex.col,
    ...theme.typography.mont,
    fontSize: ".9rem",
    margin: "2rem 0 0",
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.gridContainer}>
          <div className={classes.column}>
            <div className={classes.columnHeader}>My account</div>
            <Link to="/register">
              <div className={classes.link}>Create account</div>
            </Link>
            <Link to="/profile">
              <div className={classes.link}>My orders and profile</div>
            </Link>
            <Link to="/cart">
              <div className={classes.link}>Cart</div>
            </Link>
          </div>
          <div className={classes.column}>
            <div className={classes.columnHeader}>Top Honeys</div>
            <Link to="/">
              <div className={classes.link}>Home</div>
            </Link>
            <Link to="/abouthoney">
              <div className={classes.link}>About honey</div>
            </Link>
            <Link to="/aboutus">
              <div className={classes.link}>About us</div>
            </Link>
            <Link to="/contact">
              <div className={classes.link}>Contact</div>
            </Link>
          </div>
          <div className={classes.column}>
            <div className={classes.columnHeader}>Terms</div>
            <Link to="/conditions">
              <div className={classes.link}>General conditions</div>
            </Link>
            <Link to="/payment-info">
              <div className={classes.link}>Payment and invoices</div>
            </Link>
            <Link to="/shipping-info">
              <div className={classes.link}>Shipping and return</div>
            </Link>
            <Link to="/privacy">
              <div className={classes.link}>Privacy policy</div>
            </Link>
          </div>
        </div>

        <div className={classes.social}>
          <a
            className={classes.anchor}
            href="http://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FacebookIcon className={classes.socialIcon} />
          </a>
          <a
            className={classes.anchor}
            href="http://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon className={classes.socialIcon} />
          </a>
        </div>
        <div className={classes.copy}>
          &copy; Copyright {new Date().getFullYear()} GD TOP
        </div>
      </div>
    </div>
  )
}

export default Footer
