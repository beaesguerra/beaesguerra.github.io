import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Banner } from '../sections/Banner/Banner';
import { hashRoutes } from './routes';
import { Footer } from '../sections/Footer/Footer';
import { Education } from '../sections/Education/Education';
import { Work } from '../sections/Work/Work';

const useStyles = makeStyles(muiTheme => ({
  '@global': {
    body: {
      backgroundColor: 'white',
    },
  },
  section: {
    padding: '15vh 10px',
  },
}));

export const App = () => {
  const classes = useStyles();
  return (
    <>
      <Banner />
      <div
        className={classes.section}
        id={hashRoutes.ABOUT}
      >
        <Education />
      </div>
      {/* <div
        className={classes.section}
        id={hashRoutes.SKILLS}
      >
        skills
      </div> */}
      <div
        className={classes.section}
        id={hashRoutes.WORK}
      >
        <Work />
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
