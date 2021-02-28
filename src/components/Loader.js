import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import spinner from "../assets/spinner.gif";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.flex.col,
    minHeight: "20vh",
  },
}));

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={spinner} alt="loading data.." />
    </div>
  );
};

export default Loader;
