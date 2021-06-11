import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Grid, Button, TextField } from "@material-ui/core"
import { withStyles, makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Message from "../components/Message"
import Loader from "../components/ui/Loader"
import DetailsIcon from "@material-ui/icons/MenuOpenRounded"
import { getUserDetails, updateUserProfile } from "../actions/userActions"
import { listMyOrders } from "../actions/orderActions"
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants"
import EditIcon from "@material-ui/icons/Edit"

const StyledTableCell = withStyles((theme) => ({
  root: {
    ...theme.typography.mont,
    color: theme.palette.text.secondary,
    fontSize: ".9rem",
    border: "none",
    outline: "none",
    whiteSpace: "nowrap",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
      padding: ".3rem .6rem",
    },
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: "rgba(0,0,0,.02)",
    },
  },
}))(TableRow)

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
      ...theme.typography.mont,
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.6rem",
      margin: "2rem .5rem",
    },
  },
  userData: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      padding: "0.5rem",
    },
  },
  subtitle: {
    fontWeight: 300,
    fontSize: "1.8rem",
    color: theme.palette.text.primary,
    marginBottom: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2rem",
      margin: "1.5rem 0",
    },
  },
  form: {
    ...theme.flex.col,
    alignItems: "flex-start",

    [theme.breakpoints.down("xs")]: {
      maxWidth: 380,
    },
    "& > *": {
      marginBottom: "2rem",
      width: 300,
      [theme.breakpoints.down("xs")]: {
        width: 270,
      },
    },
  },
  submitBtn: {
    ...theme.buttons.primary,
    minWidth: 180,
    marginTop: "1rem",
    paddingTop: ".7rem",
    paddingLeft: "2rem",
    paddingRight: "3rem",
    backgroundColor: theme.palette.secondary.light,
    transition: "all .3s ease",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
      padding: ".6rem 1.6rem .6rem .8rem",
    },
  },
  editIcon: {
    fontSize: "1.2rem",
    marginRight: ".5rem",
    marginBottom: ".2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },
  separator: {
    width: "100%",
    height: "1rem",
    position: "relative",
    "&::before": {
      content: "''",
      height: 1,
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      background: `linear-gradient(90deg, transparent, ${theme.palette.text.secondary}, transparent)`,
      opacity: 0.3,
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "2rem",
    },
  },
  myOrders: {
    ...theme.flex.colStart,
    paddingLeft: "2rem",
    "& > *": {
      marginLeft: "2rem",
      [theme.breakpoints.down("md")]: {
        marginLeft: 0,
      },
    },
    position: "relative",
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
      [theme.breakpoints.up("lg")]: {
        display: "none",
      },
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 .5rem",
    },
  },
  tableContainer: {
    width: "100%",
    overflowX: "scroll",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  head: {
    padding: ".5rem 1rem",
    textTransform: "uppercase",
    position: "relative",
    "&::after": {
      content: "''",
      width: 1,
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      background: `linear-gradient(transparent, ${theme.palette.secondary.light}, transparent)`,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
      padding: ".4rem 1rem",
    },
  },
  info: {
    fontSize: ".8rem",
    textTransform: "uppercase",
  },
  success: {
    fontSize: ".8rem",
    color: theme.palette.common.success,
  },
  detailsBtn: {
    marginLeft: ".5rem",
  },
  detailsIcon: {
    color: theme.palette.text.disabled,
  },
  noOrders: {
    padding: "3rem 1rem",
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: ".9rem",
    },
  },
}))

const ProfileScreen = ({ location, history }) => {
  const classes = useStyles()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  // STATE
  const { loading, error, user } = useSelector((state) => state.userDetails)
  const {
    loading: loadingOrders,
    error: errorOrders,
    orders,
  } = useSelector((state) => state.orderMyList)
  const { userInfo } = useSelector((state) => state.userLogin)
  const { success } = useSelector((state) => state.userUpdateProfile)

  useEffect(() => {
    if (!userInfo) {
      history.push("/login")
    } else {
      dispatch(listMyOrders())
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET })
        dispatch(getUserDetails("profile"))
        // dispatch(listMyOrders());
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [userInfo, user, history, dispatch, success])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      setMessage("Passwords do not match")
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>User profile</h1>
      <Grid container>
        <Grid item md={12} lg={4} className={classes.userData}>
          <h2 className={classes.subtitle}>My data</h2>
          <form onSubmit={(e) => submitHandler(e)} className={classes.form}>
            {loading && <Loader />}
            {message && <Message variant="error" message={message} />}
            {success && <Message variant="success" message="Profile updated" />}
            {error && <Message variant="error" message={error} />}
            <CssTextField
              id="name"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CssTextField
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CssTextField
              id="password"
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <CssTextField
              id="confirmPassword"
              type="password"
              label="Confirm password"
              variant="outlined"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <Button type="submit" className={classes.submitBtn}>
              <EditIcon className={classes.editIcon} />
              Update
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8} className={classes.myOrders}>
          <div className={classes.separator} />
          <h2 className={classes.subtitle}>My orders</h2>
          {loadingOrders ? (
            <Loader />
          ) : errorOrders ? (
            <Message variant="error" message={error} />
          ) : (
            <div className={classes.tableContainer}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell className={classes.head}>
                      Id
                    </StyledTableCell>
                    <StyledTableCell className={classes.head}>
                      Date
                    </StyledTableCell>
                    <StyledTableCell className={classes.head}>
                      Total
                    </StyledTableCell>
                    <StyledTableCell className={classes.head}>
                      Paid
                    </StyledTableCell>
                    <StyledTableCell className={classes.head}>
                      Sent
                    </StyledTableCell>
                    <StyledTableCell className={classes.head}>
                      Details
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <StyledTableRow key={order._id}>
                      <StyledTableCell component="th" scope="row">
                        {order._id}
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        style={{ fontSize: ".8rem" }}
                      >
                        {order.createdAt.substring(0, 10)}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {order.totalPrice}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {order.isPaid ? (
                          <span className={classes.success}>
                            {order.paidAt.substring(0, 10)}
                          </span>
                        ) : (
                          <span className={classes.info}>Not paid</span>
                        )}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {order.isDelivered ? (
                          <span className={classes.success}>
                            {order.deliveredAt.substring(0, 10)}
                          </span>
                        ) : (
                          <span className={classes.info}>Not sent</span>
                        )}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        <Link to={`/order/${order._id}`}>
                          <IconButton className={classes.detailsBtn}>
                            <DetailsIcon className={classes.detailsIcon} />
                          </IconButton>
                        </Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
              {orders.length === 0 && (
                <div className={classes.noOrders}>
                  You haven't placed any orders yet.
                </div>
              )}
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

export default ProfileScreen
