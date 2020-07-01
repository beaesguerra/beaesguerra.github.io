import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { Skill } from './Skill';
import { SectionHeader } from '../../components/basic/text/SectionHeader/SectionHeader';
import { skillsAssets } from '../../assets/skills/skillsAssets';

const skills = [
  {
    label: 'TypeScript',
    img: skillsAssets.TypeScriptLogo,
  },
  {
    label: 'JavaScript',
    img: skillsAssets.JavaScriptLogo,
  },
  {
    label: 'React',
    img: skillsAssets.ReactLogo,
  },
  {
    label: 'Redux',
    img: skillsAssets.ReduxLogo,
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
