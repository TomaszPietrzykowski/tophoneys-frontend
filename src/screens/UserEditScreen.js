import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Button, TextField } from "@material-ui/core"
import { withStyles, makeStyles } from "@material-ui/styles"
import Checkbox from "@material-ui/core/Checkbox"
import Message from "../components/Message"
import Loader from "../components/ui/Loader"
import { getUserDetails, updateUser } from "../actions/userActions"
import { USER_UPDATE_RESET } from "../constants/userConstants"

const CustomCheckbox = withStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    "&$checked": {
      color: theme.palette.common.success,
    },
  },
  checked: {},
}))(Checkbox)

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

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.row,
    justifyContent: "flex-start",
    ...theme.typography.mont,
    padding: "2rem 0 0",
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 0 0",
    },
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
      [theme.breakpoints.down("xs")]: {
        width: 1,
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "min-content",
      minWidth: "80%",
      margin: "0 auto 2rem",
      padding: "1.5rem",
      paddingRight: ".5rem",
    },
  },
  header: {
    ...theme.flex.rowStart,
  },
  title: {
    fontWeight: 300,
    fontSize: "2.4rem",
    color: theme.palette.text.primary,
    marginBottom: "3rem",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6rem",
      marginBottom: "3rem",
    },
  },
  adminBadge: {
    ...theme.utils.adminBadge,
    color: theme.palette.secondary.light,
    [theme.breakpoints.down("xs")]: {
      fontSize: ".85rem",
      right: "-3.3rem",
    },
  },
  form: {
    ...theme.flex.col,
    minWidth: 280,
    [theme.breakpoints.down("xs")]: {
      alignItems: "flex-start",
    },
    "& > *": {
      marginBottom: "2rem",
      width: 280,
      [theme.breakpoints.down("xs")]: {
        width: 270,
      },
    },
  },
  checkboxContainer: {
    ...theme.flex.row,
    justifyContent: "flex-start",
    width: "100%",
    marginBottom: 0,
  },
  checkboxLabel: {
    fontSize: "1.2rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      fontWeight: 300,
    },
  },
  submitBtn: {
    ...theme.buttons.primary,
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
  backBtn: {
    ...theme.buttons.secondary,
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
      padding: ".6rem 1.6",
    },
  },
}))

const UserEditScreen = ({ match, history }) => {
  const classes = useStyles()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isAdmin, setIsAdmin] = useState(false)

  const userId = match.params.id

  const dispatch = useDispatch()

  const { loading, error, user } = useSelector((state) => state.userDetails)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = useSelector((state) => state.userUpdate)

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET })
      history.push("/admin/userlist")
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }
  }, [dispatch, history, user, userId, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser({ _id: userId, name, email, isAdmin }))
  }

  const adminHandler = (e) => {
    if (
      window.confirm("Are you sure you want to change user's admin status?")
    ) {
      setIsAdmin(e.target.checked)
    }
  }

  return (
    <div className={classes.container}>
      <main className={classes.content}>
        <div className={classes.header}>
          <h1 className={classes.title}>
            Edit User<span className={classes.adminBadge}>Admin</span>
          </h1>
        </div>
        {/* <Link to="/admin/userlist">
        <Button className={classes.backBtn}>&larr; Back</Button>
      </Link> */}
        <form onSubmit={submitHandler} className={classes.form}>
          {loading || loadingUpdate ? (
            <Loader />
          ) : error ? (
            <Message variant="error" message={error} />
          ) : errorUpdate ? (
            <Message variant="error" message={errorUpdate} />
          ) : (
            <>
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
                type="email"
                required
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={classes.checkboxContainer}>
                <CustomCheckbox checked={isAdmin} onChange={adminHandler} />
                <span className={classes.checkboxLabel}>Admin</span>
              </div>
              <Button type="submit" className={classes.submitBtn}>
                Update
              </Button>
              <Button
                className={classes.backBtn}
                variant="outlined"
                color="secondary"
                component={Link}
                to="/admin/userlist"
              >
                All users
              </Button>
            </>
          )}
        </form>
      </main>
    </div>
  )
}

export default UserEditScreen
