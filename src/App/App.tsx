import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Banner } from '../sections/Banner/Banner';
import { hashRoutes } from './routes';
import { Footer } from '../sections/Footer/Footer';
import { Education } from '../sections/Education/Education';
import { Work } from '../sections/Work/Work';
import { Projects } from '../sections/Projects/Projects';

const useStyles = makeStyles(muiTheme => ({
  '@global': {
    body: {
      backgroundColor: 'white',
    },
  },
  section: {
    padding: '10vh 10px',
  },
  spacer: {
    height: '15vh',
  },
}));

export const App = () => {
  const classes = useStyles();
  return (
    <>
      <Banner />
      <div className={classes.spacer} />
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
        id={hashRoutes.PROJECTS}
      >
        <Projects />
      </div>
      <div
        style={{ height: '100vh', backgroundColor: '#aeeeeb' }}
        id={hashRoutes.VOLUNTEERING}
      >
        extra-curricular
      </div>
      <Footer />
    </>
  );
};
