import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

interface IProps {
  img: string;
  label: string;
}

export const Skill = (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.label}>
        {props.label}
      </Typography>
      <img src={props.img} alt={props.label} className={classes.image} />
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    position: 'relative',
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  },
  label: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
