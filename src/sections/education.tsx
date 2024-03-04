import * as React from 'react'
import Section from '../components/application/section'
import Display from '../components/design-system/display'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Illustration from '../components/design-system/illustration'
import LayoutSidebar from '../components/design-system/layout-sidebar'

const EducationSection = () => {
  return (
    <Section>
      <Display variant="lg" tag="h1">Education</Display>
      <LayoutSidebar
        main={(
          <>
            <Display variant="md" tag="h2">
              Bachelor of Science in Software Engineering
            </Display>
            <Display variant="sm" tag="h3">
              University of Calgary (Schulich School of Engineering)
            </Display>
            <p>
              Graduated with distinction and completed the Engineering Internship Program.
            </p>
          </>
        )}
        sidebar={(
          <Illustration icon={faGraduationCap} />
        )}
      />
    </Section>
  )
}

export default EducationSection