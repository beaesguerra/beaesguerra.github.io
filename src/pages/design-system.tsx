import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/application/layout"
import Display, { DisplayVariant } from "../components/design-system/display"
import StackList from "../components/design-system/stack-list"
import Icon, { IconSize } from "../components/design-system/icon"
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Illustration from "../components/design-system/illustration"
import LayoutTwoThirds from "../components/design-system/layout-sidebar"
import Placeholder from "../components/design-system/placeholder"

const DesignSystem: React.FC<PageProps> = () => {
  const displayVariants: DisplayVariant[] = ['xs', 'sm', 'md', 'lg', 'xl']
  const iconSizes: IconSize[] = ['sm', 'md', 'lg']
  const sectionClassName = 'uppercase font-bold text-xl py-4'
  return (
    <Layout>
      <h1 className="py-6 text-6xl">Design System </h1>
      <StackList>
        <div>
          <h2 className={sectionClassName}>Typography</h2>
          <ul>
          { displayVariants.map((variant) => (
            <li>
              <Display variant={variant}>
                Display {variant}
              </Display>
            </li>
          ))}
          </ul>
        </div>
        <div>
          <h2 className={sectionClassName}>Icons</h2>
          <ul>
            {iconSizes.map((size) => (
              <li>
                <Icon size={size} icon={faHeart} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={sectionClassName}>Illustration</h2>
          <Illustration icon={faHeart} />
        </div>

        <div>
          <h2 className={sectionClassName}>Layout - Two Thirds</h2>
          <LayoutTwoThirds main={(<Placeholder />)} sidebar={(<Placeholder />)} />
        </div>
      </StackList>
    </Layout>
  )
}

export default DesignSystem

export const Head: HeadFC = () => <title>Design System</title>
