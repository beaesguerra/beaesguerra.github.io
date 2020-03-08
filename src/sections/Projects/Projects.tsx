import * as React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import {
  GithubContactInfo,
} from '../../components/basic/ContactInformation/ContactInformationIcons';
import { IProps as IProjectProps, Project } from './Project';
import capstoneImg from '../../assets/capstone.png';
import aut2Talk from '../../assets/Aut2Talk.png';

const title = 'Browse My Projects';
const description = `
  Here are some of the projects that I've worked on.
  Feel free to check out my GitHub profile to view them!
`;

const projects: IProjectProps[] = [
  {
    caption: 'Engineering Capstone Project Sponsored By Boresha',
    title: 'Agricultural Supply Chain Platform',
    subtitle: 'Mobile, Web, and Backend Application',
    img: capstoneImg,
    description: `
      Developed a mobile application, web dashboard,
      and REST APIs on a backend core service for tracking
      agricultural products between farmers and traders in Africa.
    `,
    keywords: [
      'TypeScript',
      'React Native',
      'Vue',
      'Express',
      'REST API',
    ],
    bgColor: '#959fc9',
  },
  {
    caption: '2017 Tikkun Olam Makers Makeathon',
    title: 'Aut2Talk',
    subtitle: 'Mobile Development (iOS & Android)',
    img: aut2Talk,
    description: `
      Participated in a 72-hour makeathon to create a mobile 
      application that would help people with autism 
      communicate their needs and feelings with others.
    `,
    keywords: ['JavaScript', 'React Native'],
    bgColor: '#beabea',
  },
];

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
      {projects.map((project) => (
        <Project
          {...project}
        />
      ))}
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
