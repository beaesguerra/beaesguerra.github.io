import { Theme, createMuiTheme } from '@material-ui/core';

export const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7ebbbb',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#347c7c',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Dancing Script, cursive',
    },
    h4: {
      fontFamily: 'Fira Sans, sans-serif',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: 'Poiret One, cursive',
      letterSpacing: '4px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: 'Poiret One, cursive',
      letterSpacing: '2px',
      fontWeight: 'bold',
    },
    body1: {
      fontFamily: 'Fira Sans, sans-serif',
    },
    caption: {
      fontFamily: 'Fira Sans, sans-serif',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
  },
});
