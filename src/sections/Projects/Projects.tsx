import * as React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import {
  GithubContactInfo,
} from '../../components/basic/ContactInformation/ContactInformationIcons';

const title = 'Browse My Projects';
const description = `
  Here are some of the projects that I've worked on.
  Feel free to check out my GitHub profile to view them!
`;

export const Projects = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.intro}>
        <Typography variant="h5" color="secondary" className={classes.title}>
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
        <GithubContactInfo color="#000000" />
      </div>
    </div>
  );
};

const useStyles = makeStyles({
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
});
