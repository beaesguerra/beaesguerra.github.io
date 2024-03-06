import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import GlobalHead from "../components/application/global-head"
import Layout from "../components/application/layout"
import Section from "../components/application/section"
import Display from "../components/design-system/display"
import Text from "../components/design-system/text"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Section className="flex items-center justify-center p-12">
        <Display tag="h1" variant="lg">Page not found</Display>
        <Text tag="p">
          Sorry 😔, we couldn’t find what you were looking for!
        </Text>
      </Section>
    </Layout> 
  )
}

export default NotFoundPage

export const Head: HeadFC = () => (
  <GlobalHead>
    <title>Not found</title>
  </GlobalHead>
)
