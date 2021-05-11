import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  container: {
    maxWidth: 1300,
    minHeight: 200,
    margin: "auto",
    padding: "0px 15px",
  },
  gridContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "2rem",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    padding: "2rem",
    minWidth: 200,
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
      padding: "1rem",
    },
  },
  columnHeader: {
    fontFamily: "Bree Serif",
    fontSize: "1.2rem",
    padding: ".8rem .3rem",
  },
  link: {
    fontFamily: "Open Sans",
    fontSize: ".9rem",
    padding: ".3rem",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.common.blue,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: ".8rem",
    },
  },
  social: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      padding: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
    "&:before": {
      content: '""',
      width: "30%",
      height: 1,
      backgroundColor: "white",
      position: "absolute",
      top: 0,
      [theme.breakpoints.down("md")]: {
        width: "50%",
      },
    },
  },
  socialIcon: {
    fontSize: "3rem",
    margin: "1rem",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.common.blue,
    },
  },
  anchor: {
    color: "white",
  },
}))

const Footer = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.gridContainer}>
          <div className={classes.column}>
            <div className={classes.columnHeader}>Moje konto</div>
            <div className={classes.link}>Utworz konto</div>
            <div className={classes.link}>Koszyk</div>
            <div className={classes.link}>Moje transakcje</div>
            <div className={classes.link}>Modyfikuj subskrypcje</div>
          </div>
          <div className={classes.column}>
            <div className={classes.columnHeader}>Fjufjushop</div>
            <div className={classes.link}>Kontakt</div>
            <div className={classes.link}>Informacje</div>
            <div className={classes.link}>Mozliwosci wspolpracy</div>
            <div className={classes.link}>Pomoc</div>
          </div>
          <div className={classes.column}>
            <div className={classes.columnHeader}>Regulaminy</div>
            <div className={classes.link}>Warunki ogolne</div>
            <div className={classes.link}>Dostawa</div>
            <div className={classes.link}>Reklamacje i zwroty</div>
            <div className={classes.link}>Promocje</div>
          </div>
        </div>

        <div className={classes.social}>
          <a
            className={classes.anchor}
            href="http://www.facebook.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FacebookIcon className={classes.socialIcon} />
          </a>
          <a
            className={classes.anchor}
            href="http://www.instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon className={classes.socialIcon} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
