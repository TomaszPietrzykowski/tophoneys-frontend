import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Search from "../components/ui/Search";
import Showcase from "../components/ui/Showcase";
import Teasers from "../components/ui/Teasers";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    marginTop: 150,
    padding: "15px",
    [theme.breakpoints.down("md")]: {
      marginTop: 130,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 90,
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.container}>
      <Search isMobile={true} />
      <Showcase />
      <Teasers />
    </main>
  );
};

export default Home;
