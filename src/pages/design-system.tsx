import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import Layout from "../components/application/layout"
import Display, { DisplayVariant } from "../components/design-system/display"
import StackList from "../components/design-system/stack-list"
import Icon, { IconSize } from "../components/design-system/icon"
import { faHeart } from '@fortawesome/free-regular-svg-icons'

const DesignSystem: React.FC<PageProps> = () => {
  const displayVariants: DisplayVariant[] = ['xs', 'sm', 'md', 'lg', 'xl']
  const iconSizes: IconSize[] = ['sm', 'md', 'lg']

  return (
    <Layout>
      <h1 className="py-6 text-6xl">Design System </h1>
      <StackList>
        <div>
          <h2 className="uppercase font-bold text-xl py-4">Typography</h2>
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
          <h2 className="uppercase font-bold text-xl py-4">Icons</h2>
          <ul>
            {iconSizes.map((size) => (
              <li>
                <Icon size={size} icon={faHeart} />
              </li>
            ))}
          </ul>
        </div>
      </StackList>
    </Layout>
  )
}

export default DesignSystem

export const Head: HeadFC = () => <title>Design System</title>
