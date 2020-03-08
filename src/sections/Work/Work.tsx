import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import pasonLogo from '../../assets/pason_logo.jpg';
import openhouseLogo from '../../assets/openhouse-ai-logo.png';
import { WorkItem } from './WorkItem/WorkItem';

export const Work = () => {
  const classes = useStyles();
  const workItems = [
    {
      logo: <img src={openhouseLogo} alt="openhouse-ai-logo" className={classes.openhouseLogo} />,
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
      logo: <img src={pasonLogo} alt="pason-logo" className={classes.pasonLogo} />,
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
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  pasonLogo: {
    height: '80px',
    width: 'auto',
  },
  openhouseLogo: {
    height: '50px',
    padding: '15px',
  },
  workItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
