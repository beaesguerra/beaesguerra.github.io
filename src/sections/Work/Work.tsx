import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import pasonLogo from '../../assets/pason_logo.jpg';
import openhouseLogo from '../../assets/openhouse-ai-logo.png';
import { WorkItem } from './WorkItem/WorkItem';
import { SectionHeader } from '../../components/basic/text/SectionHeader/SectionHeader';

const sectionHeading = 'Work Experience';

export const Work = () => {
  const classes = useStyles();
  const workItems = [
    {
      logo: (
        <a
          href="https://openhouse.ai/"
          target="_blank"
          className={classes.logo}
          rel="noopener noreferrer"
        >
          <img src={openhouseLogo} alt="openhouse-ai-logo" />
        </a>
      ),
      title: 'Full Stack Software Developer',
      description: `
        Established frontend architecture for web applications &
        an internal component library, implemented microservices with REST APIs,
        integrated continuous integration workflows, and led scrum for a team of six.
      `,
      keywords: [
        'TypeScript',
        'React',
        'Redux',
        'Storybook',
        'Kotlin',
        'Spring Boot',
        'Pub/Sub',
        'CircleCI',
      ],
    },
    {
      logo: (
        <a
          href="https://www.pason.com/"
          target="_blank"
          className={classes.logo}
          rel="noopener noreferrer"
        >
          <img src={pasonLogo} alt="pason-logo" />
        </a>
      ),
      title: 'DataHub Software Developer Intern',
      description: `
        Worked closely with UX to implement features for a drilling data web application,
        implemented a backend service for running scheduled tasks for customers,
        and integrated tools to improve the quality of microservices.
      `,
      keywords: [
        'JavaScript',
        'React',
        'Redux',
        'Java',
        'JMeter',
      ],
    },
  ];
  return (
    <div className={classes.container}>
      <SectionHeader text={sectionHeading} />
      <div className={classes.workItems}>
        {workItems.map(item => (
          <WorkItem
            key={item.title}
            title={item.title}
            logo={item.logo}
            description={item.description}
            keywords={item.keywords}
          />
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  workItems: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '70%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  logo: {
    height: 'auto',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  workItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
