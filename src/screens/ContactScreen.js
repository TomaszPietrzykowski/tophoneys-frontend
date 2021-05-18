import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button, TextField } from "@material-ui/core"
import { makeStyles, withStyles } from "@material-ui/styles"
import Message from "../components/Message"
import Loader from "../components/Loader"
import { login } from "../actions/userActions"
import NavbarMargin from "../components/ui/NavbarMargin"
import logo from "../assets/logotranspbg.png"

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
    alignItems: "flex-start",
    minWidth: 280,
    "& > *": {
      marginBottom: "2rem",
      width: 380,
    },
  },
  submitBtn: {
    ...theme.buttons.primary,
    paddingTop: ".7rem",
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
  textarea: {
    width: "100%",
    maxWidth: 560,
  },
  errorMargin: {
    marginBottom: "2rem",
  },
  info: {
    color: theme.palette.text.primary,
    lineHeight: 1.7,
    letterSpacing: 0.3,
    maxWidth: 560,
    margin: "4rem 0",
  },
  orderNumber: {
    margin: "2rem 0",
    "& > a": {
      color: theme.palette.secondary.main,
      textDecoration: "underline",
    },
  },
  link: {
    margin: "1rem 0",
  },
  address: {
    margin: "1rem 0",
    "& > *": {
      paddingBottom: "1rem  ",
    },
  },
  logo: {
    maxWidth: 280,
    margin: "2rem 0",
    opacity: 0.8,
  },
  logoContainer: {
    // color: theme.palette.text.primary,
    margin: "6rem 0 2rem 0",
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

const ContactScreen = ({ history }) => {
  const classes = useStyles()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendEmail = async (name, email, content) => {
    console.log("send email", name, email, content)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    sendEmail(name, email, content)
  }

  return (
    <>
      <NavbarMargin />
      <div className={classes.container}>
        <main className={classes.content}>
          <h1 className={classes.title}>Contact Us</h1>

          {error && (
            <div className={classes.errorMargin}>
              <Message
                variant="error"
                message={error}
                onClose={() => setError(null)}
              />
            </div>
          )}
          {loading ? (
            <Loader />
          ) : (
            <>
              <form onSubmit={(e) => submitHandler(e)} className={classes.form}>
                <CssTextField
                  id="name"
                  required
                  label="Your name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <CssTextField
                  id="email"
                  type="email"
                  label="Your email"
                  required
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <CssTextField
                  id="content"
                  type="text"
                  label="Message"
                  // style={{ width: 560 }}
                  className={classes.textarea}
                  required
                  multiline={10}
                  multiline
                  rows={16}
                  defaultValue="Your message here..."
                  variant="outlined"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <Button type="submit" className={classes.submitBtn}>
                  Send
                </Button>
              </form>
              <div className={classes.info}>
                <div className={classes.orderNumber}>
                  We are happy to hear from you. If you are contacting us
                  regarding your order mention your order number. You may find
                  it between your orders in your{" "}
                  <Link to="/profile">profile.</Link>
                </div>
                <div className={classes.logoContainer}>
                  <img
                    src={logo}
                    alt="top honeys logo"
                    className={classes.logo}
                  />
                </div>
                <div className={classes.link}>
                  Email:{" "}
                  <a href="mailto:info@tophoneys.com">info@tophoneys.com</a>
                </div>
                <div className={classes.link}>
                  Facebook: <a href="http://facebook.com">@tophoneys</a>
                </div>
                <div className={classes.link}>KVK 12345678</div>
                <div className={classes.address}>
                  <p>Coyotestraat 12</p>
                  <p>1448WE PURMEREND</p>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  )
}

export default ContactScreen
