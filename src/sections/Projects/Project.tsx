import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Keywords } from '../../components/basic/Keywords/Keywords';

export interface IProps {
  caption?: string;
  title: string;
  subtitle: string;
  img: string;
  description: string;
  keywords: string[];
  bgColor: string;
}

export const Project = (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.project} style={{ backgroundColor: props.bgColor }}>
      {props.caption && (
        <Typography variant="caption" align="center">
          {props.caption}
        </Typography>
      )}
      <Typography variant="h5" align="center">
        {props.title}
      </Typography>
      <Typography variant="h6" align="center">
        {props.subtitle}
      </Typography>
      <img src={props.img} alt={props.title} className={classes.img} />
      <Typography className={classes.description} align="center">
        {props.description}
      </Typography>
      <Keywords keywords={props.keywords} color="#ffffff" />
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
  subtitle: {
    padding: '20px 0',
  },
  project: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: '10vh 10px',
  },
  description: {
    width: '50%',
    padding: '20px 0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexGrow: 1,
    },
  },
  img: {
    height: '50vh',
    width: 'auto',
    padding: '20px 0',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      width: '100%',
    },
  },
}));
