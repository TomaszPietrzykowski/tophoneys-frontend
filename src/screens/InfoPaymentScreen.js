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
  },
  title: {
    fontWeight: 300,
    fontSize: "2.4rem",
    color: theme.palette.text.primary,
    margin: "3rem 0 5rem",
    position: "relative",
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
  },
  content: {
    width: "100%",
  },
  section: {
    padding: "3rem 3rem 0",
  },
  sectionHead: {
    fontSize: "1.8rem",
    fontWeight: 300,
    margin: "3rem 0",
  },
  block: {
    color: theme.palette.text.secondary,
    fontWeight: 400,
    margin: "1rem 0",
    lineHeight: 1.7,
    letterSpacing: 0.3,
    maxWidth: 900,
  },
  logosContainer: {
    ...theme.flex.rowStart,
    margin: "5rem 0 0 0",
  },
  logo: {
    margin: "0 2rem 0 0",
  },
  img: {
    maxWidth: "100%",
    height: 48,
    objectFit: "contain",
  },
  bank: {
    fontSize: 48,
    color: theme.palette.text.secondary,
    opacity: 0.8,
  },
}))

const InfoPaymentScreen = () => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Payment and shipping</h1>
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
              <p className={classes.block}>NL90 ABNA 0400 7841 22</p>
            </section>
            <section className={classes.section}>
              <h3 className={classes.sectionHead}>Shipping</h3>
              <p className={classes.block}>Standard Shipping – 4,95 €</p>
              <p className={classes.block}>FREE shipping above 39,00 €</p>
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
                address: office@tophoneys.com
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default InfoPaymentScreen
