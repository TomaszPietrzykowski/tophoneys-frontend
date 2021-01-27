import React from 'react';
import { makeStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  search: {
    display: 'flex',
    outline: 'none',
    minHeight: 35,
    flex: 1,
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
}));

const Search = () => {
  const classes = useStyles();

  return (
    <form className={classes.search}>
      <input type='text' className={classes.input} placeholder='Szukaj...' />
      <button type='submit' className={classes.searchBtn}>
        <SearchIcon className={classes.searchIcon} />
      </button>
    </form>
  );
};

export default Search;
