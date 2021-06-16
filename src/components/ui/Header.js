import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { makeStyles } from "@material-ui/styles"
import logo from "../../assets/logotranspbg.png"
import Search from "./Search"
import UserIcon from "@material-ui/icons/Person"
import CartIcon from "@material-ui/icons/ShoppingCartOutlined"
import SettingsIcon from "@material-ui/icons/Settings"
import ExpandIcon from "@material-ui/icons/ExpandMore"
import ContractIcon from "@material-ui/icons/ExpandLess"
import MenuIcon from "@material-ui/icons/MenuRounded"
import CloseIcon from "@material-ui/icons/Close"
import Divider from "@material-ui/core/Divider"
import {
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
  IconButton,
  MenuItem,
} from "@material-ui/core"
import { logout } from "../../actions/userActions"

const useStyles = makeStyles((theme) => ({
  // --------------------------------------------------- LAYOUT
  root: {
    backgroundColor: theme.palette.common.white,
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1200,
  },
  container: {
    ...theme.utils.container,
    minHeight: 0,
    ...theme.flex.row,
    justifyContent: "space-between",
    padding: "1.75rem 3rem",
    [theme.breakpoints.down("md")]: {
      padding: ".8rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: ".5rem",
    },
  },
  navbar: {
    ...theme.flex.col,
    alignItems: "space-between",
  },
  topBar: {
    // border: "1px solid green",
    backgroundColor: theme.palette.common.white,
  },

  // ----------------------------------------------- MENU BTN
  menuBtnContainer: {
    display: "none",
    outline: "none",
    minHeight: 35,
    flex: 1,
    [theme.breakpoints.down("md")]: {
      display: "flex",
      width: "auto",
    },
  },
  menuIcon: {
    color: theme.palette.primary.main,
    fontSize: "2rem",
  },
  // ------------------------------------------- SIDE ICONS
  icons: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1rem",
    },
  },
  iconButton: {
    "&:hover": {
      backgroundColor: theme.palette.common.background,
    },
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      padding: ".35rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: ".3rem",
    },
  },
  itemsBadge: {
    ...theme.flex.col,
    position: "absolute",
    top: 8,
    right: 5,
    borderRadius: "50%",
    padding: ".15rem .35rem",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontSize: ".6rem",
    [theme.breakpoints.down("sm")]: {
      top: 0,
      right: 0,
    },
  },
  username: {
    ...theme.typography.mont,
    fontSize: ".9rem",
    fontWeight: 400,
    marginRight: ".5rem",
    paddingTop: ".3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
      marginRight: ".3rem",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  sideIconCart: {
    color: theme.palette.text.primary,
    height: "2rem",
    [theme.breakpoints.down("sm")]: {
      height: "1.2rem",
    },
  },
  sideIconUser: {
    color: theme.palette.text.primary,
    height: "2rem",
    [theme.breakpoints.down("sm")]: {
      height: "1.2rem",
    },
  },
  dropdownItemIcons: {
    ...theme.typography.prosto,
    fontSize: ".8rem",
  },

  // ------------------------------------------- LOGO
  logoContainer: {
    textAlign: "center",
    flex: 1,
  },
  logo: {
    height: "4rem",
    [theme.breakpoints.down("md")]: {
      height: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "2.6rem",
    },
  },
  // ------------------------------------------------ NAVIGATION
  menuBar: {
    background: "rgba(0,0,0,.04)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  navigation: {
    display: "flex",
    justifyContent: "center",
    listStyle: "none",
    margin: 0,
  },
  tab: {
    ...theme.flex.row,
    ...theme.typography.prosto,
    textTransform: "uppercase",
    fontWeight: 600,
    padding: "15px 20px",
    cursor: "pointer",
  },
  navLink: {
    color: theme.palette.text.primary,
    textDecoration: "none",
    transition: "all .2s ease",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  dropdown: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.palette.shadows.primary,
    paddingTop: ".9rem",
    paddingBottom: ".9rem",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  submenu: {
    ...theme.typography.prosto,
    fontSize: ".9rem",
    padding: ".9rem 3rem .9rem 2rem",
    textTransform: "uppercase",
    transition: "all .2s ease",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  submenu2: {
    ...theme.typography.mont,
    fontSize: ".9rem",
    fontWeight: 300,
    padding: ".9rem 3rem .9rem 2rem",
    transition: "all .2s ease",
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },

  expandIcon: {
    color: theme.palette.text.primary,
    opacity: 0.8,
    fontSize: "1.2rem",
  },

  dropdownFlex: {
    ...theme.flex.rowStart,
  },

  // -------------------------------------------- DRAWER
  drawer: {
    ...theme.typography.mont,
    textTransform: "uppercase",
    fontSize: "1rem",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: theme.palette.common.white,
    height: "100%",
    width: "100%",
    maxWidth: 460,
    padding: "0 1rem 5rem",
    transformOrigin: "0% 50%",
    transition: "all .2s ease",
    overflowY: "scroll",
  },
  drawerNav: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "1rem 0 0 1rem",
  },
  drawerItem: {
    ...theme.flex.row,
    justifyContent: "space-between",
  },
  drawerText: {
    padding: "1rem",
    flex: 1,
    cursor: "pointer",
  },
  drawerDropdown: {
    width: "100%",
    transition: "all .2s ease",
    overflow: "hidden",
  },
  drawerTextSmall: {
    padding: "1rem",
    paddingLeft: "2rem",
    flex: 1,
    fontWeight: 300,
    textTransform: "none",
    fontSize: ".9rem",
    cursor: "pointer",
  },
  drawerIconContainer: {
    padding: ".5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  drawerIcon: {
    color: theme.palette.primary.main,
    fontSize: "1.8rem",
  },
  closeIconContainer: {
    padding: ".5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    fontSize: "1.4rem",
    color: theme.palette.primary.main,
  },
}))

const Header = ({ openDrawer, setOpenDrawer }) => {
  // hooks
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  // redux
  const { userInfo } = useSelector((state) => state.userLogin)
  const { cartItems } = useSelector((state) => state.cart)

  // dropdown states:
  const [anchorElUser, setAnchorElUser] = useState(null)
  const [openUser, setOpenUser] = useState(false)
  const [anchorElAdmin, setAnchorElAdmin] = useState(null)
  const [openAdmin, setOpenAdmin] = useState(false)
  const [anchorElHoneys, setAnchorElHoneys] = useState(null)
  const [openHoneys, setOpenHoneys] = useState(false)
  const [anchorElTea, setAnchorElTea] = useState(null)
  const [openTea, setOpenTea] = useState(false)
  const [drawerHoneysOpen, setDrawerHoneysOpen] = useState(false)
  const [drawerTeaOpen, setDrawerTeaOpen] = useState(false)

  //desktop dropdown handlers
  const handleClickUser = (e) => {
    setAnchorElUser(e.currentTarget)
    setOpenUser(true)
  }
  const handleCloseUser = (e) => {
    setAnchorElUser(null)
    setOpenUser(false)
  }
  const handleClickAdmin = (e) => {
    setAnchorElAdmin(e.currentTarget)
    setOpenAdmin(true)
  }
  const handleCloseAdmin = (e) => {
    setAnchorElAdmin(null)
    setOpenAdmin(false)
  }
  const handleClickHoneys = (e) => {
    setAnchorElHoneys(e.currentTarget)
    setOpenHoneys(true)
  }
  const handleCloseHoneys = (e) => {
    setAnchorElHoneys(null)
    setOpenHoneys(false)
  }
  const handleClickTea = (e) => {
    setAnchorElTea(e.currentTarget)
    setOpenTea(true)
  }
  const handleCloseTea = (e) => {
    setAnchorElTea(null)
    setOpenTea(false)
  }
  const handleListKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault()
      setOpenUser(false)
    }
  }
  const handleLogout = () => {
    dispatch(logout())
  }

  // mobile dropdown handlers
  const handleDrawerChoice = (link) => {
    setDrawerHoneysOpen(false)
    setDrawerTeaOpen(false)
    setOpenDrawer(false)
    window.scrollTo(0, 0)
    history.push(link)
  }

  const drawerScale = openDrawer
    ? { transform: "scale(1, 1)" }
    : { transform: "scale(0, 1)" }
  const drawerPureStyle = drawerHoneysOpen
    ? { maxHeight: "41rem" }
    : { maxHeight: 0 }
  const drawerTeaStyle = drawerTeaOpen
    ? { maxHeight: "23.1rem" }
    : { maxHeight: 0 }

  return (
    <header className={classes.root}>
      <div className={classes.navbar}>
        <div className={classes.topBar}>
          <div className={classes.container}>
            <div
              className={classes.menuBtnContainer}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <MenuIcon className={classes.menuIcon} />
            </div>

            <Search />
            <Link to="/">
              <div className={classes.logoContainer}>
                <img className={classes.logo} src={logo} alt="company logo" />
              </div>
            </Link>

            <div className={classes.icons}>
              <IconButton
                className={classes.iconButton}
                aria-owns={anchorElUser ? "dropdown-user" : undefined}
                aria-haspopup={anchorElUser ? true : undefined}
                onMouseOver={(e) => handleClickUser(e)}
                onMouseLeave={handleCloseUser}
              >
                <div className={classes.username}>
                  {userInfo && userInfo.name}
                </div>
                <UserIcon className={classes.sideIconUser} />
              </IconButton>
              <Link to="/cart">
                <IconButton className={classes.iconButton}>
                  <CartIcon className={classes.sideIconCart} />
                  {cartItems && cartItems.length > 0 && (
                    <div className={classes.itemsBadge}>
                      <span>
                        {cartItems.reduce((acc, it) => acc + 1 * it.qty, 0)}
                      </span>
                    </div>
                  )}
                </IconButton>
              </Link>
              {userInfo && userInfo.isAdmin && (
                <IconButton
                  className={classes.iconButton}
                  aria-owns={anchorElAdmin ? "dropdown-admin" : undefined}
                  aria-haspopup={anchorElAdmin ? true : undefined}
                  onMouseOver={(e) => handleClickAdmin(e)}
                  onMouseLeave={handleCloseAdmin}
                >
                  <SettingsIcon className={classes.sideIconUser} />
                </IconButton>
              )}
            </div>
          </div>
        </div>

        {/* Dropdown user */}

        <Popper
          open={openUser}
          anchorEl={anchorElUser}
          role={undefined}
          transition
          disablePortal
          placement="bottom-start"
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: "top left",
              }}
            >
              <Paper className={classes.dropdown} elevation={0}>
                <ClickAwayListener onClickAway={handleCloseUser}>
                  <MenuList
                    autoFocusItem={false}
                    id="dropdown-user"
                    onKeyDown={handleListKeyDown}
                    onMouseLeave={handleCloseUser}
                    onMouseOver={() => setOpenUser(true)}
                    disablePadding
                  >
                    {userInfo && (
                      <Link to="/profile">
                        <MenuItem
                          classes={{ root: classes.dropdownItemIcons }}
                          onClick={(e) => {
                            handleCloseUser(e)
                          }}
                        >
                          Profile
                        </MenuItem>
                      </Link>
                    )}
                    {userInfo && (
                      <Link to="/">
                        <MenuItem
                          classes={{ root: classes.dropdownItemIcons }}
                          onClick={(e) => {
                            handleCloseUser(e)
                            handleLogout()
                          }}
                        >
                          Log out
                        </MenuItem>
                      </Link>
                    )}
                    {!userInfo && (
                      <Link to="/login">
                        <MenuItem
                          classes={{ root: classes.dropdownItemIcons }}
                          onClick={(e) => {
                            handleCloseUser(e)
                          }}
                        >
                          Log in
                        </MenuItem>
                      </Link>
                    )}
                    {!userInfo && (
                      <Link to="/register">
                        <MenuItem
                          classes={{ root: classes.dropdownItemIcons }}
                          onClick={(e) => {
                            handleCloseUser(e)
                          }}
                        >
                          Register
                        </MenuItem>
                      </Link>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>

        {/* Dropdown admin */}

        <Popper
          open={openAdmin}
          anchorEl={anchorElAdmin}
          role={undefined}
          transition
          disablePortal
          placement="bottom-start"
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: "top left",
              }}
            >
              <Paper className={classes.dropdown} elevation={0}>
                <ClickAwayListener onClickAway={handleCloseAdmin}>
                  <MenuList
                    autoFocusItem={false}
                    id="dropdown-admin"
                    onKeyDown={handleListKeyDown}
                    onMouseLeave={handleCloseAdmin}
                    onMouseOver={() => setOpenAdmin(true)}
                    disablePadding
                  >
                    <Link to="/admin/productlist">
                      <MenuItem
                        classes={{ root: classes.dropdownItemIcons }}
                        onClick={(e) => {
                          handleCloseAdmin(e)
                        }}
                      >
                        Products
                      </MenuItem>
                    </Link>
                    <Link to="/admin/orderlist">
                      <MenuItem
                        classes={{ root: classes.dropdownItemIcons }}
                        onClick={(e) => {
                          handleCloseUser(e)
                        }}
                      >
                        Orders
                      </MenuItem>
                    </Link>
                    <Link to="/admin/userlist">
                      <MenuItem
                        classes={{ root: classes.dropdownItemIcons }}
                        onClick={(e) => {
                          handleCloseUser(e)
                        }}
                      >
                        Users
                      </MenuItem>
                    </Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        {/* ----------------------------------------------------------------------------------------- DRAWER */}
        {/* {openDrawer && ( */}
        <ul className={classes.drawer} style={drawerScale}>
          <li className={classes.drawerNav}>
            <div
              className={classes.closeIconContainer}
              onClick={() => setOpenDrawer(false)}
            >
              <CloseIcon className={classes.closeIcon} />
            </div>
          </li>
          <li
            className={classes.drawerItem}
            onClick={() => handleDrawerChoice("/")}
          >
            <div className={classes.drawerText}>Home</div>
          </li>
          <Divider />
          <li
            className={classes.drawerItem}
            onClick={() => handleDrawerChoice("/category/new")}
          >
            <div className={classes.drawerText}>New</div>
          </li>
          <Divider />
          <li
            className={classes.drawerItem}
            onClick={() => handleDrawerChoice("/category/honeys")}
          >
            <div className={classes.drawerText}>All honeys</div>
          </li>
          <Divider />
          <li className={classes.drawerItem}>
            <div
              className={classes.drawerText}
              onClick={() => handleDrawerChoice("/category/purehoneys")}
            >
              Pure honeys
            </div>
            <IconButton
              className={classes.drawerIconContainer}
              onClick={() => setDrawerHoneysOpen(!drawerHoneysOpen)}
            >
              {drawerHoneysOpen ? (
                <ContractIcon className={classes.drawerIcon} />
              ) : (
                <ExpandIcon className={classes.drawerIcon} />
              )}
            </IconButton>
          </li>
          <div className={classes.drawerDropdown} style={drawerPureStyle}>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/acaciahoneys")}
            >
              <div className={classes.drawerTextSmall}>Acacia honey</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/sunflowerhoneys")}
            >
              <div className={classes.drawerTextSmall}>Sunflower honey</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/lindenhoneys")}
            >
              <div className={classes.drawerTextSmall}>Linden honey</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/buckwheathoneys")}
            >
              <div className={classes.drawerTextSmall}>Buckwheat honey</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/multiflowerhoneys")}
            >
              <div className={classes.drawerTextSmall}>Multiflorous honey</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/goldenrodhoneys")}
            >
              <div className={classes.drawerTextSmall}>Goldenrod honey</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/foresthoneys")}
            >
              <div className={classes.drawerTextSmall}>Forest honey</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/raspberryhoneys")}
            >
              <div className={classes.drawerTextSmall}>Raspberry honey</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/corianderhoneys")}
            >
              <div className={classes.drawerTextSmall}>Coriander honey</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/heatherhoneys")}
            >
              <div className={classes.drawerTextSmall}>Heather honey</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/dandelionhoneys")}
            >
              <div className={classes.drawerTextSmall}>Dandelion honey</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/rapeseedhoney")}
            >
              <div className={classes.drawerTextSmall}>Rapeseed honey</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/honeydewhoney")}
            >
              <div className={classes.drawerTextSmall}>Honeydew honey</div>
            </li>
          </div>
          <Divider />

          <li
            className={classes.drawerItem}
            onClick={() => handleDrawerChoice("/category/creamedhoneys")}
          >
            <div className={classes.drawerText}>Creamed honeys</div>
          </li>
          <Divider />

          <li
            className={classes.drawerItem}
            onClick={() => handleDrawerChoice("/category/additives")}
          >
            <div className={classes.drawerText}>Honeys with additives</div>
          </li>
          <Divider />

          <li
            className={classes.drawerItem}
            onClick={() => handleDrawerChoice("/category/accessories")}
          >
            <div className={classes.drawerText}>Accessories</div>
          </li>
          <Divider />

          <li
            className={classes.drawerItem}
            onClick={() => handleDrawerChoice("/category/beeproducts")}
          >
            <div className={classes.drawerText}>Bee products</div>
          </li>
          <Divider />

          <li className={classes.drawerItem}>
            <div
              className={classes.drawerText}
              onClick={() => handleDrawerChoice("/category/tea")}
            >
              Tea
            </div>
            <IconButton
              className={classes.drawerIconContainer}
              onClick={() => setDrawerTeaOpen(!drawerTeaOpen)}
            >
              {drawerTeaOpen ? (
                <ContractIcon className={classes.drawerIcon} />
              ) : (
                <ExpandIcon className={classes.drawerIcon} />
              )}
            </IconButton>
          </li>
          <div className={classes.drawerDropdown} style={drawerTeaStyle}>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/blacktea")}
            >
              <div className={classes.drawerTextSmall}>Black tea</div>
            </li>

            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/fruittea")}
            >
              <div className={classes.drawerTextSmall}>Fruit tea</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/greentea")}
            >
              <div className={classes.drawerTextSmall}>Green tea</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/functionaltea")}
            >
              <div className={classes.drawerTextSmall}>Functional tea</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/rooibos")}
            >
              <div className={classes.drawerTextSmall}>Rooibos</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/yerbamate")}
            >
              <div className={classes.drawerTextSmall}>Yerba Mate</div>
            </li>
            <li
              className={classes.drawerItem}
              onClick={() => handleDrawerChoice("/category/cannedtea")}
            >
              <div className={classes.drawerTextSmall}>Canned tea</div>
            </li>
          </div>
          <Divider />
          <li
            className={classes.drawerItem}
            onClick={() => handleDrawerChoice("/category/giftsets")}
          >
            <div className={classes.drawerText}>Gift sets</div>
          </li>
          <Divider />
          <li
            className={classes.drawerItem}
            onClick={() => handleDrawerChoice("/category/specialoffer")}
          >
            <div className={classes.drawerText}>Special offer</div>
          </li>
        </ul>
        {/* )} */}
        {/* ----------------------------------------------------------------------------------------- DRAWER */}
        <nav className={classes.menuBar}>
          <ul className={classes.navigation}>
            <li className={classes.tab}>
              <Link to="/category/new" className={classes.navLink}>
                <div>New</div>
              </Link>
            </li>
            <div
              aria-owns={anchorElHoneys ? "dropdown-honeys" : undefined}
              aria-haspopup={anchorElHoneys ? true : undefined}
              onMouseOver={(e) => handleClickHoneys(e)}
              onMouseLeave={handleCloseHoneys}
            >
              <Link to="/category/honeys" className={classes.navLink}>
                <li className={classes.tab}>
                  <div>Honeys</div>
                  <ExpandIcon className={classes.expandIcon} />
                </li>
              </Link>
            </div>

            <Popper
              open={openHoneys}
              anchorEl={anchorElHoneys}
              role={undefined}
              transition
              disablePortal
              placement="bottom-start"
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: "top left",
                  }}
                >
                  <Paper className={classes.dropdown} elevation={0}>
                    <ClickAwayListener onClickAway={handleCloseHoneys}>
                      <MenuList
                        autoFocusItem={false}
                        id="dropdown-honeys"
                        onKeyDown={handleListKeyDown}
                        onMouseLeave={handleCloseHoneys}
                        onMouseOver={() => setOpenHoneys(true)}
                        disablePadding
                        className={classes.dropdownFlex}
                      >
                        <div>
                          <MenuItem
                            component={Link}
                            to="/category/purehoneys"
                            classes={{ root: classes.submenu }}
                            value="purehoneys"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Pure honeys:
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/acaciahoneys"
                            classes={{ root: classes.submenu2 }}
                            value="acaciahoneys"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Acacia honey
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/sunflowerhoneys"
                            classes={{ root: classes.submenu2 }}
                            value="sunflowerhoneys"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Sunflower honey
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/lindenhoneys"
                            classes={{ root: classes.submenu2 }}
                            value="lindenhoneys"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Linden honey
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/buckwheathoneys"
                            classes={{ root: classes.submenu2 }}
                            value="buckwheathoneys"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Buckwheat honey
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/mulitiflowerhoneys"
                            classes={{ root: classes.submenu2 }}
                            value="mulitiflowerhoneys"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Multiflorous honey
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/goldenrodhoneys"
                            classes={{ root: classes.submenu2 }}
                            value="goldenrodhoneys"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Goldenrod honeys
                          </MenuItem>
                        </div>
                        <div>
                          <MenuItem
                            component={Link}
                            to="/category/foresthoneys"
                            classes={{ root: classes.submenu2 }}
                            value="foresthoneys"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Forest honey
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/raspberryhoneys"
                            classes={{ root: classes.submenu2 }}
                            value="raspberryhoneys"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Raspberry honey
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/corianderhoneys"
                            classes={{ root: classes.submenu2 }}
                            value="corianderhoneys"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Coriander honey
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/heatherhoneys"
                            classes={{ root: classes.submenu2 }}
                            value="heatherhoneys"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Heather honey
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/dandelionhoneys"
                            classes={{ root: classes.submenu2 }}
                            value="dandelionhoneys"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Dandelion honey
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/rapeseedhoney"
                            classes={{ root: classes.submenu2 }}
                            value="rapeseedhoney"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Rapeseed honey
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/honeydewhoney"
                            classes={{ root: classes.submenu2 }}
                            value="honeydewhoney"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Honeydew honey
                          </MenuItem>
                        </div>
                        <div>
                          <MenuItem
                            component={Link}
                            to="/category/creamedhoneys"
                            classes={{ root: classes.submenu }}
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Creamed honeys
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/additives"
                            classes={{ root: classes.submenu }}
                            value="nl"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Honeys with additives
                          </MenuItem>

                          <MenuItem
                            component={Link}
                            to="/category/accessories"
                            classes={{ root: classes.submenu }}
                            value="nl"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            Accessories
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/honeys"
                            classes={{ root: classes.submenu }}
                            value="honeys"
                            onClick={(e) => {
                              handleCloseHoneys(e)
                            }}
                          >
                            All honeys
                          </MenuItem>
                        </div>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <div>
              <Link to="/category/beeproducts" className={classes.navLink}>
                <li className={classes.tab}>
                  <div>Bee products</div>
                </li>
              </Link>
            </div>
            <div
              aria-owns={"dropdown-tea"}
              aria-haspopup={anchorElTea ? true : undefined}
              onMouseOver={(e) => handleClickTea(e)}
              onMouseLeave={handleCloseTea}
            >
              <Link to="/category/tea" className={classes.navLink}>
                <li className={classes.tab}>
                  <div>Tea</div>
                  <ExpandIcon className={classes.expandIcon} />
                </li>
              </Link>
            </div>

            <Popper
              open={openTea}
              anchorEl={anchorElTea}
              role={undefined}
              transition
              disablePortal
              placement="bottom-start"
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: "top left",
                  }}
                >
                  <Paper className={classes.dropdown} elevation={0}>
                    <ClickAwayListener onClickAway={handleCloseTea}>
                      <MenuList
                        autoFocusItem={false}
                        id="dropdown-tea"
                        onKeyDown={handleListKeyDown}
                        onMouseLeave={handleCloseTea}
                        onMouseOver={() => setOpenTea(true)}
                        disablePadding
                        className={classes.dropdownFlex}
                      >
                        <div>
                          <MenuItem
                            component={Link}
                            to="/category/tea"
                            className={classes.submenu}
                            onClick={(e) => {
                              handleCloseTea(e)
                            }}
                          >
                            All teas
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/blacktea"
                            className={classes.submenu}
                            onClick={(e) => {
                              handleCloseTea(e)
                            }}
                          >
                            Black tea
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/fruittea"
                            className={classes.submenu}
                            onClick={(e) => {
                              handleCloseTea(e)
                            }}
                          >
                            Fruit tea
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/greenteas"
                            className={classes.submenu}
                            onClick={(e) => {
                              handleCloseTea(e)
                            }}
                          >
                            Green tea
                          </MenuItem>
                        </div>
                        <div>
                          <MenuItem
                            component={Link}
                            to="/category/functionaltea"
                            className={classes.submenu}
                            onClick={(e) => {
                              handleCloseTea(e)
                            }}
                          >
                            Functional tea
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/rooibos"
                            className={classes.submenu}
                            onClick={(e) => {
                              handleCloseTea(e)
                            }}
                          >
                            Rooibos
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/yerbamate"
                            className={classes.submenu}
                            onClick={(e) => {
                              handleCloseTea(e)
                            }}
                          >
                            Yerba Mate
                          </MenuItem>
                          <MenuItem
                            component={Link}
                            to="/category/cannedtea"
                            className={classes.submenu}
                            onClick={(e) => {
                              handleCloseTea(e)
                            }}
                          >
                            Canned tea
                          </MenuItem>
                        </div>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <Link to="/category/giftsets" className={classes.navLink}>
              <li className={classes.tab}>
                <div>Gift sets</div>
              </li>
            </Link>
            <Link to="/category/specialoffer" className={classes.navLink}>
              <li className={classes.tab}>
                <div>Special offer</div>
              </li>
            </Link>
            <Link to="/category/sale" className={classes.navLink}>
              <li className={classes.tab}>
                <div>Sale</div>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      {/* </div> */}
    </header>
  )
}

export default Header
