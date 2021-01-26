import React from 'react';
import { makeStyles } from '@material-ui/styles';
import logo from '../assets/logotranspbg.png';
import SearchIcon from '@material-ui/icons/Search';
import UserIcon from '@material-ui/icons/Person';
import CartIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExpandIcon from '@material-ui/icons/ExpandMore';
import RightArrowIcon from '@material-ui/icons/ArrowForwardIos';
import MenuIcon from '@material-ui/icons/MenuRounded';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    width: '100%',
    fontFamily: 'Open Sans, sans-serif',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1200,
  },
  container: {
    maxWidth: 1300,
    margin: 'auto',
    padding: '0px 50px',
    [theme.breakpoints.down('md')]: {
      padding: '0px 15px',
    },
  },
  navbar: {
    display: 'flex',
    flexDirection: 'column',
  },
  topBar: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 0px',
  },
  search: {
    display: 'flex',
    outline: 'none',
    minHeight: 35,
    width: '33%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  input: {
    minWidth: 200,
    outline: 'none',
    padding: '6px 10px',
    borderRadius: 0,
    fontSize: '15px',
    fontFamily: 'inherit',
    border: `1px solid ${theme.palette.primary.main}`,
  },
  searchBtn: {
    width: '35px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0,
    border: 'none',
    backgroundColor: theme.palette.primary.main,
    outline: 'none',
    cursor: 'pointer',
  },
  searchIcon: {
    color: 'white',
    height: '20px',
  },

  menuBtnContainer: {
    display: 'none',
    outline: 'none',
    minHeight: 35,
    width: '33%',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      width: 'auto',
    },
  },
  menuBtn: {
    color: theme.palette.primary.main,
    fontSize: '2rem',
  },

  sideIconCart: {
    color: theme.palette.text.primary,
    height: '20px',
    marginLeft: '10px',
  },
  sideIconUser: {
    color: theme.palette.text.primary,
    height: '20px',
    marginLeft: '10px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  currentCartValue: {
    color: theme.palette.text.primary,
    fontSize: '13px',
    fontWeight: 700,
    marginLeft: '10px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  currentCartItems: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: '12px',
    fontWeight: 700,
    marginLeft: '10px',
    borderRadius: '50%',
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: '33%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
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
      height: '2.4rem',
    },
  },
  icons: {
    display: 'flex',
    width: '33%',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
  },
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
    fontFamily: 'Bree Serif',
    fontSize: '18px',
    margin: 0,
  },
  tab: {
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
  submenuItemHead: {
    display: 'block',
    fontFamily: 'Bree Serif',
    fontSize: '1rem',
    padding: '.6rem',
    marginTop: '.5rem',
  },
  submenuFlex: {
    display: 'flex',
  },
  expandIcon: {
    color: theme.palette.text.secondary,
    fontSize: '0.85rem',
    margin: '3px 0px 0px 5px',
  },
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
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.navbar}>
          <div className={classes.topBar}>
            <div
              className={classes.menuBtnContainer}
              onClick={() => setOpenDrawer(!openDrawer)}
            >
              <MenuIcon className={classes.menuBtn} />
            </div>
            <form className={classes.search}>
              <input
                type='text'
                className={classes.input}
                placeholder='Szukaj...'
              />
              <button type='submit' className={classes.searchBtn}>
                <SearchIcon className={classes.searchIcon} />
              </button>
            </form>
            <div className={classes.logoContainer}>
              <img className={classes.logo} src={logo} alt='company logo' />
            </div>
            <div className={classes.icons}>
              <UserIcon className={classes.sideIconUser} />
              <div className={classes.currentCartValue}>0,00</div>
              <CartIcon className={classes.sideIconCart} />
              <div className={classes.currentCartItems}>2</div>
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

          <div className={classes.menuBar}>
            <ul className={classes.navigation}>
              <li className={classes.tab}>
                <div>Nowości</div>
                <ExpandIcon className={classes.expandIcon} />
              </li>
              <li className={classes.tab}>
                <div>Promocje</div>
                <ExpandIcon className={classes.expandIcon} />
                <div className={classes.dropdown}>
                  <ul className={classes.submenu}>
                    <li className={classes.submenuItem}>Promocje</li>
                    <li className={classes.submenuItem}>Wyprzedaże</li>
                  </ul>
                </div>
              </li>

              <li className={classes.tab}>
                <div>Makijaż</div>
                <ExpandIcon className={classes.expandIcon} />
                <div className={classes.dropdown}>
                  <div className={classes.submenuFlex}>
                    <ul className={classes.submenu}>
                      <li className={classes.submenuItemHead}>Twarz</li>
                      <li className={classes.submenuItem}>
                        Pudry,&nbsp;róże,&nbsp;bronzery
                      </li>
                      <li className={classes.submenuItem}>Korektory</li>
                      <li className={classes.submenuItem}>Podkłady</li>
                      <li className={classes.submenuItem}>Glitters</li>
                      <li className={classes.submenuItem}>Rozświetlacze</li>
                      <li className={classes.submenuItem}>
                        Bazy&nbsp;pod&nbsp;makijaż&nbsp;i&nbsp;primer
                      </li>
                      <li className={classes.submenuItem}>Kremy BB i CC</li>
                    </ul>

                    <ul className={classes.submenu}>
                      <li className={classes.submenuItemHead}>Usta</li>
                      <li className={classes.submenuItem}>
                        Kredki&nbsp;do&nbsp;malowania
                      </li>
                      <li className={classes.submenuItem}>Błyszczyki</li>
                      <li className={classes.submenuItem}>Szminki</li>
                      <li className={classes.submenuItem}>Konturówki</li>
                      <li className={classes.submenuItem}>
                        Balsamy&nbsp;do&nbsp;ust
                      </li>
                    </ul>

                    <ul className={classes.submenu}>
                      <li className={classes.submenuItemHead}>Oczy</li>
                      <li className={classes.submenuItem}>
                        Bazy&nbsp;pod&nbsp;cienie
                      </li>
                      <li className={classes.submenuItem}>
                        Cienie&nbsp;do&nbsp;powiek
                      </li>
                      <li className={classes.submenuItem}>
                        Tusze&nbsp;do&nbsp;rzęs
                      </li>
                      <li className={classes.submenuItem}>Eyeliner</li>
                      <li className={classes.submenuItem}>
                        Kredki&nbsp;i&nbsp;cienie&nbsp;do&nbsp;brwi
                      </li>
                      <li className={classes.submenuItem}>
                        Kredki&nbsp;do&nbsp;oczu
                      </li>
                      <li className={classes.submenuItem}>
                        Paletki&nbsp;cieni
                      </li>
                      <li className={classes.submenuItem}>Henna</li>
                      <li className={classes.submenuItem}>
                        Sztuczne&nbsp;rzęsy
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className={classes.tab}>
                <div>Włosy</div>
                <ExpandIcon className={classes.expandIcon} />
                <div className={classes.dropdown}>
                  <ul className={classes.submenu}>
                    <li className={classes.submenuItem}>Szampony</li>
                    <li className={classes.submenuItem}>Odżywki</li>
                    <li className={classes.submenuItem}>Maski</li>
                    <li className={classes.submenuItem}>
                      Olejki&nbsp;i&nbsp;serum
                    </li>
                  </ul>
                </div>
              </li>

              <li className={classes.tab}>
                <div>Paznokcie</div>
                <ExpandIcon className={classes.expandIcon} />
                <div className={classes.dropdown}>
                  <ul className={classes.submenu}>
                    <li className={classes.submenuItem}>Lakiery</li>
                    <li className={classes.submenuItem}>
                      Odżywki&nbsp;i&nbsp;utwardzacze
                    </li>
                    <li className={classes.submenuItem}>Stylizacja</li>
                  </ul>
                </div>
              </li>

              <li className={classes.tab}>
                <div>Skóra</div>
                <ExpandIcon className={classes.expandIcon} />
                <div className={classes.dropdown}>
                  <ul className={classes.submenu}>
                    <li className={classes.submenuItem}>
                      Kremy&nbsp;do&nbsp;twarzy
                    </li>
                    <li className={classes.submenuItem}>
                      Produkty&nbsp;do&nbsp;mycia&nbsp;twarzy
                    </li>
                    <li className={classes.submenuItem}>
                      Balsamy&nbsp;i&nbsp;olejki&nbsp;do&nbsp;ciała
                    </li>
                    <li className={classes.submenuItem}>
                      Toniki&nbsp;i&nbsp;mgielki&nbsp;do&nbsp;ciała
                    </li>
                    <li className={classes.submenuItem}>
                      Pielęgnacja&nbsp;dłoni
                    </li>
                    <li className={classes.submenuItem}>
                      Pielęgnacja&nbsp;stóp
                    </li>
                  </ul>
                </div>
              </li>

              <li className={classes.tab}>
                <div>Akcesoria</div>
                <ExpandIcon className={classes.expandIcon} />
                <div className={classes.dropdown}>
                  <ul className={classes.submenu}>
                    <li className={classes.submenuItem}>
                      Pędzle&nbsp;do&nbsp;makijażu
                    </li>
                    <li className={classes.submenuItem}>
                      Pędzle&nbsp;do&nbsp;malowania&nbsp;ust
                    </li>
                    <li className={classes.submenuItem}>
                      Eyeliner&nbsp;pędzle
                    </li>
                    <li className={classes.submenuItem}>
                      Pędzle&nbsp;-&nbsp;zestawy
                    </li>
                    <li className={classes.submenuItem}>Pincety</li>
                    <li className={classes.submenuItem}>Strugaczki</li>
                    <li className={classes.submenuItem}>Lusterka</li>
                  </ul>
                </div>
              </li>

              <li className={classes.tab}>
                <div>Marki</div>
                <ExpandIcon className={classes.expandIcon} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
