import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Banner } from '../sections/Banner/Banner';
import { hashRoutes } from './routes';
import { Footer } from '../sections/Footer/Footer';

const useStyles = makeStyles(muiTheme => ({
  '@global': {
    body: {
      backgroundColor: muiTheme.palette.primary.main,
    },
  },
}));

export const App = () => {
  useStyles();
  return (
    <>
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
      <Footer />
    </>
  );
};
