import * as React from 'react'

const Section = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col pb-16">
      { children }
    </div>
  )
}

export default Section