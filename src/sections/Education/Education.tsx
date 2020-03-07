import * as React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import uOfCLogo from '../../assets/uofc_logo.jpg';

export const Education = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography
        variant="h5"
        color="secondary"
        align="center"
        gutterBottom={true}
      >
        Education
      </Typography>
      <div className={classes.content}>
        <div>
          <Typography>
            Bachelor of Science in Software Engineering
          </Typography>
          <Typography>
            Schulich School of Engineering, University of Calgary
          </Typography>
          <Typography>
            Completed the Engineering Internship Program
          </Typography>
          <Typography>
            Graduated with distinction
          </Typography>
          <Typography>
            Cumulative GPA: 3.40
          </Typography>
        </div>
        <img
          src={uOfCLogo}
          alt="university-of-calgary-logo"
        />
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  schulich: {
    height: '180px',
    padding: '10px',
    width: 'auto',
  },
}));
