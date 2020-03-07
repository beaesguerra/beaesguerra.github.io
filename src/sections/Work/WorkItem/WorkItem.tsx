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
        <Typography gutterBottom={true}>
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
    justifyContent: 'center',
  },
  workItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    flexWrap: 'wrap',
    width: '100%',
  },
  content: {
  },
  description: {
    padding: '20px 0',
  },
}));
