import * as React from 'react'
import PortfolioHeader from './portfolio-header'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <PortfolioHeader />
      <main className="px-64">
        { children }
      </main>
    </div>
  )
}

export default Layout