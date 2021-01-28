import { createMuiTheme } from '@material-ui/core/styles';

const violet = 'rgba(122, 65, 156, 1)';

export default createMuiTheme({
  palette: {
    common: {
      white: `rgba(255, 255, 255, 1)`,
      orange1: 'rgb(253,155,2)',
      orange2: 'rgb(255, 153, 0)',
      orange3: 'rgb(222,114,0)',
      brown1: 'rgb(179, 107, 0)',
      brown2: 'rgb(77, 46, 0)',
    },
    primary: {
      main: `rgb(179, 107, 0)`,
    },
    secondary: {
      main: `rgb(253,153,0)`,
    },
  },
  typography: {
    open: {
      fontFamily: 'Open Sans, sans-serif',
    },
    balsamiq: {
      fontFamily: 'Balsamiq Sans, cursive',
      fontSize: '1rem',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    bree: {
      fontFamily: 'Bree Serif, serif',
    },
    poppins: {
      fontFamily: 'Poppins, sans',
      textTransform: 'none',
      fontWeight: '700',
      fontSize: '1rem',
      marginLeft: '25px',
    },
  },
  flex: {
    col: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  utils: {
    container: {
      maxWidth: 1400,
      margin: 'auto',
    },
  },
  breakpoints: {
    keys: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xxs: 0,
      xs: 360,
      sm: 400,
      md: 600,
      lg: 990,
      xl: 1200,
    },
  },
});
