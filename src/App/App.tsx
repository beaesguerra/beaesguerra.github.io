import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { Banner } from '../sections/Banner/Banner';
import { theme } from './theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <Banner />
  </ThemeProvider>
);
