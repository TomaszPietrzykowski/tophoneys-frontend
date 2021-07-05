import React from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/styles"
import MenuIcon from "@material-ui/icons/MenuRounded"
import CartIcon from "@material-ui/icons/ShoppingCartOutlined"
import HeartIcon from "@material-ui/icons/Loyalty"
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
    padding: ".5rem 0 .4rem",
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
    ...theme.typography.mont,
    fontSize: ".7rem",
    textTransform: "uppercase",
  },
}))

const BottomNav = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.tab} onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon className={classes.icon} />
          <div className={classes.label}>Menu</div>
        </div>
        <div
          className={classes.tab}
          onClick={() => {
            setOpenDrawer(false)
            history.push("/category/new")
          }}
        >
          <EcoIcon className={classes.icon} />
          <div className={classes.label}>New</div>
        </div>
        <div
          className={classes.tab}
          onClick={() => {
            setOpenDrawer(false)
            history.push("/category/sale")
          }}
        >
          <HeartIcon className={classes.icon} />
          <div className={classes.label}>Sale</div>
        </div>
        <div
          className={classes.tab}
          onClick={() => {
            setOpenDrawer(false)
            history.push("/cart")
          }}
        >
          <CartIcon className={classes.icon} />
          <div className={classes.label}>Cart</div>
        </div>
        <div
          className={classes.tab}
          onClick={() => {
            setOpenDrawer(false)
            history.push("/profile")
          }}
        >
          <UserIcon className={classes.icon} />
          <div className={classes.label}>Profile</div>
        </div>
      </div>
    </div>
  )
}

export default BottomNav
