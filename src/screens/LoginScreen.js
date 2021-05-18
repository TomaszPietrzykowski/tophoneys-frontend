import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button, TextField } from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/styles"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { login } from "../actions/userActions"
import NavbarMargin from "../components/ui/NavbarMargin"
import { USER_LOGIN_ERROR_RESET } from "../constants/userConstants"

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
    marginBottom: "4rem",
  },
  form: {
    ...theme.flex.col,
    minWidth: 280,
    "& > *": {
      marginBottom: "2rem",
      width: 280,
    },
  },
  submitBtn: {
    ...theme.buttons.primary,
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
  registerBtn: {
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

const LoginScreen = ({ location, history }) => {
  const classes = useStyles()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const redirect = location.search ? location.search.split("=")[1] : null

  const dispatch = useDispatch()

  const { loading, error, userInfo } = useSelector((state) => state.userLogin)

  useEffect(() => {
    if (userInfo) {
      if (redirect) {
        history.push(redirect)
      } else {
        history.goBack()
      }
    }
  }, [userInfo, redirect, history])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  const handleErrorClose = () => {
    dispatch({ type: USER_LOGIN_ERROR_RESET })
  }

  return (
    <>
      <NavbarMargin />
      <div className={classes.container}>
        <main className={classes.content}>
          <h1 className={classes.title}>Log In</h1>
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
            <form onSubmit={(e) => submitHandler(e)} className={classes.form}>
              <CssTextField
                id="email"
                required
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <CssTextField
                id="password"
                type="password"
                label="Password"
                required
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" className={classes.submitBtn}>
                Log in
              </Button>
            </form>
          )}
          <div className={classes.links}>
            <Button
              className={classes.registerBtn}
              variant="outlined"
              color="secondary"
              component={Link}
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Register
            </Button>
          </div>
          <div className={classes.links}>
            {history.location.state &&
              history.location.state.from === "checkout" && (
                <Button
                  className={classes.registerBtn}
                  variant="outlined"
                  color="secondary"
                  component={Link}
                  to={"/anonymous"}
                >
                  Guest checkout
                </Button>
              )}
          </div>
        </main>
      </div>
    </>
  )
}

export default LoginScreen
