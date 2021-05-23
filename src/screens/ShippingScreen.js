import React, { useState } from "react"
import { makeStyles } from "@material-ui/styles"
import { useDispatch, useSelector } from "react-redux"
import { Button, TextField } from "@material-ui/core"
import { savePaymentMethod, saveShippingAddress } from "../actions/cartActions"
import CheckoutSteps from "../components/CheckoutSteps"
import { ORDER_ANONYMOUS_DATA } from "../constants/orderConstants"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.col,
    marginTop: "15rem",
  },
  form: {
    ...theme.flex.col,
    minWidth: "50%",
    "& > *": {
      marginBottom: "2rem",
      width: "100%",
    },
  },
  submitBtn: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    ...theme.typography.open,
    fontWeight: 600,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}))

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
    dispatch({ type: ORDER_ANONYMOUS_DATA, payload: { email, name } })

    // dispatch save payment method
    dispatch(savePaymentMethod("PayPal"))
    history.push("/placeorder")
  }

  return (
    <div className={classes.container}>
      <CheckoutSteps step1 />
      <h1>Shipping</h1>
      <form onSubmit={submitHandler} className={classes.form}>
        {anonymousShoppingSelected && (
          <>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
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
        <TextField
          id="address"
          label="Address"
          variant="outlined"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          id="city"
          label="City"
          variant="outlined"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          id="postalCode"
          label="Postal Code"
          variant="outlined"
          required
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
        <TextField
          id="country"
          label="Country"
          variant="outlined"
          required
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Button type="submit" className={classes.submitBtn}>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default ShippingScreen
