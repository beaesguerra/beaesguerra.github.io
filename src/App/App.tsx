import React from 'react';
import { Banner } from '../sections/Banner/Banner';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Banner />
    </div>
  </ThemeProvider>
);
