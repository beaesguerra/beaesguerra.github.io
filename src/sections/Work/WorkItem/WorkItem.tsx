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
      <Hidden smUp={true}>
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
    [theme.breakpoints.down('sm')]: {
      flexGrow: 1,
    },
  },
  workItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '40px 0px',
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      margin: '20px 0px',
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
  title: {
    padding: '10px 0px',
  },
}));
