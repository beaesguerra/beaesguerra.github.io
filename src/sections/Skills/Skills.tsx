import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Skill } from './Skill';
import { SectionHeader } from '../../components/basic/text/SectionHeader/SectionHeader';
import { skillsAssets } from '../../assets/skills/skillsAssets';

const sectionHeading = 'Skills';

const skills = {
  BigQuery: {
    label: 'BigQuery',
    img: skillsAssets.BigQueryLogo,
  },
  CircleCI: {
    label: 'CircleCI',
    img: skillsAssets.CircleCILogo,
  },
  Css: {
    label: 'Css',
    img: skillsAssets.CssLogo,
  },
  Cypress: {
    label: 'Cypress',
    img: skillsAssets.CypressLogo,
  },
  Express: {
    label: 'Express',
    img: skillsAssets.ExpressLogo,
  },
  Figma: {
    label: 'Figma',
    img: skillsAssets.FigmaLogo,
  },
  Flyway: {
    label: 'Flyway',
    img: skillsAssets.FlywayLogo,
  },
  GCP: {
    label: 'GCP',
    img: skillsAssets.GcpLogo,
  },
  Git: {
    label: 'Git',
    img: skillsAssets.GitLogo,
  },
  Html: {
    label: 'Html',
    img: skillsAssets.HtmlLogo,
  },
  Java: {
    label: 'Java',
    img: skillsAssets.JavaLogo,
  },
  JavaScript: {
    label: 'JavaScript',
    img: skillsAssets.JavaScriptLogo,
  },
  Jest: {
    label: 'Jest',
    img: skillsAssets.JestLogo,
  },
  Jmeter: {
    label: 'Jmeter',
    img: skillsAssets.JmeterLogo,
  },
  Kotlin: {
    label: 'Kotlin',
    img: skillsAssets.KotlinLogo,
  },
  NodeJs: {
    label: 'NodeJs',
    img: skillsAssets.NodejsLogo,
  },
  Postgres: {
    label: 'Postgres',
    img: skillsAssets.PostgresLogo,
  },
  Postman: {
    label: 'Postman',
    img: skillsAssets.PostmanLogo,
  },
  PubSub: {
    label: 'PubSub',
    img: skillsAssets.PubSubLogo,
  },
  Python: {
    label: 'Python',
    img: skillsAssets.PythonLogo,
  },
  React: {
    label: 'React',
    img: skillsAssets.ReactLogo,
  },
  Redux: {
    label: 'Redux',
    img: skillsAssets.ReduxLogo,
  },
  SpringBoot: {
    label: 'Spring Boot',
    img: skillsAssets.SpringBootLogo,
  },
  Storybook: {
    label: 'Storybook',
    img: skillsAssets.StorybookLogo,
  },
  TestingLibrary: {
    label: 'Testing Library (React)',
    img: skillsAssets.TestingLibraryLogo,
  },
  TypeScript: {
    label: 'TypeScript',
    img: skillsAssets.TypeScriptLogo,
  },
  Vue: {
    label: 'Vue',
    img: skillsAssets.VueLogo,
  },
};
const programmingLanguages = [
  skills.TypeScript,
  skills.JavaScript,
  skills.Kotlin,
  skills.Java,
  skills.Python,
  skills.NodeJs,
];

const frontendDevelopment = [
  skills.React,
  skills.Redux,
  skills.Html,
  skills.Css,
  skills.Storybook,
  // skills.Sass
  skills.Vue,
];

const backendDevelopment = [
  skills.SpringBoot,
  skills.Postgres,
  skills.Flyway,
  skills.Express,
];

const testing = [
  skills.Jest,
  skills.TestingLibrary,
  skills.Cypress,
  skills.Jmeter,
];

const tools = [
  skills.Git,
  skills.CircleCI,
  skills.Postman,
  skills.Figma,
  skills.GCP,
  skills.PubSub,
  skills.BigQuery,
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
