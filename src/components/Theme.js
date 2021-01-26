import { createMuiTheme } from '@material-ui/core/styles';

const pink = 'rgba(235, 21, 96, 1)';
const pinkShadow = 'rgba(235, 21, 96, .3)';
const lightPink = 'rgba(251, 208, 222, 1)';
const blue = 'rgba(107, 213, 255, 1)';
const white = 'rgba(255, 255, 255, 1)';
const violet = 'rgba(122, 65, 156, 1)';

export default createMuiTheme({
  palette: {
    common: {
      pink: `${pink}`,
      pinkShadow: `${pinkShadow}`,
      lightPink: `${lightPink}`,
      blue: `${blue}`,
      white: `${white}`,
      violet: `${violet}`,
    },
    primary: {
      main: `${pink}`,
    },
    secondary: {
      main: `${violet}`,
    },
  },
  typography: {
    tab: {
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
