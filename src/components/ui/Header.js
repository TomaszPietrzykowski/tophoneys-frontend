import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/logotranspbg.png";
import Search from "./Search";
import UserIcon from "@material-ui/icons/Person";
import CartIcon from "@material-ui/icons/ShoppingCartOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import ExpandIcon from "@material-ui/icons/ExpandMore";
import RightArrowIcon from "@material-ui/icons/ArrowForwardIos";
import MenuIcon from "@material-ui/icons/MenuRounded";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import {
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
  IconButton,
  MenuItem,
} from "@material-ui/core";
import { logout } from "../../actions/userActions";

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
    ...theme.flex.row,
    justifyContent: "space-between",
    padding: "1.75rem 3rem",
    [theme.breakpoints.down("md")]: {
      padding: ".8rem",
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
    // border: '1px solid lime',
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  iconButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  username: {
    ...theme.typography.prosto,
    fontSize: ".9rem",
    fontWeight: 400,
    marginRight: ".5rem",
  },
  sideIconCart: {
    color: theme.palette.text.primary,
    height: "2rem",
  },
  sideIconUser: {
    color: theme.palette.text.primary,
    height: "2rem",
  },
  dropdownItemIcons: {
    ...theme.typography.prosto,
    fontSize: ".8rem",
    fontWeight: 400,
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
      height: "2.8rem",
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
  },
  dropdown: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.palette.shadows.primary,
  },
  submenu: {
    ...theme.typography.prosto,
    fontSize: ".9rem",
    padding: ".6rem 3rem .6rem 1.5rem",
    // textTransform: "uppercase",
  },

  expandIcon: {
    color: theme.palette.text.secondary,
    fontSize: "0.85rem",
    margin: "3px 0px 0px 5px",
  },

  // -------------------------------------------- DRAWER
  drawer: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: theme.palette.common.white,
    height: "100%",
    width: "100%",
    zIndex: 10,
    paddingLeft: 0,
  },
  drawerNav: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "1rem",
  },
  drawerItem: {
    display: "flex",
    width: "calc(100% - 40px)",
    justifyContent: "space-between",
    padding: "1rem",
  },
  drawerIconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  drawerIcon: {
    color: theme.palette.primary.main,
    fontSize: "1rem",
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
}));

const Header = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  // dropdown states:
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [openUser, setOpenUser] = useState(false);
  const [anchorElAdmin, setAnchorElAdmin] = useState(null);
  const [openAdmin, setOpenAdmin] = useState(false);
  const [anchorElHoneys, setAnchorElHoneys] = useState(null);
  const [openHoneys, setOpenHoneys] = useState(false);
  const [anchorElBees, setAnchorElBees] = useState(null);
  const [openBees, setOpenBees] = useState(false);
  const [anchorElTea, setAnchorElTea] = useState(null);
  const [openTea, setOpenTea] = useState(false);

  //dropdown handlers
  const handleClickUser = (e) => {
    setAnchorElUser(e.currentTarget);
    setOpenUser(true);
  };
  const handleCloseUser = (e) => {
    setAnchorElUser(null);
    setOpenUser(false);
  };
  const handleClickAdmin = (e) => {
    setAnchorElAdmin(e.currentTarget);
    setOpenAdmin(true);
  };
  const handleCloseAdmin = (e) => {
    setAnchorElAdmin(null);
    setOpenAdmin(false);
  };
  const handleClickHoneys = (e) => {
    setAnchorElHoneys(e.currentTarget);
    setOpenHoneys(true);
  };
  const handleCloseHoneys = (e) => {
    setAnchorElHoneys(null);
    setOpenHoneys(false);
  };
  const handleClickBees = (e) => {
    setAnchorElBees(e.currentTarget);
    setOpenBees(true);
  };
  const handleCloseBees = (e) => {
    setAnchorElBees(null);
    setOpenBees(false);
  };
  const handleClickTea = (e) => {
    setAnchorElTea(e.currentTarget);
    setOpenTea(true);
  };
  const handleCloseTea = (e) => {
    setAnchorElTea(null);
    setOpenTea(false);
  };
  const handleListKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      setOpenUser(false);
    }
  };
  const handleLogout = () => {
    dispatch(logout());
  };

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
                            handleCloseUser(e);
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
                            handleCloseUser(e);
                            handleLogout();
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
                            handleCloseUser(e);
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
                            handleCloseUser(e);
                          }}
                        >
                          Sign up
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
                          handleCloseAdmin(e);
                        }}
                      >
                        Products
                      </MenuItem>
                    </Link>
                    <MenuItem
                      classes={{ root: classes.dropdownItemIcons }}
                      onClick={(e) => {
                        handleCloseUser(e);
                      }}
                    >
                      Orders
                    </MenuItem>
                    <Link to="/admin/userlist">
                      <MenuItem
                        classes={{ root: classes.dropdownItemIcons }}
                        onClick={(e) => {
                          handleCloseUser(e);
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

        {openDrawer && (
          <ul className={classes.drawer}>
            <li className={classes.drawerNav}>
              <div
                className={classes.closeIconContainer}
                onClick={() => setOpenDrawer(false)}
              >
                <CloseIcon className={classes.closeIcon} />
              </div>
            </li>
            <Divider />
            <li
              className={classes.drawerItem}
              onClick={() => setOpenDrawer(false)}
            >
              <div className={classes.drawerText}>Akcesoria</div>
              <div className={classes.drawerIconContainer}>
                <RightArrowIcon className={classes.drawerIcon} />
              </div>
            </li>
            <Divider />
            <li
              className={classes.drawerItem}
              onClick={() => setOpenDrawer(false)}
            >
              <div className={classes.drawerText}>Marki</div>
            </li>
            <Divider />
          </ul>
        )}
        {/* <div className={classes.container}> */}
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
                      >
                        <MenuItem
                          component={Link}
                          to="/category/honeys"
                          classes={{ root: classes.submenu }}
                          value="honeys"
                          onClick={(e) => {
                            handleCloseHoneys(e);
                          }}
                        >
                          All honeys
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/category/creamed"
                          classes={{ root: classes.submenu }}
                          value="nl"
                          onClick={(e) => {
                            handleCloseHoneys(e);
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
                            handleCloseHoneys(e);
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
                            handleCloseHoneys(e);
                          }}
                        >
                          Accessories
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <div
              aria-owns={anchorElBees ? "dropdown-bees" : undefined}
              aria-haspopup={anchorElBees ? true : undefined}
              onMouseOver={(e) => handleClickBees(e)}
              onMouseLeave={handleCloseBees}
            >
              <Link to="/category/beeproducts" className={classes.navLink}>
                <li className={classes.tab}>
                  <div>Bees products</div>
                  <ExpandIcon className={classes.expandIcon} />
                </li>
              </Link>
            </div>

            <Popper
              open={openBees}
              anchorEl={anchorElBees}
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
                    <ClickAwayListener onClickAway={handleCloseBees}>
                      <MenuList
                        autoFocusItem={false}
                        id="dropdown-bees"
                        onKeyDown={handleListKeyDown}
                        onMouseLeave={handleCloseBees}
                        onMouseOver={() => setOpenBees(true)}
                        disablePadding
                      >
                        <MenuItem
                          component={Link}
                          to="/category/beefeathers"
                          classes={{ root: classes.submenu }}
                          onClick={(e) => {
                            handleCloseBees(e);
                          }}
                        >
                          Bee feathers
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/category/propolis"
                          classes={{ root: classes.submenu }}
                          onClick={(e) => {
                            handleCloseBees(e);
                          }}
                        >
                          Propolis
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/category/pollen"
                          classes={{ root: classes.submenu }}
                          onClick={(e) => {
                            handleCloseBees(e);
                          }}
                        >
                          Bee pollen
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/category/beemilk"
                          classes={{ root: classes.submenu }}
                          onClick={(e) => {
                            handleCloseBees(e);
                          }}
                        >
                          Bee milk
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/category/beewaxcandles"
                          classes={{ root: classes.submenu }}
                          onClick={(e) => {
                            handleCloseBees(e);
                          }}
                        >
                          Beewax candles
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <div
              aria-owns={anchorElBees ? "dropdown-tea" : undefined}
              aria-haspopup={anchorElTea ? true : undefined}
              onMouseOver={(e) => handleClickTea(e)}
              onMouseLeave={handleCloseTea}
            >
              <Link to="/category/tea" className={classes.navLink}>
                <li className={classes.tab}>
                  <div>Teas</div>
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
                      >
                        <MenuItem
                          component={Link}
                          to="/category/tea"
                          className={classes.submenu}
                          onClick={(e) => {
                            handleCloseTea(e);
                          }}
                        >
                          All teas
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/category/blacktea"
                          className={classes.submenu}
                          onClick={(e) => {
                            handleCloseTea(e);
                          }}
                        >
                          Black tea
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/category/greentea"
                          className={classes.submenu}
                          onClick={(e) => {
                            handleCloseTea(e);
                          }}
                        >
                          Green tea
                        </MenuItem>
                        <MenuItem
                          component={Link}
                          to="/category/fruittea"
                          className={classes.submenu}
                          onClick={(e) => {
                            handleCloseTea(e);
                          }}
                        >
                          Fruit tea
                        </MenuItem>
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
  );
};

export default Header;
