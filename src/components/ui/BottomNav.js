import React from "react"
import { makeStyles } from "@material-ui/styles"
import MenuIcon from "@material-ui/icons/MenuRounded"
import CartIcon from "@material-ui/icons/ShoppingCartOutlined"
import HeartIcon from "@material-ui/icons/FavoriteBorder"
import EcoIcon from "@material-ui/icons/EcoRounded"
import UserIcon from "@material-ui/icons/PersonOutlineRounded"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    position: "fixed",
    bottom: 0,
  },
  container: {
    maxWidth: 1300,
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
  },
  tab: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    cursor: "pointer",
  },
  icon: {
    fontSize: "2rem",
  },
  label: {
    fontFamily: "Open Sans",
    fontSize: ".7rem",
  },
}))

const BottomNav = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.tab} onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon className={classes.icon} />
          <div className={classes.label}>Menu</div>
        </div>
        <div className={classes.tab}>
          <CartIcon className={classes.icon} />
          <div className={classes.label}>Koszyk</div>
        </div>
        <div className={classes.tab}>
          <HeartIcon className={classes.icon} />
          <div className={classes.label}>Ulubione</div>
        </div>
        <div className={classes.tab}>
          <EcoIcon className={classes.icon} />
          <div className={classes.label}>Nowosci</div>
        </div>
        <div className={classes.tab}>
          <UserIcon className={classes.icon} />
          <div className={classes.label}>Zaloguj</div>
        </div>
      </div>
    </div>
  )
}

export default BottomNav
