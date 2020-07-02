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
          className={classes.logoLink}
          rel="noopener noreferrer"
        >
          <img src={openhouseLogo} alt="openhouse-ai-logo" className={classes.logoImg} />
        </a>
      ),
      title: 'Full Stack Software Developer',
      description: `
        Established frontend architecture for web applications,
        implemented microservices with REST APIs,
        setup continuous integration and automated deployment workflows,
        led scrum for a team of six,
        contributed to the company's hiring process for frontend developers,
        and mentored several team members.
      `,
      keywords: [
        'TypeScript',
        'React',
        'Redux',
        'Redux-Saga',
        'Storybook',
        'Jest',
        'React Testing Library',
        'Cypress',
        'Kotlin',
        'Spring Boot',
        'Postgres',
        'Pub/Sub',
        'CircleCI',
        'Scrum Master',
      ],
      links: [
        {
          label: 'View Products',
          href: 'https://openhouse.ai/',
        },
      ],
    },
    {
      logo: (
        <a
          href="https://www.pason.com/"
          target="_blank"
          className={classes.logoLink}
          rel="noopener noreferrer"
        >
          <img src={pasonLogo} alt="pason-logo" className={classes.logoImg} />
        </a>
      ),
      title: 'DataHub Software Developer Intern',
      description: `
        Worked closely with a UX team to implement features for a drilling data web application
        called Pason Live. Also, implemented a backend service for running scheduled
        tasks for customers, and integrated tools to improve the quality of microservices.
      `,
      keywords: [
        'JavaScript',
        'React',
        'Redux',
        'Java',
        'JMeter',
      ],
      links: [
        {
          label: 'Article: Pason Live Web App Release',
          href: 'https://www.pason.com/technology/pason-live-launches-in-all-business-units',
        },
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
            relatedLinks={item.links}
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
  logoLink: {
    height: 'auto',
    width: '60%',
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '30%',
    },
  },
  logoImg: {
    width: '100%',
  },
  workItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
