import * as React from 'react'
import Section from '../components/application/section'
import WorkBlock, { WorkBlockProps } from '../components/blocks/work-block';
import Display from '../components/design-system/display';
import StackList from '../components/design-system/stack-list';
import BenevityLogo from '../images/benevity-logo.png';
import OpenhouseAiLogo from '../images/openhouse-ai-logo.png'
import PasonLogo from '../images/pason-logo.jpg'
import Text from '../components/design-system/text';
import ExternalLink from '../components/design-system/external-link';

const WorkExperienceSection = () => {
  const workBlocks: WorkBlockProps[] = [
    {
      logo: (
        <a
          href="https://benevity.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={BenevityLogo} alt="Benevity Logo" className="h-10" />
        </a>
      ),
      company: 'Benevity',
      roles: [
        {
          title: 'Frontend Developer, Design Systems (Software Developer III)',
          description: (
            <>
              <Text tag="p">
                Created tokens, styling utilities, components, and documentation for <ExternalLink href="https://skyline.benevity.org/">Benevity’s design system, Skyline</ExternalLink>.
                Collaborated closely with the design system designer to clarify requirements, ensure consistency between Figma and code components, and provide feedback around accessibility considerations, edge cases, and technical constraints.
              </Text>
              <Text tag="p">  
                Established a process for building design system components that fulfill requirements for: visual styling, accessibility, responsiveness, browser support, code quality, testing, performance, content, internationalization, and documentation.
              </Text>
              <Text tag="p">
                Developed unit tests, end-to-end tests for interactions and keyboard navigation, and visual regression tests.
                Performed code maintenance, including a substantial migration from Vue 2 to Vue 3.
              </Text>
              <Text tag="p">
                Provided reliable support for developers and designers on how to best use the design system.
                Mentored developers that were keen to develop their frontend skills.
                Advocated for accessibility with the Product Experience Inclusive Design Group to raise awareness and bring accessibility into processes.
              </Text>
            </>
          ),
          keywords: [
            'Design system',
            'Accessibility',
            'TypeScript',
            'Vue',
            'Sass',
            'Tokens',
            'VuePress',
            'Storybook',
            'Chromatic',
            'BackstopJS',
            'Jest',
            'Cypress',
            'Figma',
            'Documentation',
            'Process',
            'Developer support',
            'Mentorship',
          ],
        },
        {
          title: 'Software Developer II',
          description: (
            <>
              <Text tag="p">
                Developed features for a white-label web application for workplace giving with
                responsiveness, accessibility, localization, and browser compatibility in mind.
                Created reusable and modular components covered by thorough automated unit tests.
              </Text>
              <Text>
                Wrote JMeter load tests for a microservice to gather baseline performance metrics.
              </Text>
              <Text tag="p">
                Remediated accessibility issues on numerous parts of the product to adhere to WCAG 2.1 Level A & AA.
              </Text>
            </>
          ),
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
      company: 'OpenHouse.ai',
      logo: (
        <a
          href="https://openhouse.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={OpenhouseAiLogo} alt="OpenHouse.Ai Logo" className="h-14" />
        </a>
      ),
      roles: [
        {
          title: 'Full Stack Software Developer',
          description: (
            <>
              <Text tag="p">
                Established frontend architecture for multiple web applications:
                a white-label product for home builders, a content management system,
                and a custom analytics dashboard. Developed an internal React component package.
                Created mockups in Figma to communicate ideas to the team about product feature designs,
                user workflows, and data visualizations.
              </Text>
              <Text tag="p">
                Integrated CircleCI workflows to run automated tests, versioning, and deployments.
                Implemented microservices with REST APIs and event driven architecture.
              </Text>
              <Text tag="p">
                Led Scrum for a team of six, mentored entry-level developers on software development best practices and processes, and
                contributed to the company's hiring process for frontend developers.
              </Text>
            </>
          ),
          keywords: [
            'TypeScript',
            'React',
            'Redux',
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
            'Mentorship',
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
          <img src={PasonLogo} alt="Pason Logo" className="h-14" />
        </a>
      ),
      roles: [
        {
          title: 'DataHub Software Developer Intern',
          description: (
            <Text tag="p">
              Worked closely with the User Experience team to implement features for a drilling data web application
              called <a href="https://www.pason.com/products/datahub-with-pason-live" className="underline">Pason Live</a>. Also, implemented a backend service for running scheduled
              tasks for customers, and integrated tools to improve the quality of microservices.
            </Text>
          ),
          keywords: [
            'JavaScript',
            'React',
            'Redux',
            'Java',
            'JMeter',
          ],
        }
      ]
    },
  ];
  return (
    <Section>
      <Display tag="h1" variant="lg">Work Experience</Display>
      <StackList>
        {workBlocks.map((block) => (
          <li key={block.company}>
            <WorkBlock {...block} />
          </li>
        ))}
      </StackList>
    </Section>  
  )
}

export default WorkExperienceSection