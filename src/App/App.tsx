import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { Banner } from '../sections/Banner/Banner';
import { theme } from './theme';
import { hashRoutes } from './routes';

export const App = () => (
  <ThemeProvider theme={theme}>
    <Banner />
    <div
      style={{ height: '100vh', backgroundColor: '#beabea' }}
      id={hashRoutes.EDUCATION}
    >
      education
    </div>
    <div
      style={{ height: '100vh', backgroundColor: '#baebae' }}
      id={hashRoutes.SKILLS}
    >
      skills
    </div>
    <div
      style={{ height: '100vh', backgroundColor: '#beeeea' }}
      id={hashRoutes.WORK}
    >
      work
    </div>
    <div
      style={{ height: '100vh', backgroundColor: '#aebaeb' }}
      id={hashRoutes.PROJECTS}
    >
      projects
    </div>
    <div
      style={{ height: '100vh', backgroundColor: '#aeeeeb' }}
      id={hashRoutes.EXTRA_CURRICULAR}
    >
      extra-curricular
    </div>
  </ThemeProvider>
);
