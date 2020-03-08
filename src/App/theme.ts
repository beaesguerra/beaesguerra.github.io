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
      fontSize: '7rem',
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: '"Baloo Chettan 2", cursive',
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
      fontFamily: '"Baloo Chettan 2", cursive',
    },
    body2: {
      fontFamily: '"Baloo Chettan 2", cursive',
    },
    caption: {
      fontFamily: '"Baloo Chettan 2", cursive',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
  },
});
