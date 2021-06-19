import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// mui
import { makeStyles, withStyles } from "@material-ui/styles"
import { Button, TextField } from "@material-ui/core"
// CUSTOM
import { savePaymentMethod, saveShippingAddress } from "../actions/cartActions"
import CheckoutSteps from "../components/CheckoutSteps"
import { ORDER_ANONYMOUS_DATA } from "../constants/orderConstants"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.row,
    justifyContent: "flex-start",
    ...theme.typography.mont,
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 0 0",
    },
  },
  content: {
    margin: "0 auto 2rem 25%",
    padding: "3rem 5rem 5rem",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: 2,
      background: `linear-gradient(${theme.palette.common.background}, 40%, ${theme.palette.secondary.main}, 60%, ${theme.palette.common.background})`,
      [theme.breakpoints.down("xs")]: {
        width: 1,
      },
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 2rem",
      padding: "1.5rem",
    },
  },
  title: {
    fontWeight: 300,
    letterSpacing: 1,
    fontSize: "2.4rem",
    color: theme.palette.text.primary,
    marginBottom: "4rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
      marginBottom: "3rem",
    },
  },
  form: {
    ...theme.flex.col,
    alignItems: "flex-start",
    minWidth: 280,
    [theme.breakpoints.down("xs")]: {
      minWidth: "auto",
    },
    "& > *": {
      marginBottom: "2rem",
      width: 380,
      [theme.breakpoints.down("xs")]: {
        width: 270,
      },
    },
  },
  textarea: {
    width: "100%",
    maxWidth: 560,
  },
  submitBtn: {
    ...theme.buttons.primary,
    paddingTop: ".7rem",
    backgroundColor: theme.palette.secondary.light,
    transition: "all .3s ease",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
      padding: ".6rem 1.6",
    },
  },
}))

const CssTextField = withStyles((theme) => ({
  root: {
    ...theme.typography.mont,
    opacity: 0.8,
    "& label.Mui-focused": {
      color: theme.palette.secondary.light,
    },
    "& .MuiInput-focused fieldset": {
      color: theme.palette.secondary.light,
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: theme.palette.secondary.light,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.light,
      },
    },
  },
}))(TextField)

const ShippingScreen = ({ history }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  // get contact data from anonymous customer
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  // get shipping  data
  const [address, setAddress] = useState(shippingAddress.address || "")
  const [city, setCity] = useState(shippingAddress.city || "")
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || "")
  const [country, setCountry] = useState(shippingAddress.country || "")

  const { anonymousShoppingSelected } = useSelector(
    (state) => state.orderAnonymous
  )

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(saveShippingAddress({ address, city, postalCode, country }))

    // dispatch save anonymous data
    if (anonymousShoppingSelected) {
      dispatch({ type: ORDER_ANONYMOUS_DATA, payload: { email, name } })
    }

    // dispatch save payment method
    dispatch(savePaymentMethod("PayPal"))
    history.push("/placeorder")
  }

  return (
    <>
      <CheckoutSteps step1 />
      <div className={classes.container}>
        <main className={classes.content}>
          <h1 className={classes.title}>Shipping address</h1>
          <form onSubmit={submitHandler} className={classes.form}>
            {anonymousShoppingSelected && (
              <>
                <CssTextField
                  id="name"
                  label="Full Name"
                  variant="outlined"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <CssTextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </>
            )}
            <CssTextField
              id="address"
              label="Address"
              variant="outlined"
              className={classes.textarea}
              required
              multiline
              rows={3}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <CssTextField
              id="city"
              label="City"
              variant="outlined"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <CssTextField
              id="postalCode"
              label="Postal Code"
              variant="outlined"
              required
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <CssTextField
              id="country"
              label="Country"
              variant="outlined"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <Button type="submit" className={classes.submitBtn}>
              Confirm
            </Button>
          </form>
        </main>
      </div>
    </>
  )
}

export default ShippingScreen
