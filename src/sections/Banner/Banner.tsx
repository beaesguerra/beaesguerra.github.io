import * as React from 'react';
import { Bubbles } from '../../components/basic/particles/Bubbles/Bubbles';
import { makeStyles } from '@material-ui/core';

export const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Bubbles />
    </div>
  );
}

export const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: theme.palette.primary.main,
  },
}));
