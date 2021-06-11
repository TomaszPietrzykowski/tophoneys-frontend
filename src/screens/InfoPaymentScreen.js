import React from "react"
import { makeStyles } from "@material-ui/core/styles"
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
import AccountBalanceIcon from "@material-ui/icons/AccountBalance"

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
  bank: {
    fontSize: 48,
    color: theme.palette.text.secondary,
    opacity: 0.8,
  },
  link: {
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
}))

const InfoPaymentScreen = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Payment</h1>
      <div className={classes.deco}>
        <main className={classes.content}>
          <div className={classes.table}>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>Payment methods</h3>
              <p className={classes.block}>
                Our payments are processed by PayPal Europe, giving you choice
                from variety of payment methods:
              </p>
              <div className={classes.logosContainer}>
                <div className={classes.logo}>
                  <img src={b1} alt="producers logo" className={classes.img} />
                </div>
                <div className={classes.logo}>
                  <img src={b2} alt="producers logo" className={classes.img} />
                </div>
                <div className={classes.logo}>
                  <img src={b4} alt="producers logo" className={classes.img} />
                </div>
              </div>
              <p className={classes.block}>
                Local payment methods: iDeal, Bancontact and more. Availability
                of local payment methods depends on your location. Visiting our
                website from the Netherlands, you will be able to use iDeal,
                browsing from Belgium will give you chance to use Bancontact,
                and so on.
              </p>
              <div className={classes.logosContainer}>
                <div className={classes.logo}>
                  <img src={b5} alt="producers logo" className={classes.img} />
                </div>
                <div className={classes.logo}>
                  <img src={b6} alt="producers logo" className={classes.img} />
                </div>
                <div className={classes.logo}>
                  <img src={b7} alt="producers logo" className={classes.img} />
                </div>
                <div className={classes.logo}>
                  <img src={b8} alt="producers logo" className={classes.img} />
                </div>
                <div className={classes.logo}>
                  <img src={b9} alt="producers logo" className={classes.img} />
                </div>
                <div className={classes.logo}>
                  <img src={b10} alt="producers logo" className={classes.img} />
                </div>
              </div>
              <p className={classes.block}>
                Kredit card: all major card payments are accepted
              </p>
              <div className={classes.logosContainer}>
                <div className={classes.logo}>
                  <img src={b3} alt="producers logo" className={classes.img} />
                </div>
              </div>
              <p className={classes.block}>
                PayPal: With PayPal you can pay for your order easily and
                directly. You will be taken to the PayPal payment screen where
                all payment details have already been entered.
              </p>
              <p className={classes.block}></p>
              <div className={classes.logosContainer}>
                <div className={classes.logo}>
                  <AccountBalanceIcon className={classes.bank} />
                </div>
              </div>
              <p className={classes.block}>
                Bank transfer: transfer your regular amount to our bank account.
                Don't forget the order number.
              </p>
              <p className={classes.block}>Our account number:</p>
              <p className={classes.block}>GD TOP</p>
              <p className={classes.block}>NL00 3744 8248 83</p>
            </section>
            {/* -------------------------------------------- */}
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>Payment conditions</h3>
              <p className={classes.block}>
                If you choose electronic payments or payment by bank transfer
                you should pay within 2 calendar days from the date of placing
                an order.
              </p>
              <p className={classes.block}>
                If you decide to collect products in person payment should be
                done in cash upon personal collection from the parcel.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default InfoPaymentScreen
