import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

interface IProps {
  img: string;
  label: string;
  href: string;
}

export const Skill = (props: IProps) => {
  const classes = useStyles();
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <div className={classes.container}>
        <Typography className={classes.label} aria-hidden={true}>
          {props.label}
        </Typography>
        <img src={props.img} alt={props.label} className={classes.image} />
      </div>
    </a>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
  },
  image: {
    width: '7vw',
    height: '7vw',
    margin: '10px',
    objectFit: 'contain',
    [theme.breakpoints.down('md')]: {
      width: '10vw',
      height: '10vw',
    },
    [theme.breakpoints.down('xs')]: {
      width: '20vw',
      height: '20vw',
    },
  },
  label: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    opacity: 0,
    pointer: 'default',
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '10px',
    textAlign: 'center',
    '&:hover': {
      opacity: 0.9,
    },
  },
}));
