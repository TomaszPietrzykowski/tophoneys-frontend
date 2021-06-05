import React from "react"
import { makeStyles } from "@material-ui/styles"
// import { useMediaQuery } from "@material-ui/core";
import b1 from "../assets/ideal-logo.svg"
import b2 from "../assets/bancontact-logo.svg"
import b3 from "../assets/paypal-logo.svg"
import b4 from "../assets/przelewy24-logo.png"
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
    padding: "0px 3rem",
    marginTop: "10rem",
    marginBottom: "5rem",
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

const brandsLogos = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10]

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
