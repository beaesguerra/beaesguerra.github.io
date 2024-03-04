import * as React from 'react'
import Section from '../components/application/section'
import Display from '../components/design-system/display'

const EducationSection = () => {
  return (
    <Section>
      <Display variant="lg" tag="h1">Education</Display>
      <Display variant="md" tag="h2">
        University of Calgary (Schulich School of Engineering)
      </Display>
      <Display variant="sm" tag="h3">
        Bachelor of Science in Software Engineering
      </Display>
      <p>
        Graduated with distinction and successfully completed the Engineering Internship Program.
      </p>
    </Section>
  )
}

export default EducationSection