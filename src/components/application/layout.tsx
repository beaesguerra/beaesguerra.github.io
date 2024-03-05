import * as React from 'react'
import PortfolioHeader from './portfolio-header'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="px-8 flex flex-col items-center w-full">
      <PortfolioHeader />
      <main className="lg:w-3/4 max-w-screen-lg">
        { children }
      </main>
    </div>
  )
}

export default Layout