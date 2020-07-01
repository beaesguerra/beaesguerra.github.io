import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { ContactInformation } from '../../components/context/ContactInformation/ContactInformation';

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <ContactInformation />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    padding: '10px',
  },
}));
