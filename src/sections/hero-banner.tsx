import * as React from 'react'
import Section from '../components/application/section'
import Display from '../components/design-system/display'

const HeroBanner = () => {
  return (
    <Section className="py-16">
      <Display variant="xl" tag="h1">Hello world!</Display> 
      <p>My name is Bea and I am a software developer passionate about frontend development, design systems, accessibility, and learning! I enjoy using technology to create innovative solutions that help people!</p>
    </Section>
  )
}

export default HeroBanner