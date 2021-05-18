import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button, TextField } from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/styles"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { register } from "../actions/userActions"
import NavbarMargin from "../components/ui/NavbarMargin"
import { USER_REGISTER_ERROR_RESET } from "../constants/userConstants"

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.row,
    justifyContent: "flex-start",
    ...theme.typography.mont,
    padding: "2rem 0 0",
  },
  content: {
    margin: "0 auto 2rem 25%",
    padding: "5rem",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      height: "100%",
      width: 2,
      background: `linear-gradient(transparent, 40%, ${theme.palette.secondary.main}, 60%, transparent)`,
    },
  },
  title: {
    fontWeight: 300,
    letterSpacing: 1,
    fontSize: "2.4rem",
    color: theme.palette.text.primary,
    marginBottom: "3rem",
  },
  form: {
    ...theme.flex.col,
    minWidth: 280,
    "& > *": {
      marginBottom: "2rem",
      width: "100%",
      // "&:hover": {
      //   borderColor: theme.palette.secondary.main,
      // },
    },
  },
  registerBtn: {
    ...theme.buttons.primary,
    marginTop: "1rem",
    backgroundColor: theme.palette.secondary.light,
    transition: "all .3s ease",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: ".85rem",
      flex: 1,
      padding: ".3rem",
    },
  },
  loginBtn: {
    ...theme.buttons.secondary,
    [theme.breakpoints.down("md")]: {
      fontSize: ".85rem",
      flex: 1,
      padding: ".3rem",
    },
  },
  errorMargin: {
    marginBottom: "2rem",
  },
}))

const CssTextField = withStyles((theme) => ({
  root: {
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

const RegisterScreen = ({ location, history }) => {
  const classes = useStyles()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [message, setMessage] = useState(null)

  const redirect = location.search ? location.search.split("=")[1] : "/"

  const dispatch = useDispatch()

  const { loading, error, userInfo } = useSelector(
    (state) => state.userRegister
  )

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [userInfo, redirect, history])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      setMessage("Passwords do not match")
    } else {
      dispatch(register(name, email, password))
    }
  }
  const handleErrorClose = () => {
    dispatch({ type: USER_REGISTER_ERROR_RESET })
  }

  return (
    <>
      <NavbarMargin />
      <div className={classes.container}>
        <main className={classes.content}>
          <h1 className={classes.title}>Create Account</h1>
          {message && (
            <div className={classes.errorMargin}>
              <Message
                variant="error"
                message={message}
                onClose={() => setMessage(null)}
              />
            </div>
          )}
          {error && (
            <div className={classes.errorMargin}>
              <Message
                variant="error"
                message={error}
                onClose={handleErrorClose}
              />
            </div>
          )}
          {loading ? (
            <Loader />
          ) : (
            <form onSubmit={submitHandler} className={classes.form}>
              <CssTextField
                id="name"
                label="Name"
                variant="outlined"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <CssTextField
                id="email"
                label="Email"
                variant="outlined"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <CssTextField
                id="password"
                type="password"
                label="Password"
                variant="outlined"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <CssTextField
                id="confirmPassword"
                type="password"
                label="Confirm password"
                required
                variant="outlined"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
              <Button type="submit" className={classes.registerBtn}>
                Register
              </Button>
            </form>
          )}

          <div className={classes.links}>
            <Button
              className={classes.loginBtn}
              variant="outlined"
              color="secondary"
              component={Link}
              to={redirect ? `/login?redirect=${redirect}` : "/login"}
            >
              Log in
            </Button>
          </div>
        </main>
      </div>
    </>
  )
}

export default RegisterScreen
