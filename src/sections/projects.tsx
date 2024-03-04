import * as React from 'react'
import Section from '../components/application/section'
import ProjectBlock, { ProjectBlockProps } from '../components/blocks/project-block'
import Display from '../components/design-system/display';
import StackList from '../components/design-system/stack-list';

const ProjectsSection = () => {
  const projects: ProjectBlockProps[] = [
    {
      context: 'Engineering Capstone Project Sponsored By Boresha',
      name: 'Agricultural Supply Chain Platform',
      type: 'Mobile, Web, and Backend Application',
      img: {
        src: '',
        alt: `A screenshot of a web dashboard that shows admin management capabilities and
        a screenshot of a mobile application that shows information about keeping track
        of milk inventory.`,
      },
      description: `
        Developed a mobile application, web dashboard,
        and REST APIs on a backend core service for tracking
        agricultural products between farmers and traders in Africa.
      `,
      keywords: [
        'TypeScript',
        'React Native',
        'Vue',
        'Express',
        'REST API',
      ],
      githubLink: 'https://github.com/agriculture-capstone',
    },
    {
      context: '2017 Tikkun Olam Makers Makeathon',
      name: 'Aut2Talk',
      type: 'Mobile Development (iOS & Android)',
      img: {
        src: '',
        alt: `
        A collection of screenshots of the mobile application.
        The first screenshot shows a form for setting up a button to
        represent an emotion/activity and video recording. The second
        screenshot shows a collection of these buttons with emojis that
        represent the emotions/activities. The third screenshot shows
        that when a button is pressed, a video is played that shows what
        the emotion/activity looks like.
      `,
      },
      description: `
        Participated in a 72-hour makeathon to create a mobile 
        application that would help people with non-verbal autism 
        communicate their needs and feelings with others. Users
        can use the application to set up buttons representing an emotion or activity.
        When an emotion or activity button is pressed, a short video
        (that was previously recorded during the button set up) is played that
        shows the emotion/activity along with sound. Ideally when the video is first recorded,
        the person recording says aloud what the emotion/activity is so that sound would
        be played during the video when the button is pressed. The intention of this is
        to associate the emotion/activity with the word(s) to encourage communication.
      `,
      keywords: ['JavaScript', 'React Native'],
      githubLink: 'https://github.com/beaesguerra/Aut2Talk',
      links: [
        {
          label: 'Project Information',
          href: 'https://kadimadynamics.com/media/projects/',
        },
        {
          label: 'Featured in Humans of TOM',
          href: 'https://www.instagram.com/p/BYR3VjnBjS6/',
        },
      ],
    },
    {
      context: '2016 CSUS Coding Hackathon - 2nd Place',
      name: 'Dressr',
      type: 'Mobile Development (Android)',
      img: {
        src: '',
        alt: `
        A collection of screenshots of the mobile application.
        The first screenshot shows images of individual clothing articles.
        The second screenshot shows a shirt randomly paired with pants.
        The third screenshot shows a photo of a shirt with a setting
        to configure it as a top.
      `,
      },
      description: `
        Won second place in a fun hackathon to create a solution
        for an existing 'First World Problem'. The application would
        randomly pick outfits for you based on clothing articles you input
        into the application.
      `,
      keywords: ['C++', 'Qt Creator'],
      githubLink: 'https://github.com/beaesguerra/dressr',
    },
    {
      context: 'Human Computer Interaction Final Project',
      name: 'uCook',
      type: 'UX Design, Implementation, and Usability Testing',
      img: {
        src: '',
        alt: `
        A collection of screenshots of the mobile application.
        The first screenshot shows a recipe for garlic bread.
        The second screenshot shows a collection of recipes.
        The third screenshot shows a step for a recipe with a video
        demonstrating the instruction. The fourth screenshot shows
        an overview of multiple recipes that have been selected to
        be prepared together.
      `,
      },
      description: `
        Followed a task centered system design methodology to
        design, test, and implement a vertical prototype for a cooking
        application that managed the instructions and timing of multiple recipes concurrently.
      `,
      keywords: [
        'Prototyping', 'UX', 'Task Centered System Design', 'Usability Testing', 'WPF', 'C#',
      ],
    },
    {
      name: 'Terminal Fighter',
      context: 'Side project',
      type: 'Game Development',
      img: {
        src: '',
        alt: `
        A screenshot of a typing game that shows a player and enemies with words attached to them
      `,
      },
      description: `
        Implemented features for a functional prototype of a typing game.
        As the player types the words attached to enemies, the enemies are
        targeted by different kinds of projectiles.
      `,
      keywords: ['Python'],
    },
  ];
  return (
    <Section>
      <Display tag="h1" variant="lg">Projects</Display>
      <StackList>
        {
          projects.map((project) => (
          <li>
            <ProjectBlock {...project} />
          </li>))
        }
      </StackList>
    </Section>
  )
}

export default ProjectsSection