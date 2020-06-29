import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Bubbles } from '../../components/basic/particles/Bubbles/Bubbles';
import { ContactInformation } from '../../components/basic/ContactInformation/ContactInformation';
import { Navigation } from '../../components/navigation/Navigation';
import { ScrollAnimation } from '../../components/basic/animations/ScrollAnimation/ScrollAnimation';

const title = 'hello world !';
const subtitle = `
My name is Bea and I am a software developer. 
I am passionate about learning and I enjoy 
using technology to create innovative solutions that help people.`;

export const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.navigation}>
        <Navigation />
      </div>
      <Bubbles />
      <div className={classes.content}>
        <ScrollAnimation animateIn="fadeIn" duration={3} animateOnce={true} offset={undefined}>
          <Typography variant="h1">
            {title}
          </Typography>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" duration={1} delay={1500} animateOnce={true}>
          <Typography className={classes.subtitle}>
            {subtitle}
          </Typography>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounce"
          duration={1}
          delay={3500}
          animateOnce={true}
          offset={undefined}
        >
          <div className={classes.contact}>
            <ContactInformation />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '85vh',
  },
  content: {
    position: 'absolute',
    textAlign: 'center',
    width: '50%',
    marginTop: '50px',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginTop: '40px',
    },
  },
  contact: {
    padding: '20px',
  },
  navigation: {
    backgroundColor: theme.palette.primary.main,
    alignSelf: 'flex-end',
    top: 0,
    position: 'fixed',
    width: '100%',
    zIndex: 1,
  },
  subtitle: {
    padding: '20px',
  },
}));
