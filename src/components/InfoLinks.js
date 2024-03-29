import React from "react";
import { makeStyles } from "@material-ui/styles";
import TruckIcon from "@material-ui/icons/LocalShipping";
import TimerIcon from "@material-ui/icons/Timer";
import GiftIcon from "@material-ui/icons/Redeem";
import SecurityIcon from "@material-ui/icons/Security";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    ...theme.typography.prosto,
    margin: ".3rem 0",
    overflow: "hidden",
  },
  links: {
    height: 41,
    display: "grid",
    gridTemplateColumns: "repeat(4, 25%)",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "200%",
      animationName: "$slideTablet",
      animationDuration: "14s",
      animationIterationCount: "infinite",
    },
    [theme.breakpoints.down("sm")]: {
      width: "400%",
      animationName: "$slideMobile",
      animationDuration: "20s",
      animationIterationCount: "infinite",
    },
    [theme.breakpoints.down("xs")]: {
      width: "400vw",
    },
  },
  tab: {
    display: "flex",
    padding: "0 auto",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    whiteSpace: "nowrap",
    mihHeight: "2rem",
    textAlign: "center",
  },
  text: {
    fontSize: ".8rem",
    color: theme.palette.text.primary,
    opacity: 0.7,
  },
  icon: {
    color: theme.palette.primary.main,
    fontSize: 16,
    marginRight: "0.4rem",
  },
  "@keyframes slideTablet": {
    "0%": {
      transform: "translateX(0%)",
    },
    "45%": {
      transform: "translateX(0%)",
    },
    "50%": {
      transform: "translateX(-50%)",
    },
    "95%": {
      transform: "translateX(-50%)",
    },
    "100%": {
      transform: "translateX(0%)",
    },
  },
  "@keyframes slideMobile": {
    "0%": {
      transform: "translateX(0%)",
    },
    "23%": {
      transform: "translateX(0%)",
    },
    "25%": {
      transform: "translateX(-25%)",
    },
    "48%": {
      transform: "translateX(-25%)",
    },
    "50%": {
      transform: "translateX(-50%)",
    },
    "73%": {
      transform: "translateX(-50%)",
    },
    "75%": {
      transform: "translateX(-75%)",
    },
    "98%": {
      transform: "translateX(-75%)",
    },
    "100%": {
      transform: "translateX(0%)",
    },
  },
}));

const InfoLinks = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.links}>
        <div className={classes.tab}>
          <TimerIcon className={classes.icon} />
          <div className={classes.text}>Fast delivery</div>
        </div>
        <div className={classes.tab}>
          <TruckIcon className={classes.icon} />
          <div className={classes.text}>Free delivery from &euro; 49</div>
        </div>
        <div className={classes.tab}>
          <GiftIcon className={classes.icon} />
          <div className={classes.text}>Free gift with order</div>
        </div>
        <div className={classes.tab}>
          <SecurityIcon className={classes.icon} />
          <div className={classes.text}>Secure shopping via SSL</div>
        </div>
      </div>
    </div>
  );
};

export default InfoLinks;
