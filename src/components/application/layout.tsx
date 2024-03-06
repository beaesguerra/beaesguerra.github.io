import * as React from 'react'
import PortfolioHeader from './portfolio-header'

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center w-full">
      <PortfolioHeader />
      <main className="w-full">
        { children }
      </main>
    </div>
  )
}

export default Layout