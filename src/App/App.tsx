import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Banner } from '../sections/Banner/Banner';
import { hashRoutes } from './routes';
import { Footer } from '../sections/Footer/Footer';
import { Education } from '../sections/Education/Education';

const useStyles = makeStyles(muiTheme => ({
  '@global': {
    body: {
      backgroundColor: 'white',
    },
  },
  spacer: {
    height: '15vh',
    backgroundColor: 'white',
  },
}));

export const App = () => {
  const classes = useStyles();
  return (
    <>
      <Banner />
      <div
        style={{ backgroundColor: 'white' }}
        id={hashRoutes.EDUCATION}
      >
        <div className={classes.spacer} />
        <Education />
        <div className={classes.spacer} />
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
