import * as React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import uOfCLogo from '../../assets/uofc_logo.jpg';

const title = 'Bachelor of Science';
const subtitle = 'in Software Engineering';

const points: string[] = [
  'Schulich School of Engineering, University of Calgary',
  'Completed the Engineering Internship Program',
  'Graduated with distinction',
  'Cumulative GPA: 3.40',
];

export const Education = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div>
          <Typography
            variant="h5"
            color="secondary"
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            color="secondary"
            gutterBottom={true}
          >
            {subtitle}
          </Typography>
          {points.map((point) => (
            <Typography key={point}>{point}</Typography>
          ))}
        </div>
        <div className={classes.logo}>
          <img
            src={uOfCLogo}
            alt="university-of-calgary-logo"
          />
        </div>
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
  logo: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '10px',
    },
  },
}));
