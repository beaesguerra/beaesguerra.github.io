import * as React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import {
  GithubContactInfo,
} from '../../components/basic/ContactInformation/ContactInformationIcons';
import { IProps as IProjectProps, Project } from './Project';
import capstoneImg from '../../assets/capstone.png';
import aut2Talk from '../../assets/Aut2Talk.png';
import dressr from '../../assets/dressr.png';
import uCook from '../../assets/uCook.png';
import terminalFighter from '../../assets/TerminalFighter.png';

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
    bgColor: '#08adad',
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
    bgColor: '#959fc9',
  },
  {
    caption: '2016 CSUS Coding Hackathon - 2nd Place',
    title: 'Dressr',
    subtitle: 'Mobile Development (Android)',
    img: dressr,
    description: `
      Won second place in a hackathon to create a solution
      for an existing 'First World Problem'. Designed and
      implemented the front end of the application to ensure a
      user friendly interface.
    `,
    keywords: ['C++', 'Qt Creator'],
    bgColor: '#ca668e',
  },
  {
    caption: 'Human Computer Interaction Final Project',
    title: 'uCook',
    subtitle: 'UX Design, Implementation, and Usability Testing',
    img: uCook,
    description: `
      Followed a task centered system design methodology to
      design and implement a vertical prototype for a cooking
      application that managed the instructions and timing of multiple recipes concurrently.
    `,
    keywords: ['prototyping', 'UX', 'design', 'WPF', 'C#'],
    bgColor: '#f58377',
  },
  {
    title: 'Terminal Fighter',
    subtitle: 'Game Development',
    img: terminalFighter,
    description: `
      Implemented features for a functional prototype of a typing game.
    `,
    keywords: ['Python'],
    bgColor: '#7c68ab',
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
          key={project.title}
          {...project}
        />
      ))}
    </div>
  );
};

const useStyles = makeStyles({
  intro: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15vh 10px',
  },
  title: {
    padding: '20px 0',
  },
});
