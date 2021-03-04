import React from "react";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
    outline: "none",
    minHeight: 35,
    flex: 1,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  searchMobile: {
    display: "none",
    outline: "none",
    width: "86%",
    paddingTop: "1rem",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  input: {
    minWidth: 200,
    outline: "none",
    padding: "6px 10px",
    borderRadius: 0,
    fontSize: "15px",
    fontFamily: "inherit",
    border: `1px solid ${theme.palette.primary.main}`,
  },
  inputMobile: {
    width: "calc(100% - 80px)",
    outline: "none",
    padding: "6px 10px",
    borderRadius: 0,
    fontSize: "15px",
    fontFamily: "inherit",
    border: `1px solid ${theme.palette.primary.main}`,
  },
  searchBtn: {
    width: "35px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
    border: "none",
    backgroundColor: theme.palette.primary.main,
    outline: "none",
    cursor: "pointer",
  },
  searchBtnMobile: {
    ...theme.flex.col,
    height: "45px",
    width: "45px",
    borderRadius: 0,
    border: "none",
    backgroundColor: theme.palette.primary.main,
    outline: "none",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      height: "35px",
      width: "35px",
    },
  },
  searchIcon: {
    color: "white",
    height: "20px",
  },
  searchIconMobile: {
    color: "white",
    height: "20px",
  },
}));

const Search = ({ isMobile }) => {
  const classes = useStyles();

  return (
    <form className={isMobile ? classes.searchMobile : classes.search}>
      <input
        type="text"
        className={isMobile ? classes.inputMobile : classes.input}
        placeholder="Szukaj..."
      />
      <button
        type="submit"
        className={isMobile ? classes.searchBtnMobile : classes.searchBtn}
      >
        <SearchIcon className={classes.searchIcon} />
      </button>
    </form>
  );
};

export default Search;
