import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/application/layout"
import Display, { DisplayVariant } from "../components/design-system/display"
import StackList from "../components/design-system/stack-list"
import Icon, { IconSize } from "../components/design-system/icon"
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Illustration from "../components/design-system/illustration"
import Placeholder from "../components/design-system/placeholder"
import LayoutSidebar from "../components/design-system/layout-sidebar"
import Tag from "../components/design-system/tag"
import Text, { TextVariant } from "../components/design-system/text"
import GlobalHead from "../components/application/global-head"

const DesignSystem: React.FC<PageProps> = () => {
  const displayVariants: DisplayVariant[] = ['xs', 'sm', 'md', 'lg', 'xl']
  const textVariants: TextVariant[] = ['xs', 'sm', 'base']
  const iconSizes: IconSize[] = ['sm', 'md', 'lg']
  const sectionClassName = 'uppercase font-bold text-xl py-4'
  return (
    <Layout>
      <h1 className="py-6 text-6xl">Design System </h1>
      <StackList>
        <li>
          <h2 className={sectionClassName}>Typography - Display</h2>
          <ul>
          { displayVariants.map((variant) => (
            <li key={variant}>
              <Display variant={variant}>
                Display {variant}
              </Display>
            </li>
          ))}
          </ul>
          <h2 className={sectionClassName}>Typography - Text</h2>
          <ul>
          { textVariants.map((variant) => (
            <li key={variant}>
              <Text variant={variant}>
                Text {variant}
              </Text>
            </li>
          ))}
          </ul>
        </li>
        <li>
          <h2 className={sectionClassName}>Icons</h2>
          <ul>
            {iconSizes.map((size) => (
              <li key={size}>
                <Icon size={size} icon={faHeart} />
              </li>
            ))}
          </ul>
        </li>
        <li>
          <h2 className={sectionClassName}>Illustration</h2>
          <Illustration icon={faHeart} />
        </li>

        <li>
          <h2 className={sectionClassName}>Layout - Two Thirds</h2>
          <LayoutSidebar main={(<Placeholder />)} sidebar={(<Placeholder />)} />
        </li>

        <li>
          <h2 className={sectionClassName}>Tag</h2>
          <Tag label="Tag label" />
        </li>
      </StackList>
    </Layout>
  )
}

export default DesignSystem

export const Head: HeadFC = () => (
  <GlobalHead>
    <title>Design System</title>
  </GlobalHead>
)
