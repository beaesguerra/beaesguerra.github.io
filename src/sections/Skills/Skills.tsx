import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Skill } from './Skill';
import { SectionHeader } from '../../components/basic/text/SectionHeader/SectionHeader';
import { skillsAssets } from '../../assets/skills/skillsAssets';

const sectionHeading = 'Skills';

const skills = {
  bigQuery: {
    label: 'BigQuery',
    img: skillsAssets.bigQueryLogo,
  },
  circleCI: {
    label: 'CircleCI',
    img: skillsAssets.circleCILogo,
  },
  css: {
    label: 'Css',
    img: skillsAssets.cssLogo,
  },
  cypress: {
    label: 'Cypress',
    img: skillsAssets.cypressLogo,
  },
  express: {
    label: 'Express',
    img: skillsAssets.expressLogo,
  },
  figma: {
    label: 'Figma',
    img: skillsAssets.figmaLogo,
  },
  flyway: {
    label: 'Flyway',
    img: skillsAssets.flywayLogo,
  },
  gcp: {
    label: 'GCP',
    img: skillsAssets.gcpLogo,
  },
  git: {
    label: 'Git',
    img: skillsAssets.gitLogo,
  },
  html: {
    label: 'Html',
    img: skillsAssets.htmlLogo,
  },
  java: {
    label: 'Java',
    img: skillsAssets.javaLogo,
  },
  javaScript: {
    label: 'JavaScript',
    img: skillsAssets.javaScriptLogo,
  },
  jest: {
    label: 'Jest',
    img: skillsAssets.jestLogo,
  },
  jmeter: {
    label: 'JMeter',
    img: skillsAssets.jmeterLogo,
  },
  kotlin: {
    label: 'Kotlin',
    img: skillsAssets.kotlinLogo,
  },
  nodeJs: {
    label: 'NodeJs',
    img: skillsAssets.nodejsLogo,
  },
  postgres: {
    label: 'Postgres',
    img: skillsAssets.postgresLogo,
  },
  postman: {
    label: 'Postman',
    img: skillsAssets.postmanLogo,
  },
  pubSub: {
    label: 'PubSub',
    img: skillsAssets.pubSubLogo,
  },
  python: {
    label: 'Python',
    img: skillsAssets.pythonLogo,
  },
  react: {
    label: 'React',
    img: skillsAssets.reactLogo,
  },
  redux: {
    label: 'Redux',
    img: skillsAssets.reduxLogo,
  },
  springBoot: {
    label: 'Spring Boot',
    img: skillsAssets.springBootLogo,
  },
  storybook: {
    label: 'Storybook',
    img: skillsAssets.storybookLogo,
  },
  testingLibrary: {
    label: 'Testing Library (React)',
    img: skillsAssets.testingLibraryLogo,
  },
  typeScript: {
    label: 'TypeScript',
    img: skillsAssets.typeScriptLogo,
  },
  vue: {
    label: 'Vue',
    img: skillsAssets.vueLogo,
  },
};
const programmingLanguages = [
  skills.typeScript,
  skills.javaScript,
  skills.kotlin,
  skills.java,
  skills.python,
  skills.nodeJs,
];

const frontendDevelopment = [
  skills.react,
  skills.redux,
  skills.html,
  skills.css,
  skills.storybook,
  skills.vue,
];

const backendDevelopment = [
  skills.springBoot,
  skills.postgres,
  skills.flyway,
  skills.express,
];

const testing = [
  skills.jest,
  skills.testingLibrary,
  skills.cypress,
  skills.jmeter,
];

const tools = [
  skills.git,
  skills.circleCI,
  skills.postman,
  skills.figma,
  skills.gcp,
  skills.pubSub,
  skills.bigQuery,
];

const skillSections = [
  {
    label: 'Programming Languages',
    skills: programmingLanguages,
  },
  {
    label: 'Frontend Development',
    skills: frontendDevelopment,
  },
  {
    label: 'Backend Development',
    skills: backendDevelopment,
  },
  {
    label: 'Testing',
    skills: testing,
  },
  {
    label: 'Tools',
    skills: tools,
  },
];
interface IProps {
}

export const Skills = (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SectionHeader text={sectionHeading} />
      <div className={classes.content}>
        {skillSections.map((skillSection) => (
          <div className={classes.skillSection}>
            <Typography variant="h5" color="secondary">{skillSection.label}</Typography>
            <div className={classes.skills}>
              {skillSection.skills.map((skillProps) => (
                <Skill {...skillProps} key={skillProps.label} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '60%',
    padding: '10vh 0',
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  skillSection: {
    display: 'flex',
    flexDirection: 'column',
    padding: '5px 0',
  },
  skills: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '10px 0',
  },
}));
