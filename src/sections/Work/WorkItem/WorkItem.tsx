import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

interface IProps {
  logo: JSX.Element;
  title: string;
  description: string;
}
export const WorkItem = (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.workItem}>
      <div className={classes.logo}>
        {props.logo}
      </div>
      <div className={classes.content}>
        <Typography gutterBottom={true} variant="h5" color="secondary">
          {props.title}
        </Typography>
        <Typography className={classes.description}>
          {props.description}
        </Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      width: '40%',
    },
  },
  workItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  content: {
    [theme.breakpoints.up('sm')]: {
      width: '60%',
    },
  },
  description: {
    padding: '20px 0',
  },
}));
