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
    }
  }
});
