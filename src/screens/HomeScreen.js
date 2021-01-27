import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import Showcase from '../components/ui/Showcase';
import PromoLinks from '../components/ui/PromoLinks';
import Teasers from '../components/ui/Teasers';
// import Brands from "../home/Brands";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.utils.container,
    marginTop: 140,
    padding: '15px',
    [theme.breakpoints.down('md')]: {
      marginTop: 100,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 70,
    },
  },
  searchMobile: {
    display: 'none',
    outline: 'none',
    width: '86%',
    paddingTop: '1rem',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  inputMobile: {
    width: 'calc(100% - 80px)',
    outline: 'none',
    padding: '6px 10px',
    borderRadius: 0,
    fontSize: '15px',
    fontFamily: 'inherit',
    border: `1px solid ${theme.palette.primary.main}`,
  },
  searchBtnMobile: {
    ...theme.flex.col,
    height: '45px',
    width: '45px',
    borderRadius: 0,
    border: 'none',
    backgroundColor: theme.palette.primary.main,
    outline: 'none',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      height: '35px',
      width: '35px',
    },
  },
  searchIconMobile: {
    color: 'white',
    height: '20px',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <PromoLinks />
      <form className={classes.searchMobile}>
        <input
          type='text'
          className={classes.inputMobile}
          placeholder='Szukaj...'
        />
        <button type='submit' className={classes.searchBtnMobile}>
          <SearchIcon className={classes.searchIconMobile} />
        </button>
      </form>
      <Showcase />
      <Teasers />
      {/* <Brands /> */}
    </div>
  );
};

export default Home;
