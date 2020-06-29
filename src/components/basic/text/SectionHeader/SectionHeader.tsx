import * as React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

interface IProps {
  text: string;
}

export const SectionHeader = (props: IProps) => {
  const classes = useStyles();
  return (
    <Typography variant="h1" color="secondary" className={classes.text} align="center">
      {props.text}
    </Typography>
  );
};

const useStyles = makeStyles({
  text: {
    padding: '10px',
    textTransform: 'lowercase',
  },
});
