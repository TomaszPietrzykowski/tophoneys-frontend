import React from "react"
import { makeStyles } from "@material-ui/styles"
import b1 from "../assets/ideal-logo.svg"
import b2 from "../assets/bancontact-logo.svg"
import b3 from "../assets/paypal-logo.svg"
import b5 from "../assets/visa-logo.svg"
import b6 from "../assets/mastercard-logo.svg"
import b7 from "../assets/maestro-logo.svg"
import b8 from "../assets/jcb-logo.svg"
import b9 from "../assets/amex-logo.svg"
import b10 from "../assets/diners-logo.svg"

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1300,
    margin: "auto",
    padding: "5rem 3rem 0",
    marginTop: "10rem",
    marginBottom: "5rem",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      height: 1,
      width: "100%",
      background: `linear-gradient(90deg, ${theme.palette.common.background}, ${theme.palette.text.secondary}, ${theme.palette.common.background})`,
      opacity: 0.5,
    },
    [theme.breakpoints.down("md")]: {
      padding: "2rem 0 0",
      marginTop: "4rem",
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      marginBottom: "1rem",
    },
  },
  brandsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  brandTab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // border: "1px solid red",
    margin: "1.2rem",
    [theme.breakpoints.down("xs")]: {
      margin: "1rem",
    },
  },
  brandImg: {
    width: "7vmin",
    [theme.breakpoints.down("xs")]: {
      width: "10vmin",
      minWidth: 45,
    },
  },
}))

const brandsLogos = [b1, b2, b3, b5, b6, b7, b8, b9, b10]

const Brands = ({ title }) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
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
