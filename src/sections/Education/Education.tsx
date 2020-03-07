import * as React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import uOfCLogo from '../../assets/uofc_logo.jpg';

const points: string[] = [
  'Bachelor of Science in Software Engineering',
  'Schulich School of Engineering, University of Calgary',
  'Completed the Engineering Internship Program',
  'Graduated with distinction',
  'Cumulative GPA: 3.40',
];

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
          {points.map((point) => (
            <Typography key={point}>{point}</Typography>
          ))}
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
    justifyContent: 'space-between',
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
