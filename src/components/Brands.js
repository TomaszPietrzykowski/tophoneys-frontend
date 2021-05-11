import React from "react"
import { makeStyles } from "@material-ui/styles"
// import { useMediaQuery } from "@material-ui/core";
import b1 from "../../assets/brand01.svg"
import b2 from "../../assets/brand02.svg"
import b3 from "../../assets/brand03.svg"
import b4 from "../../assets/brand04.svg"
import b5 from "../../assets/brand05.svg"
import b6 from "../../assets/brand06.svg"
import b7 from "../../assets/brand07.svg"

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1300,
    margin: "auto",
    padding: "0px 15px",
    marginTop: "4rem",
    marginBottom: "4rem",
    [theme.breakpoints.down("md")]: {
      padding: "0px",
      marginTop: "4rem",
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      marginBottom: "1rem",
    },
  },

  brandsHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: ".5rem",
    },
  },
  brandsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  brandTab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid red",
    margin: "1rem",
  },
  brandImg: {
    width: "12vmin",
    minWidth: 70,
    opacity: 0.85,
  },
  headerText: {
    padding: "15px",
    // border: "1px solid red",
    fontFamily: "Bree Serif",
    fontSize: "1.5rem",
    textAlign: "center",
    position: "relative",
    "&:after": {
      content: '""',
      width: "70px",
      height: "2px",
      background: theme.palette.primary.main,
      position: "absolute",
      top: "50%",
      left: "-70px",
    },
    "&:before": {
      content: '""',
      width: "70px",
      height: "2px",
      background: theme.palette.primary.main,
      position: "absolute",
      top: "50%",
      right: "-70px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      "&:before, &:after": {
        height: "1px",
        width: "50px",
      },
    },
  },
}))

const brandsLogos = [b1, b2, b3, b4, b5, b6, b7]

const Brands = ({ title }) => {
  const classes = useStyles()
  //   const isTablet = useMediaQuery("(max-width: 990px)");
  //   const isMobile = useMediaQuery("(max-width: 600px)");
  //   const slides = isMobile ? 2 : isTablet ? 3 : 5;

  return (
    <div className={classes.container}>
      <div className={classes.brandsHeader}>
        <div className={classes.headerText}>Marki</div>
      </div>
      <div className={classes.brandsContainer}>
        {brandsLogos.map((logo) => (
          <div key={logo} className={classes.brandTab}>
            <img src={logo} alt="producers logo" className={classes.brandImg} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brands
