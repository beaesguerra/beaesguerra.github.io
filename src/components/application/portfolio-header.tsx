import * as React from 'react'
import ContactInfo from '../context/contact-info'
import Logo from '../context/logo'


const PortfolioHeader = () => {
  return (
    <nav className="w-full sticky top-0 py-4 flex items-center justify-center bg-rose-200">
      <div className="lg:w-3/4 max-w-screen-lg flex flex-col gap-4 lg:flex-row lg:justify-between items-center">
        <Logo />
        <ContactInfo />
      </div>
    </nav>
  )
}

export default PortfolioHeader