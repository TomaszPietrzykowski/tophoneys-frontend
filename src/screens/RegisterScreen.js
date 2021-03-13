import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";

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

const RegisterScreen = ({ location, history }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState(null);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();

  const { loading, error, userInfo } = useSelector(
    (state) => state.userRegister
  );

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, redirect, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Sign Up</h1>
      <form onSubmit={submitHandler} className={classes.form}>
        {loading && <Loader />}
        {message && <Message variant="error" message={message} />}
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
          Submit
        </Button>
      </form>
      <div className={classes.links}>
        Already a customer?{" "}
        <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
          Log in
        </Link>
      </div>
    </div>
  );
};

export default RegisterScreen;
