import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/application/layout"
import Display, { DisplayVariant } from "../components/design-system/display"

const DesignSystem: React.FC<PageProps> = () => {
  const displayVariants: DisplayVariant[] = ['xs', 'sm', 'md', 'lg', 'xl']
  return (
    <Layout>
      <h1>
        Design System 
      </h1>
      <h2>
        Typography
      </h2>
      <ul>
      { displayVariants.map((variant) => (
        <li>
          <Display variant={variant}>
            Display {variant}
          </Display>
        </li>
      ))}
      </ul>
    </Layout>
  )
}

export default DesignSystem

export const Head: HeadFC = () => <title>Design System</title>
