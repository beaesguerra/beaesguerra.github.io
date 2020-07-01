import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { EmailContactInfo,
  GithubContactInfo, LinkedInContactInfo } from './ContactInformationIcons';

export const ContactInformation = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <EmailContactInfo />
      <GithubContactInfo />
      <LinkedInContactInfo />
    </div>
  );
};

const useStyles = makeStyles({
  detail: {
    color: 'white',
    padding: '10px',
  },
  container: {
    padding: '10px',
  },
});
