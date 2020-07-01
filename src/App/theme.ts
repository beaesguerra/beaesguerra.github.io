import { Theme, createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const fontFamilies = {
  dancingScript: 'Dancing Script, cursive',
  glegoo: 'Glegoo, serif',
  poppins: 'Poppins, sans-serif',
};

export const colors = {
  turquoise: '#7ebbbb',
  white: '#ffffff',
  teal: '#347c7c',
  darkTurquoise: '#08adad',
  lightPurple: '#959fc9',
  pink: '#ca668e',
  peach: '#f58377',
  purple: '#7c68ab',
};

export const theme: Theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: colors.turquoise,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.teal,
    },
  },
  typography: {
    h1: {
      fontFamily: fontFamilies.dancingScript,
      fontWeight: 'bold',
    },
    h4: {
      fontFamily: fontFamilies.glegoo,
      fontWeight: 'bold',
    },
    h5: {
      fontFamily: fontFamilies.glegoo,
      letterSpacing: '4px',
      fontWeight: 'bold',
    },
    h6: {
      fontFamily: fontFamilies.poppins,
      letterSpacing: '2px',
    },
    body1: {
      fontFamily: fontFamilies.poppins,
    },
    body2: {
      fontFamily: fontFamilies.poppins,
    },
    caption: {
      fontFamily: fontFamilies.poppins,
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontFamily: fontFamilies.poppins,
    },
  },
}));
