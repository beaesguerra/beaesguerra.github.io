import * as React from 'react'
import ContactInfo from '../context/contact-info'
import Logo from '../context/logo'


const PortfolioHeader = () => {
  return (
    <nav className="w-screen h-16 sticky top-0 px-56 flex justify-between items-center bg-white">
      <Logo />
      <ContactInfo />
    </nav>
  )
}

export default PortfolioHeader