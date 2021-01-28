import React from 'react';
import { makeStyles } from '@material-ui/styles';
import logo from '../../assets/logotranspbg.png';
import Search from './Search';
import UserIcon from '@material-ui/icons/Person';
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExpandIcon from '@material-ui/icons/ExpandMore';
import RightArrowIcon from '@material-ui/icons/ArrowForwardIos';
import MenuIcon from '@material-ui/icons/MenuRounded';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  // --------------------------------------------------- LAYOUT
  root: {
    backgroundColor: theme.palette.common.white,
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1200,
  },
  container: {
    // border: '1px solid blue',
    ...theme.utils.container,
    padding: '0 3rem',
    [theme.breakpoints.down('md')]: {
      padding: '0 .8rem',
    },
  },
  navbar: {
    // border: '1px solid magenta',
    ...theme.flex.col,
    alignItems: 'space-between',
  },
  topBar: {
    // border: '1px solid magenta',
    backgroundColor: theme.palette.common.white,
    ...theme.flex.row,
    justifyContent: 'space-between',
    padding: '1.75rem 0',
  },

  // ----------------------------------------------- MENU BTN
  menuBtnContainer: {
    display: 'none',
    outline: 'none',
    minHeight: 35,
    flex: 1,
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      width: 'auto',
    },
  },
  menuIcon: {
    color: theme.palette.primary.main,
    fontSize: '2rem',
  },
  // ------------------------------------------- SIDE ICONS
  sideIconCart: {
    color: theme.palette.text.primary,
    height: '2rem',
    marginLeft: '1rem',
  },
  sideIconUser: {
    color: theme.palette.text.primary,
    height: '2rem',
    marginLeft: '1rem',
  },

  // ------------------------------------------- LOGO
  logoContainer: {
    textAlign: 'center',
    flex: 1,
  },
  logo: {
    height: '4rem',
    [theme.breakpoints.down('md')]: {
      height: '3.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '2.8rem',
    },
  },
  icons: {
    // border: '1px solid lime',
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
  // ------------------------------------------------ NAVIGATION
  menuBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  navigation: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    margin: 0,
  },
  tab: {
    ...theme.typography.balsamiq,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px 20px',
    cursor: 'pointer',
    // border: "1px solid red",
    position: 'relative',
    '&:hover $dropdown': {
      display: 'block',
    },
  },
  dropdown: {
    position: 'absolute',
    display: 'none',
    // border: "1px solid blue",
    backgroundColor: theme.palette.common.white,
    top: '100%',
    left: 0,
    boxShadow: `0px 2px 3px ${theme.palette.common.pinkShadow}`,
  },
  submenu: {
    listStyle: 'none',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    marginRight: '2rem',
  },
  submenuItem: {
    display: 'block',
    fontFamily: 'Open Sans',
    fontSize: '.85rem',
    padding: '.6rem',
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  submenuFlex: {
    display: 'flex',
  },
  expandIcon: {
    color: theme.palette.text.secondary,
    fontSize: '0.85rem',
    margin: '3px 0px 0px 5px',
  },

  // -------------------------------------------- DRAWER
  drawer: {
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: theme.palette.common.white,
    height: '100%',
    width: '100%',
    zIndex: 10,
    paddingLeft: 0,
  },
  drawerNav: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1rem',
  },
  drawerItem: {
    display: 'flex',
    width: 'calc(100% - 40px)',
    justifyContent: 'space-between',
    padding: '1rem',
  },
  drawerIconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerIcon: {
    color: theme.palette.primary.main,
    fontSize: '1rem',
  },
  closeIconContainer: {
    padding: '.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    fontSize: '1.4rem',
    color: theme.palette.primary.main,
  },
}));

const Header = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div className={classes.container}>
        <div className={classes.navbar}>
          <div className={classes.topBar}>
            <div
              className={classes.menuBtnContainer}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <MenuIcon className={classes.menuIcon} />
            </div>

            <Search />

            <div className={classes.logoContainer}>
              <img className={classes.logo} src={logo} alt='company logo' />
            </div>

            <div className={classes.icons}>
              <div></div>
              <div></div>
              <UserIcon className={classes.sideIconUser} />
              <CartIcon className={classes.sideIconCart} />
            </div>
          </div>

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
                <div className={classes.drawerText}>Nowości</div>
              </li>
              <Divider />
              <li
                className={classes.drawerItem}
                onClick={() => setOpenDrawer(false)}
              >
                <div className={classes.drawerText}>Promocje</div>
                <div className={classes.drawerIconContainer}>
                  <RightArrowIcon className={classes.drawerIcon} />
                </div>
              </li>
              <Divider />
              <li
                className={classes.drawerItem}
                onClick={() => setOpenDrawer(false)}
              >
                <div className={classes.drawerText}>Makijaż</div>
                <div className={classes.drawerIconContainer}>
                  <RightArrowIcon className={classes.drawerIcon} />
                </div>
              </li>
              <Divider />
              <li
                className={classes.drawerItem}
                onClick={() => setOpenDrawer(false)}
              >
                <div className={classes.drawerText}>Włosy</div>
                <div className={classes.drawerIconContainer}>
                  <RightArrowIcon className={classes.drawerIcon} />
                </div>
              </li>
              <Divider />
              <li
                className={classes.drawerItem}
                onClick={() => setOpenDrawer(false)}
              >
                <div className={classes.drawerText}>Paznokcie</div>
                <div className={classes.drawerIconContainer}>
                  <RightArrowIcon className={classes.drawerIcon} />
                </div>
              </li>
              <Divider />
              <li
                className={classes.drawerItem}
                onClick={() => setOpenDrawer(false)}
              >
                <div className={classes.drawerText}>Skóra</div>
                <div className={classes.drawerIconContainer}>
                  <RightArrowIcon className={classes.drawerIcon} />
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

          <nav className={classes.menuBar}>
            <ul className={classes.navigation}>
              <li className={classes.tab}>
                <div>New</div>
                <ExpandIcon className={classes.expandIcon} />
              </li>
              <li className={classes.tab}>
                <div>Honeys</div>
                <ExpandIcon className={classes.expandIcon} />
                <div className={classes.dropdown}>
                  <ul className={classes.submenu}>
                    <li className={classes.submenuItem}>All honeys</li>
                    <li className={classes.submenuItem}>Creamed honeys</li>
                    <li className={classes.submenuItem}>
                      Honeys with additives
                    </li>
                    <li className={classes.submenuItem}>Accessories</li>
                  </ul>
                </div>
              </li>

              <li className={classes.tab}>
                <div>Bees products</div>
                <ExpandIcon className={classes.expandIcon} />
                <div className={classes.dropdown}>
                  <ul className={classes.submenu}>
                    <li className={classes.submenuItem}>Bee feathers</li>
                    <li className={classes.submenuItem}>Propolis</li>
                    <li className={classes.submenuItem}>Bee pollen</li>
                    <li className={classes.submenuItem}>Bee milk</li>
                    <li className={classes.submenuItem}>Beewax candles</li>
                  </ul>
                </div>
              </li>

              <li className={classes.tab}>
                <div>Oils</div>
                <ExpandIcon className={classes.expandIcon} />
              </li>
              <li className={classes.tab}>
                <div>Gift sets</div>
                <ExpandIcon className={classes.expandIcon} />
              </li>
              <li className={classes.tab}>
                <div>Special offer</div>
                <ExpandIcon className={classes.expandIcon} />
              </li>
              <li className={classes.tab}>
                <div>Beauty and Care</div>
                <ExpandIcon className={classes.expandIcon} />
              </li>
              <li className={classes.tab}>
                <div>Sale</div>
                <ExpandIcon className={classes.expandIcon} />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
