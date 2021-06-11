import React from "react"
// mui
import { makeStyles } from "@material-ui/core/styles"
// custom
import b11 from "../assets/postnl-logo.jpeg"
import b12 from "../assets/dhl-logo.svg"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.typography.mont,
    padding: "3rem",
    fontWeight: 300,
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1rem .5rem 0rem",
      marginBottom: "8rem",
    },
  },
  title: {
    fontWeight: 300,
    fontSize: "2.4rem",
    color: theme.palette.text.primary,
    margin: "3rem 0 5rem",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
      margin: "2rem 1rem",
    },
  },
  deco: {
    position: "relative",
    padding: "0 3rem",
    "&::before": {
      content: "''",
      width: 1,
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      background: `linear-gradient(transparent, ${theme.palette.secondary.main}, transparent)`,
    },
    "&::after": {
      content: "''",
      width: 1,
      height: "100%",
      position: "absolute",
      top: 0,
      right: 0,
      background: `linear-gradient(transparent, ${theme.palette.secondary.main}, transparent)`,
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 1rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 .5rem",
    },
  },
  content: {
    width: "100%",
  },
  section: {
    padding: "3rem 3rem 0",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 2rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1rem .5rem 0",
    },
  },
  sectionHead: {
    fontSize: "1.8rem",
    fontWeight: 300,
    margin: "3rem 0",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      margin: "1.5rem 0",
    },
  },
  block: {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    margin: "1rem 0",
    lineHeight: 1.7,
    letterSpacing: 0.3,
    maxWidth: 900,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      fontWeight: 300,
    },
  },
  logosContainer: {
    ...theme.flex.rowStart,
    margin: "5rem 0 0 0",
    flexWrap: "wrap",
  },
  logo: {
    margin: "0 2rem 0 0",
  },
  img: {
    maxWidth: "100%",
    height: 48,
    objectFit: "contain",
    [theme.breakpoints.down("xs")]: {
      height: 32,
      margin: ".5rem 0",
    },
  },
  link: {
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
}))

const InfoShippingScreen = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Shipping and return</h1>
      <div className={classes.deco}>
        <main className={classes.content}>
          <div className={classes.table}>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>Shipping</h3>
              <p className={classes.block}>
                Shipping in the Netherlands: € 4,95
              </p>
              <p className={classes.block}>FREE shipping above € 39,00</p>
              <div
                className={classes.logosContainer}
                style={{ margin: "2rem 0rem" }}
              >
                <div className={classes.logo}>
                  <img src={b11} alt="producers logo" className={classes.img} />
                </div>
                <div className={classes.logo}>
                  <img src={b12} alt="producers logo" className={classes.img} />
                </div>
              </div>
              <p className={classes.block}>
                We usually ship orders within 24 hours from the moment the
                payment is credited. Sometimes it may take up to 2-4 days.
              </p>
              <p className={classes.block}>
                Packaging costs are included in shipping costs.
              </p>
              <p className={classes.block}>
                We send the products new and safely packed.
              </p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>Returns</h3>
              <p className={classes.block}>
                The customer has the right to return the goods intact within 14
                days of purchase.
              </p>
              <p className={classes.block}>
                Questions can be submitted by e-mail to the following e-mail
                address:{" "}
                <a href="mailto:info@tophoneys.com" className={classes.link}>
                  info@tophoneys.com
                </a>
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default InfoShippingScreen
