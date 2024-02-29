import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {
  PortfolioHeader,
  EducationSection,
  SkillsSection,
  WorkExperienceSection,
  VolunteeringSection,
  ProjectsSection,
} from "../sections"

const pageStyles = {
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <PortfolioHeader />
      <EducationSection />
      <SkillsSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <VolunteeringSection />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Bea Esguerra</title>
