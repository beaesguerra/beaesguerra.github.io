import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Keywords } from '../../components/basic/Keywords/Keywords';
import {
  GithubProjectInfo,
} from '../../components/basic/ContactInformation/ContactInformationIcons';

export interface IProps {
  caption?: string;
  title: string;
  subtitle: string;
  img: string;
  description: string;
  keywords: string[];
  bgColor: string;
  link?: string;
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
      <Typography variant="h5" align="center" className={classes.title}>
        {props.title}
        {props.link && <GithubProjectInfo link={props.link} />}
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
  project: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: '10vh 0px',
    width: '100vw',
  },
  description: {
    width: '50%',
    padding: '20px 0',
    [theme.breakpoints.down('md')]: {
      width: '90%',
      flexGrow: 1,
    },
  },
  img: {
    height: '50vh',
    width: 'auto',
    padding: '20px 0',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      width: '90%',
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));
