import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { login } from "../actions/userActions";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.flex.col,
    marginTop: "15rem",
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

const LoginScreen = ({ location, history }) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : null;

  const dispatch = useDispatch();

  const { loading, error, userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo) {
      if (redirect) {
        history.push(redirect);
      } else {
        history.goBack();
      }
    }
  }, [userInfo, redirect, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Sign In</h1>
      <form onSubmit={(e) => submitHandler(e)} className={classes.form}>
        {loading && <Loader />}
        {error && <Message variant="error" message={error} />}
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
        <Button type="submit" className={classes.submitBtn}>
          Submit
        </Button>
      </form>
      <div className={classes.links}>
        New customer?{" "}
        <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
          Register
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
