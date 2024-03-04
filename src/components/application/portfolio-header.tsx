import * as React from 'react'
import ContactInfo from '../context/contact-info'


const PortfolioHeader = () => {
  return (
    <nav className="w-screen h-16 sticky top-0 px-56 flex justify-between items-center bg-white">
      <div className="text-3xl">bea esguerra</div>
      <ContactInfo />
    </nav>
  )
}

export default PortfolioHeader