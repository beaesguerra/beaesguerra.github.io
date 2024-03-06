import * as React from 'react'
import Section from '../components/application/section'
import Display from '../components/design-system/display'
import Skill from '../components/context/skill';
import { skillsAssets } from '../images/skills/skills-assets';

const skills = {
  accessibility: {
    label: 'Web Accessibility',
    img: skillsAssets.accessibilityIcon,
  },
  axe: {
    label: 'Axe',
    img: skillsAssets.axeLogo,
  },
  backstopJs: {
    label: 'BackstopJS',
    img: skillsAssets.backstopJsLogo,
  },
  bigQuery: {
    label: 'BigQuery',
    img: skillsAssets.bigQueryLogo,
  },
  chromatic: {
    label: 'Chromatic',
    img: skillsAssets.chromaticLogo,
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
  materialUi: {
    label: 'Material UI',
    img: skillsAssets.materialUiLogo,
  },
  postgres: {
    label: 'PostgreSQL',
    img: skillsAssets.postgresLogo,
  },
  postman: {
    label: 'Postman',
    img: skillsAssets.postmanLogo,
  },
  pubSub: {
    label: 'Pub/Sub',
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
  reduxSaga: {
    label: 'Redux Saga',
    img: skillsAssets.reduxSagaLogo,
  },
  sass: {
    label: 'Sass',
    img: skillsAssets.sassLogo,
  },
  springBoot: {
    label: 'Spring Boot',
    img: skillsAssets.springBootLogo,
  },
  storybook: {
    label: 'Storybook',
    img: skillsAssets.storybookLogo,
  },
  styleDictionary: {
    label: 'Style Dictionary',
    img: skillsAssets.styleDictionaryLogo,
  },
  testingLibrary: {
    label: 'Testing Library',
    img: skillsAssets.testingLibraryLogo,
  },
  typeScript: {
    label: 'TypeScript',
    img: skillsAssets.typeScriptLogo,
  },
  voiceOver: {
    label: 'VoiceOver',
    img: skillsAssets.voiceOverLogo,
  },
  vue: {
    label: 'Vue',
    img: skillsAssets.vueLogo,
  },
  vuePress: {
    label: 'VuePress',
    img: skillsAssets.vueLogo,
  },
  vueTestUtils: {
    label: 'Vue Test Utils',
    img: skillsAssets.vueLogo,
  },
};
const programmingLanguages = [
  skills.typeScript,
  skills.javaScript,
  skills.kotlin,
  skills.java,
  skills.python,
];

const frontendDevelopment = [
  skills.vue,
  skills.react,
  skills.redux,
  skills.sass,
  skills.css,
  skills.html,
  skills.storybook,
  skills.materialUi,
  skills.styleDictionary,
  skills.accessibility,
];

const backendDevelopment = [
  skills.springBoot,
  skills.postgres,
  skills.flyway,
  skills.express,
  skills.gcp,
  skills.pubSub,
  skills.bigQuery,
];

const testing = [
  skills.jest,
  skills.cypress,
  skills.chromatic,
  skills.backstopJs,
  skills.axe,
  skills.vueTestUtils,
  skills.testingLibrary,
  skills.jmeter,
];

const tools = [
  skills.git,
  skills.figma,
  skills.circleCI,
  skills.voiceOver,
  skills.vuePress,
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
    label: 'Testing',
    skills: testing,
  },
  {
    label: 'Tools',
    skills: tools,
  },
  {
    label: 'Backend Development',
    skills: backendDevelopment,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <Display tag="h1" variant="lg">Skills</Display>
      <ul className="flex flex-col gap-5">
      {skillSections.map((section) => (
        <li key={section.label}>
        <Display tag="h2" variant="md">{section.label}</Display>
        <ul className="grid grid-cols-2 md:grid-cols-10 gap-10 py-4">
          {section.skills.map((skill) => (
            <li key={skill.label}>
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