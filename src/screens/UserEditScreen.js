import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUser } from "../actions/userActions";
import { USER_UPDATE_RESET } from "../constants/userConstants";

const CustomCheckbox = withStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    "&$checked": {
      color: "green",
    },
  },
  checked: {},
}))(Checkbox);

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.col,
    ...theme.typography.source,
    marginTop: "15rem",
    color: theme.palette.text.primary,
  },
  title: {
    ...theme.typography.prosto,
    marginBottom: "2rem",
  },
  form: {
    ...theme.flex.col,
    "& > *": {
      marginBottom: "2rem",
      width: "auto",
    },
  },
  checkboxContainer: {
    ...theme.flex.row,
    justifyContent: "flex-start",
    width: "100%",
  },
  checkboxLabel: {
    fontSize: "1.2rem",
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
}));

const UserEditScreen = ({ match, history }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const userId = match.params.id;

  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.userDetails);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = useSelector((state) => state.userUpdate);

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      history.push("/admin/userlist");
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [dispatch, history, user, userId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: userId, name, email, isAdmin }));
  };

  const adminHandler = (e) => {
    if (
      window.confirm("Are you sure you want to change user's admin status?")
    ) {
      setIsAdmin(e.target.checked);
    }
  };

  return (
    <div className={classes.container}>
      <Link to="/admin/userlist">
        <Button className={classes.backBtn}>&larr; Back</Button>
      </Link>
      <form onSubmit={submitHandler} className={classes.form}>
        <h1 className={classes.title}>Edit user</h1>
        {loading || loadingUpdate ? (
          <Loader />
        ) : error ? (
          <Message variant="error" message={error} />
        ) : errorUpdate ? (
          <Message variant="error" message={errorUpdate} />
        ) : (
          <>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className={classes.checkboxContainer}>
              <CustomCheckbox checked={isAdmin} onChange={adminHandler} />
              <span className={classes.checkboxLabel}>Admin permissions</span>
            </div>
            <Button type="submit" className={classes.submitBtn}>
              Update
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default UserEditScreen;
