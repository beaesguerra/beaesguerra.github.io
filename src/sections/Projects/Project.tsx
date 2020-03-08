import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Keywords } from '../../components/basic/Keywords/Keywords';

export interface IProps {
  caption: string;
  title: string;
  subtitle: string;
  img: string;
  description: string;
  keywords: string[];
}

export const Project = (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.project}>
      <Typography variant="caption">
        {props.caption}
      </Typography>
      <Typography variant="h5" className={classes.title}>
        {props.title}
      </Typography>
      <img src={props.img} alt={props.title} className={classes.img} />
      <Typography className={classes.description} align="center">
        {props.description}
      </Typography>
      <Keywords keywords={props.keywords} />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  intro: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15vh 0',
  },
  title: {
    padding: '20px 0',
  },
  project: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    width: '70%',
  },
  img: {
    height: '40vh',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      width: '100%',
    },
  },
}));
