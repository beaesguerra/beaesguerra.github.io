import { Theme, createMuiTheme, responsiveFontSizes } from '@material-ui/core';

export const theme: Theme = responsiveFontSizes(createMuiTheme({
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
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: 'Glegoo, serif',
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: 'Glegoo, serif',
      letterSpacing: '4px',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: '"Poppins", sans-serif',
      letterSpacing: '2px',
    },
    body1: {
      fontFamily: '"Poppins", sans-serif',
    },
    body2: {
      fontFamily: '"Poppins", sans-serif',
    },
    caption: {
      fontFamily: '"Poppins", sans-serif',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontFamily: '"Poppins", sans-serif',
    },
  },
}));
