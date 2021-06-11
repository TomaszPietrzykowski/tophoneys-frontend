import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import img1 from "../assets/beekeeper.jpeg"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.typography.mont,
    padding: "3rem",
    paddingBottom: 0,
    [theme.breakpoints.down("sm")]: {
      padding: ".5rem 1rem",
    },
  },
  title: {
    fontWeight: 300,
    fontSize: "2.4rem",
    color: theme.palette.text.primary,
    margin: "3rem 0 5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
      margin: "1rem 0",
    },
  },
  flexContainer: {
    // border: "1px solid green",
    ...theme.typography.mont,
    ...theme.flex.row,
    alignItems: "flex-start",
    maxWidth: 1400,
    margin: "auto",
    marginBottom: "8rem",
    [theme.breakpoints.down("sm")]: {
      ...theme.flex.col,
      marginBottom: "3rem",
    },
  },
  flexItem: {
    // border: "1px solid magenta",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  innerContainer: {
    padding: "3rem",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem",
    },
  },
  innerContainerDeco: {
    padding: "3rem",
    position: "relative",
    "&::before": {
      content: "''",
      width: 1,
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      background: `linear-gradient(transparent, ${theme.palette.secondary.main}, transparent)`,
      [theme.breakpoints.down("xs")]: {
        height: 1,
        width: "100%",
        background: `linear-gradient(90deg, transparent, ${theme.palette.secondary.main}, transparent)`,
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 1rem 1rem",
    },
  },
  innerContainerRight: {
    padding: "1rem 3rem 1rem 6rem",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 1rem 1rem",
      marginBottom: "5rem",
    },
  },
  img: {
    maxWidth: "100%",
    objectFit: "contain",
  },
  sectionHead: {
    fontSize: "1.8rem",
    fontWeight: 300,
    marginBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      margin: "1.5rem 0",
    },
  },
  block: {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    margin: "1rem 0 2rem",
    lineHeight: 1.7,
    letterSpacing: 0.3,
    maxWidth: 900,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      fontWeight: 300,
    },
  },
  list: {
    color: theme.palette.text.primary,
    fontWeight: 300,
    margin: "1rem 0 0 3rem",
    lineHeight: 1.7,
    letterSpacing: 0.3,
    maxWidth: 900,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      fontWeight: 300,
    },
    [theme.breakpoints.down("xs")]: {
      margin: "1rem 0 0",
    },
  },
}))

const AboutUsScreen = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.title}>About us</h1>
      </div>
      <div className={classes.flexContainer}>
        <div className={classes.flexItem}>
          <div className={classes.innerContainer}>
            <p className={classes.sectionHead}>
              Thank you for visiting our honey store!
            </p>
            <p className={classes.block}>
              We offer honey and bee products from around the world, as well as
              lots of valuable informations. Our main goal is to offer our
              customers high-quality bee products at a reasonable prices.
            </p>
            <p className={classes.block}>
              Our honeys, depending on the species, have health-promoting
              properties and come from the best, regularly controlled apiaries
              in places far from the city. All this is carefully divided by
              type, weight and region of origin.
            </p>
            <p className={classes.block}>
              We strongly encourage you to include honey in your daily diet.
              Enjoy your shopping!
            </p>
          </div>
        </div>

        <div className={classes.flexItem}>
          <div className={classes.innerContainerDeco}>
            <p className={classes.list}>We offer:</p>
            <p className={classes.list}>&bull;&nbsp;Pure honey</p>
            <p className={classes.list}>&bull;&nbsp;Creamed honey</p>
            <p className={classes.list}>
              &bull;&nbsp;Honey with additves (fruits, nuts)
            </p>
            <p className={classes.list}>&bull;&nbsp;Bee pollen</p>
            <p className={classes.list}>&bull;&nbsp;Bee milk</p>
            <p className={classes.list}>&bull;&nbsp;Propolis</p>
          </div>
        </div>
      </div>

      <div className={classes.flexContainer}>
        <div className={classes.flexItem}>
          <img src={img1} alt="bee keeper organic" className={classes.img} />
        </div>
        <div className={classes.flexItem}>
          <div className={classes.innerContainerRight}>
            <p className={classes.block}>
              It is becoming more and more challenging to eat healthy and free
              from harmful substances. The World is running towards easiest and
              chippest solutions every day. Providing your body with true
              nature's values takes an effort and dedication.
            </p>
            <p className={classes.block}>
              Eating organic food - extremely fashionable for a good reason - is
              a best way to conserve youth, well-being and good condition of the
              body longer.
            </p>
            <p className={classes.block}>
              It is therefore ideal to introduce honey - nature’s real treasure
              - into your daily menu.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUsScreen
