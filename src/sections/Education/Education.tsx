import * as React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { ScrollAnimation } from '../../components/basic/animations/ScrollAnimation/ScrollAnimation';
import { SectionHeader } from '../../components/basic/text/SectionHeader/SectionHeader';
import uOfCLogo from '../../assets/uofc_logo.jpg';

const sectionHeading = 'About';
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
      <SectionHeader text={sectionHeading} />
      <div className={classes.content}>
        <ScrollAnimation animateIn="fadeInLeft" duration={2}>
          <div>
            <Typography
              variant="h5"
              color="secondary"
              className={classes.title}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              color="secondary"
              gutterBottom={true}
              className={classes.title}
            >
              {subtitle}
            </Typography>
            <div className={classes.points}>
              {points.map((point) => (
                <Typography key={point}>{point}</Typography>
              ))}
            </div>
          </div>
        </ScrollAnimation>
        <div className={classes.logo}>
          <ScrollAnimation animateIn="fadeInRight" duration={2}>
            <img
              src={uOfCLogo}
              alt="university-of-calgary-logo"
            />
          </ScrollAnimation>
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
    padding: '10vh 0',
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      justifyContent: 'center',
    },
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
  points: {
    padding: '20px 0',
  },
  title: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
}));
