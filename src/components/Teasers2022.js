import React from "react";
// material-ui
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
// custom
import t1 from "../assets/t5.jpg";
import t2 from "../assets/t6.jpg";
import t3 from "../assets/t2.png";
import t4 from "../assets/t4.jpg";
import t5 from "../assets/t1.jpg";
import t6 from "../assets/t3.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1400,
    margin: "3rem",
    marginBottom: "9rem",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    [theme.breakpoints.down("md")]: {
      margin: "3rem 0",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr 1fr",
      margin: 0,
      padding: "10px",
    },
  },
  teaser: {
    margin: ".8rem",
    ...theme.flex.col,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: 0,
      padding: "5px",
    },
    transition: "all .3s ease",
    "&:hover": {
      opacity: 0.87,
    },
  },
  img: {
    maxWidth: 380,
    objectFit: "contain",
    // borderRadius: 7,
    [theme.breakpoints.down("xl")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
}));

const Teasers2022 = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Link to="/category/purehoneys">
        <div className={classes.teaser}>
          <img src={t1} alt="pure honeys" className={classes.img} />
        </div>
      </Link>
      <Link to="/category/additives">
        <div className={classes.teaser}>
          <img src={t2} alt="honeys with additives" className={classes.img} />
        </div>
      </Link>
      <Link to="/category/bio">
        <div className={classes.teaser}>
          <img src={t3} alt="bio" className={classes.img} />
        </div>
      </Link>
      <Link to="/category/beeproducts">
        <div className={classes.teaser}>
          <img src={t4} alt="bee products" className={classes.img} />
        </div>
      </Link>
      <Link to="/category/confiture">
        <div className={classes.teaser}>
          <img src={t5} alt="extra jam and confiture" className={classes.img} />
        </div>
      </Link>
      <Link to="/category/softdrinks">
        <div className={classes.teaser}>
          <img src={t6} alt="soft drinks" className={classes.img} />
        </div>
      </Link>
    </div>
  );
};

export default Teasers2022;
