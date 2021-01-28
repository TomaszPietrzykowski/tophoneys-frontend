import React from 'react';
// material-ui
import { makeStyles } from '@material-ui/styles';
// custom
import teaser1 from '../../assets/teaser1.jpg';
import teaser2 from '../../assets/teaser2.jpg';
import teaser3 from '../../assets/teaser3.jpg';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1300,
    margin: '50px',
    marginBottom: '6rem',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      margin: 0,
    },
  },
  teaser: {
    minHeight: 280,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '32%',
    borderRadius: 7,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      margin: '20px 0px',
    },
  },
}));

const Teasers = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div
        className={classes.teaser}
        style={{ backgroundImage: `url(${teaser1})` }}
      ></div>
      <div
        className={classes.teaser}
        style={{ backgroundImage: `url(${teaser2})` }}
      ></div>
      <div
        className={classes.teaser}
        style={{ backgroundImage: `url(${teaser3})` }}
      ></div>
    </div>
  );
};

export default Teasers;
