import * as React from 'react';
import { makeStyles, Typography, Divider, Hidden, useTheme } from '@material-ui/core';
import { Keywords } from '../../../components/basic/Keywords/Keywords';

interface IProps {
  logo: JSX.Element;
  title: string;
  description: string;
  keywords: string[];
}

export const WorkItem = (props: IProps) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <div className={classes.workItem}>
        <div className={classes.logo}>
          {props.logo}
        </div>
        <div className={classes.content}>
          <Typography className={classes.title} variant="h5" color="secondary">
            {props.title}
          </Typography>
          <Typography className={classes.description}>
            {props.description}
          </Typography>
          <Keywords keywords={props.keywords} color={theme.palette.primary.main} />
        </div>
      </div>
      <Hidden mdUp={true}>
        <Divider />
      </Hidden>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    padding: '10px',
    [theme.breakpoints.down('md')]: {
      flexGrow: 1,
    },
  },
  workItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '40px 0px',
    flexGrow: 1,
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      margin: '20px 0px',
      justifyContent: 'center',
    },
  },
  content: {
    width: '60%',
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  description: {
    padding: '20px 0',
  },
  title: {
    padding: '10px 0px',
  },
}));
