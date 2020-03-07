import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import pasonLogo from '../../assets/pason_logo.jpg';
import openhouseLogo from '../../assets/openhouse-ai-logo.png';

export const Work = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography
        variant="h5"
        color="secondary"
        align="center"
        gutterBottom={true}
      >
        Work
      </Typography>
      <div className={classes.workItems}>
        <div className={classes.workItem}>
          <img src={openhouseLogo} alt="openhouse-ai-logo" className={classes.openhouseLogo} />
          <Typography>
            Full Stack Software Developer
          </Typography>
        </div>
        <div className={classes.workItem}>
          <img src={pasonLogo} alt="pason-logo" className={classes.pasonLogo} />
          <Typography>
            DataHub Software Developer Intern
          </Typography>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  workItems: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '60%',
  },
  pasonLogo: {
    height: '80px',
    width: 'auto',
  },
  openhouseLogo: {
    height: '50px',
    padding: '15px',
  },
  workItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
