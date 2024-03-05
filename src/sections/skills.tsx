import * as React from 'react'
import Section from '../components/application/section'
import Display from '../components/design-system/display'
import Skill from '../components/context/skill';
import { skillsAssets } from '../images/skills/skillsAssets';

const skills = {
  bigQuery: {
    label: 'BigQuery',
    img: skillsAssets.bigQueryLogo,
    href: 'https://cloud.google.com/bigquery',
  },
  circleCI: {
    label: 'CircleCI',
    img: skillsAssets.circleCILogo,
    href: 'https://circleci.com/',
  },
  css: {
    label: 'Css',
    img: skillsAssets.cssLogo,
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  cypress: {
    label: 'Cypress',
    img: skillsAssets.cypressLogo,
    href: 'https://www.cypress.io/',
  },
  express: {
    label: 'Express',
    img: skillsAssets.expressLogo,
    href: 'https://expressjs.com/',
  },
  figma: {
    label: 'Figma',
    img: skillsAssets.figmaLogo,
    href: 'https://www.figma.com/',
  },
  flyway: {
    label: 'Flyway',
    img: skillsAssets.flywayLogo,
    href: 'https://flywaydb.org/',
  },
  gcp: {
    label: 'GCP',
    img: skillsAssets.gcpLogo,
    href: 'https://cloud.google.com/',
  },
  git: {
    label: 'Git',
    img: skillsAssets.gitLogo,
    href: 'https://git-scm.com/',
  },
  html: {
    label: 'Html',
    img: skillsAssets.htmlLogo,
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  java: {
    label: 'Java',
    img: skillsAssets.javaLogo,
    href: 'https://www.java.com/en/',
  },
  javaScript: {
    label: 'JavaScript',
    img: skillsAssets.javaScriptLogo,
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  jest: {
    label: 'Jest',
    img: skillsAssets.jestLogo,
    href: 'https://jestjs.io/',
  },
  jmeter: {
    label: 'JMeter',
    img: skillsAssets.jmeterLogo,
    href: 'https://jmeter.apache.org/',
  },
  kotlin: {
    label: 'Kotlin',
    img: skillsAssets.kotlinLogo,
    href: 'https://kotlinlang.org/',
  },
  materialUi: {
    label: 'Material-UI',
    img: skillsAssets.materialUiLogo,
    href: 'https://mui.com/',
  },
  nodeJs: {
    label: 'NodeJs',
    img: skillsAssets.nodejsLogo,
    href: 'https://nodejs.org/en/',
  },
  postgres: {
    label: 'PostgreSQL',
    img: skillsAssets.postgresLogo,
    href: 'https://www.postgresql.org/',
  },
  postman: {
    label: 'Postman',
    img: skillsAssets.postmanLogo,
    href: 'https://www.postman.com/',
  },
  pubSub: {
    label: 'Pub/Sub',
    img: skillsAssets.pubSubLogo,
    href: 'https://cloud.google.com/pubsub',
  },
  python: {
    label: 'Python',
    img: skillsAssets.pythonLogo,
    href: 'https://www.python.org/',
  },
  react: {
    label: 'React',
    img: skillsAssets.reactLogo,
    href: 'https://reactjs.org/',
  },
  redux: {
    label: 'Redux',
    img: skillsAssets.reduxLogo,
    href: 'https://redux.js.org/',
  },
  reduxSaga: {
    label: 'Redux Saga',
    img: skillsAssets.reduxSagaLogo,
    href: 'https://redux-saga.js.org/',
  },
  springBoot: {
    label: 'Spring Boot',
    img: skillsAssets.springBootLogo,
    href: 'https://spring.io/projects/spring-boot',
  },
  storybook: {
    label: 'Storybook',
    img: skillsAssets.storybookLogo,
    href: 'https://storybook.js.org/',
  },
  testingLibrary: {
    label: 'Testing Library',
    img: skillsAssets.testingLibraryLogo,
    href: 'https://testing-library.com/docs/react-testing-library/intro',
  },
  typeScript: {
    label: 'TypeScript',
    img: skillsAssets.typeScriptLogo,
    href: 'https://www.typescriptlang.org/',
  },
  vue: {
    label: 'Vue',
    img: skillsAssets.vueLogo,
    href: 'https://vuejs.org/',
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
  skills.reduxSaga,
  skills.html,
  skills.css,
  skills.storybook,
  skills.vue,
  skills.materialUi,
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

const SkillsSection = () => {
  return (
    <Section>
      <Display tag="h1" variant="lg">Skills</Display>
      <ul className="flex flex-col gap-5">
      {skillSections.map((section) => (
        <li>
        <Display tag="h2" variant="md">{section.label}</Display>
        <ul className="grid grid-cols-2 md:grid-cols-8 gap-10 py-4">
          {section.skills.map((skill) => (
            <li>
              <Skill {...skill} />
            </li>
          ))}
        </ul>
        </li>
      ))}
      </ul>
    </Section>
  )
}

export default SkillsSection