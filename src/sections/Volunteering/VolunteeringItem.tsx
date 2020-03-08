import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

export interface IProps {
  title: string;
  subtitle: string;
  imgJsx: JSX.Element;
  description: string;
}

export const VolunteeringItem = (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h5" align="center" color="secondary">
        {props.title}
      </Typography>
      <Typography variant="h6" align="center" color="primary">
        {props.subtitle}
      </Typography>
      <Typography className={classes.description}>
        {props.description}
      </Typography>
      <div className={classes.images}>
        {props.imgJsx}
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10vh 10px',
  },
  description: {
    width: '60%',
    padding: '20px 0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexGrow: 1,
    },
  },
  images: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      width: '100%',
      flexDirection: 'column',
    },
  },
}));
