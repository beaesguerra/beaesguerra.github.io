import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {
  EducationSection,
  SkillsSection,
  WorkExperienceSection,
  VolunteeringSection,
  ProjectsSection,
  HeroBanner,
} from "../sections"
import Layout from "../components/application/layout"
import GlobalHead from "../components/application/global-head"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroBanner />
      <EducationSection />
      <SkillsSection />
      <WorkExperienceSection />
      {/* <ProjectsSection />
      <VolunteeringSection /> */}
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <GlobalHead>
    <title>Bea Esguerra</title>
  </GlobalHead>
)
