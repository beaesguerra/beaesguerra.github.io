import * as React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import {
  GithubContactInfo,
} from '../../components/context/ContactInformation/ContactInformationIcons';
import { IProps as IProjectProps, Project } from './Project';
import capstoneImg from '../../assets/capstone.png';
import aut2Talk from '../../assets/Aut2Talk.png';
import dressr from '../../assets/dressr.png';
import uCook from '../../assets/uCook.png';
import terminalFighter from '../../assets/TerminalFighter.png';
import { SectionHeader } from '../../components/basic/text/SectionHeader/SectionHeader';
import { colors } from '../../App/theme';

const sectionHeading = 'Projects';
const descriptionLine1 = `
  Here are some of the projects that I've worked on in the past.
`;
const descriptionLine2 = `
  Feel free to check out my GitHub profile to view them!
`;

const projects: IProjectProps[] = [
  {
    caption: 'Engineering Capstone Project Sponsored By Boresha',
    title: 'Agricultural Supply Chain Platform',
    subtitle: 'Mobile, Web, and Backend Application',
    img: capstoneImg,
    imgAltText: `
      A screenshot of a web dashboard that shows admin management capabilities and
      a screenshot of a mobile application that shows information about keeping track
      of milk inventory.
    `,
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
    bgColor: colors.darkTurquoise,
    githubLink: 'https://github.com/agriculture-capstone',
  },
  {
    caption: '2017 Tikkun Olam Makers Makeathon',
    title: 'Aut2Talk',
    subtitle: 'Mobile Development (iOS & Android)',
    img: aut2Talk,
    imgAltText: `
      A collection of screenshots of the mobile application.
      The first screenshot shows a form for setting up a button to
      represent an emotion/activity and video recording. The second
      screenshot shows a collection of these buttons with emojis that
      represent the emotions/activities. The third screenshot shows
      that when a button is pressed, a video is played that shows what
      the emotion/activity looks like.
    `,
    description: `
      Participated in a 72-hour makeathon to create a mobile 
      application that would help people with non-verbal autism 
      communicate their needs and feelings with others. Users
      can use the application to set up buttons representing an emotion or activity.
      When an emotion or activity button is pressed, a short video
      (that was previously recorded during the button set up) is played that
      shows the emotion/activity along with sound. Ideally when the video is first recorded,
      the person recording says aloud what the emotion/activity is so that sound would
      be played during the video when the button is pressed. The intention of this is
      to associate the emotion/activity with the word(s) to encourage communication.
    `,
    keywords: ['JavaScript', 'React Native'],
    bgColor: colors.lightPurple,
    githubLink: 'https://github.com/beaesguerra/Aut2Talk',
    relatedLinks: [
      {
        label: 'Project Information',
        href: 'https://kadimadynamics.com/media/projects/',
      },
      {
        label: 'Featured in Humans of TOM',
        href: 'https://www.instagram.com/p/BYR3VjnBjS6/',
      },
    ],
  },
  {
    caption: '2016 CSUS Coding Hackathon - 2nd Place',
    title: 'Dressr',
    subtitle: 'Mobile Development (Android)',
    img: dressr,
    imgAltText: `
      A collection of screenshots of the mobile application.
      The first screenshot shows images of individual clothing articles.
      The second screenshot shows a shirt randomly paired with pants.
      The third screenshot shows a photo of a shirt with a setting
      to configure it as a top.
    `,
    description: `
      Won second place in a fun hackathon to create a solution
      for an existing 'First World Problem'. The application would
      randomly pick outfits for you based on clothing articles you input
      into the application.
    `,
    keywords: ['C++', 'Qt Creator'],
    bgColor: colors.pink,
    githubLink: 'https://github.com/beaesguerra/dressr',
  },
  {
    caption: 'Human Computer Interaction Final Project',
    title: 'uCook',
    subtitle: 'UX Design, Implementation, and Usability Testing',
    img: uCook,
    imgAltText: `
      A collection of screenshots of the mobile application.
      The first screenshot shows a recipe for garlic bread.
      The second screenshot shows a collection of recipes.
      The third screenshot shows a step for a recipe with a video
      demonstrating the instruction. The fourth screenshot shows
      an overview of multiple recipes that have been selected to
      be prepared together.
    `,
    description: `
      Followed a task centered system design methodology to
      design, test, and implement a vertical prototype for a cooking
      application that managed the instructions and timing of multiple recipes concurrently.
    `,
    keywords: [
      'Prototyping', 'UX', 'Task Centered System Design', 'Usability Testing', 'WPF', 'C#',
    ],
    bgColor: colors.peach,
  },
  {
    title: 'Terminal Fighter',
    subtitle: 'Game Development',
    img: terminalFighter,
    imgAltText: `
      A screenshot of a typing game that shows a player and enemies with words attached to them
    `,
    description: `
      Implemented features for a functional prototype of a typing game.
      As the player types the words attached to enemies, the enemies are
      targeted by different kinds of projectiles.
    `,
    keywords: ['Python'],
    bgColor: colors.purple,
  },
];

export const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SectionHeader text={sectionHeading} />
      <div className={classes.intro}>
        <Typography align="center">
          {descriptionLine1}
        </Typography>
        <Typography align="center">
          {descriptionLine2}
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

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5vh 0',
    [theme.breakpoints.down('sm')]: {
      padding: '10vh 0',
    },
  },
  intro: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10vh 10px',
    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
  },
  title: {
    padding: '20px 0',
  },
}));
