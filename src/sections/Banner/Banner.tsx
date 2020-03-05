import * as React from 'react';
import { Bubbles } from '../../components/basic/particles/Bubbles/Bubbles';
import { makeStyles, Typography } from '@material-ui/core';

const title = 'Welcome';
const subtitle = 'My name is Bea and I am a software developer. I am passionate about learning and I enjoy using technology to create innovative solutions that help people.';

export const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Bubbles />
      <div className={classes.content}>
        <Typography variant="h1">
          {title}
        </Typography>
        <Typography>
          {subtitle}
        </Typography>
      </div>
    </div>
  );
}

export const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    position: 'absolute',
    textAlign: 'center',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    }
  }
}));
