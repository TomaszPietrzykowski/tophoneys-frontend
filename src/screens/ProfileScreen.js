import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, TextField } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Message from "../components/Message";
import Loader from "../components/Loader";
import CancelIcon from "@material-ui/icons/Cancel";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { listMyOrders } from "../actions/orderActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

const StyledTableCell = withStyles((theme) => ({
  root: {
    ...theme.typography.source,
  },
}))(TableCell);

const CssTextField = withStyles((theme) => ({
  root: {
    "& label.Mui-focused": {
      color: theme.palette.primary.main,
    },
    "& .MuiOutlinedInput-root": {
      ...theme.typography.source,
      color: theme.palette.text.secondary,
      "& fieldset": {
        borderColor: theme.palette.text.secondary,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.light,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
      // "& .MuiOutlinedInput-input": {
      //   padding: "1rem .8rem",
      // },
    },
  },
}))(TextField);

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.typography.source,
    marginTop: "15rem",
  },
  title: {
    ...theme.typography.prosto,
    marginBottom: "2rem",
  },
  form: {
    ...theme.flex.col,
    alignItems: "flex-start",
    "& > *": {
      marginBottom: "2rem",
      width: "auto",
    },
  },
  submitBtn: {
    backgroundColor: theme.palette.primary.main,
    padding: ".5rem 3rem",
    ...theme.typography.open,
    fontWeight: 600,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  table: {
    minWidth: 500,
  },
  tableContainer: {
    overflowX: "scroll",
  },
}));

const ProfileScreen = ({ location, history }) => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  // STATE
  const { loading, error, user } = useSelector((state) => state.userDetails);
  const { loading: loadingOrders, error: errorOrders, orders } = useSelector(
    (state) => state.orderMyList
  );
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.userUpdateProfile);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      dispatch(listMyOrders());
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
        // dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [userInfo, user, history, dispatch, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <Grid container className={classes.container}>
      <Grid item md={3}>
        <h2 className={classes.title}>User profile</h2>
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
            Update
          </Button>
        </form>
      </Grid>
      <Grid item md={9}>
        <h2 className={classes.title}>My orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant="error" message={error} />
        ) : (
          <div className={classes.tableContainer}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell className={classes.cell}>
                      ID
                    </StyledTableCell>
                    <StyledTableCell>DATE</StyledTableCell>
                    <StyledTableCell>TOTAL</StyledTableCell>
                    <StyledTableCell>PAID</StyledTableCell>
                    <StyledTableCell>SENT</StyledTableCell>
                    <StyledTableCell></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order._id}>
                      <StyledTableCell component="th" scope="row">
                        {order._id}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {order.createdAt.substring(0, 10)}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {order.totalPrice}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {order.isPaid ? (
                          order.paidAt.substring(0, 10)
                        ) : (
                          <CancelIcon />
                        )}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {order.isDelivered ? (
                          order.deliveredAt.substring(0, 10)
                        ) : (
                          <CancelIcon />
                        )}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        <Link to={`/order/${order._id}`}>
                          <button>details</button>
                        </Link>
                      </StyledTableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

export default ProfileScreen;
