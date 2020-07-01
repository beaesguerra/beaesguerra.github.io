import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { Skill } from './Skill';
import { SectionHeader } from '../../components/basic/text/SectionHeader/SectionHeader';
import { skillsAssets } from '../../assets/skills/skillsAssets';

const skills = [
  {
    label: 'BigQuery',
    img: skillsAssets.BigQueryLogo,
  },
  {
    label: 'CircleCI',
    img: skillsAssets.CircleCILogo,
  },
  {
    label: 'Css',
    img: skillsAssets.CssLogo,
  },
  {
    label: 'Cypress',
    img: skillsAssets.CypressLogo,
  },
  {
    label: 'Express',
    img: skillsAssets.ExpressLogo,
  },
  {
    label: 'Figma',
    img: skillsAssets.FigmaLogo,
  },
  {
    label: 'Flyway',
    img: skillsAssets.FlywayLogo,
  },
  {
    label: 'GCP',
    img: skillsAssets.GcpLogo,
  },
  {
    label: 'Git',
    img: skillsAssets.GitLogo,
  },
  {
    label: 'Html',
    img: skillsAssets.HtmlLogo,
  },
  {
    label: 'Java',
    img: skillsAssets.JavaLogo,
  },
  {
    label: 'JavaScript',
    img: skillsAssets.JavaScriptLogo,
  },
  {
    label: 'Jest',
    img: skillsAssets.JestLogo,
  },
  {
    label: 'Jmeter',
    img: skillsAssets.JmeterLogo,
  },
  {
    label: 'Kotlin',
    img: skillsAssets.KotlinLogo,
  },
  {
    label: 'NodeJs',
    img: skillsAssets.NodejsLogo,
  },
  {
    label: 'Postgres',
    img: skillsAssets.PostgresLogo,
  },
  {
    label: 'Postman',
    img: skillsAssets.PostmanLogo,
  },
  {
    label: 'PubSub',
    img: skillsAssets.PubSubLogo,
  },
  {
    label: 'Python',
    img: skillsAssets.PythonLogo,
  },
  {
    label: 'React',
    img: skillsAssets.ReactLogo,
  },
  {
    label: 'Redux',
    img: skillsAssets.ReduxLogo,
  },
  {
    label: 'Spring Boot',
    img: skillsAssets.SpringBootLogo,
  },
  {
    label: 'Storybook',
    img: skillsAssets.StorybookLogo,
  },
  {
    label: 'Testing Library (React)',
    img: skillsAssets.TestingLibraryLogo,
  },
  {
    label: 'TypeScript',
    img: skillsAssets.TypeScriptLogo,
  },
  {
    label: 'Vue',
    img: skillsAssets.VueLogo,
  },
];
interface IProps {
}

export const Skills = (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SectionHeader text="Skills" />
      <div className={classes.content}>
        {skills.map((skillProps) => (
          <Skill {...skillProps} key={skillProps.label} />
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '60%',
    padding: '10vh 0',
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      justifyContent: 'center',
    },
  },
}));
