import * as React from 'react'
import Section from '../components/application/section'
import WorkBlock, { WorkBlockProps } from '../components/blocks/work-block';

const WorkExperienceSection = () => {
  const workBlocks: WorkBlockProps[] = [
    {
      logo: (
        <a
          href="https://benevity.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src={benevityLogo} alt="Benevity Logo" className={classes.logoImg} /> */}
        </a>
      ),
      company: 'Benevity',
      roles: [
        {
          title: 'Software Developer II',
          description: `
            Developed features for a white-label web application for workplace giving with
            responsiveness, accessibility, localization, and browser compatibility in mind.
            Created reusable and modular components covered by thorough automated unit tests.
            Improved accessibility on numerous parts of the product by applying appropriate
            tags/attributes and ensuring that the navigational flow for screen readers is intuitive.
          `,
          keywords: [
            'JavaScript',
            'Vue',
            'Vuex',
            'Jest',
            'Vue Test Utils',
            'Storybook',
            'Chromatic',
            'Figma',
          ],
        }
      ]
    },
    {
      company: 'OpenHouse.AI',
      logo: (
        <a
          href="https://openhouse.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src={openhouseLogo} alt="OpenHouse.Ai Logo" className={classes.logoImg} /> */}
        </a>
      ),
      roles: [
        {
          title: 'Full Stack Software Developer',
          description: `
            Established frontend architecture for multiple web applications:
            a white-label product for home builders, a content management system,
            and a custom analytics dashboard.
            Developed an internal React component package to support customization in
            the white-label application.
            Implemented microservices with REST APIs,
            setup continuous integration for automated testing and deployment workflows.
            Created mockups in Figma to communicate ideas to the team about product feature designs,
            user workflows, and data visualizations.
            Led scrum for a team of six, and
            contributed to the company's hiring process for frontend developers.
          `,
          keywords: [
            'TypeScript',
            'React',
            'Redux',
            'Redux-Saga',
            'Material-UI',
            'Storybook',
            'Jest',
            'React Testing Library',
            'Cypress',
            'Kotlin',
            'Spring Boot',
            'Postgres',
            'Pub/Sub',
            'CircleCI',
            'Figma',
            'Scrum Master',
          ],
          links: [
            {
              label: 'View Products',
              href: 'https://openhouse.ai/',
            },
          ],
        }
      ]
    },
    {
      company: 'Pason Systems',
      logo: (
        <a
          href="https://www.pason.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img src={pasonLogo} alt="Pason Logo" className={classes.logoImg} /> */}
        </a>
      ),
      roles: [
        {
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
        }
      ]
    },
  ];
  return (
    <Section>
      <h2>Work Experience</h2>
      {workBlocks.map((block) => (
        <WorkBlock {...block} />
      ))}
    </Section>  
  )
}

export default WorkExperienceSection