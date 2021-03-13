import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
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
}));

const ProfileScreen = ({ location, history }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState(null);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.userDetails);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.userUpdateProfile);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
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
          <TextField
            id="password"
            type="password"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
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
      </Grid>
    </Grid>
  );
};

export default ProfileScreen;
