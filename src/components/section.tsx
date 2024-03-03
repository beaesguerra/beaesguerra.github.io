import * as React from 'react'

const Section = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="min-h-96 flex flex-col">
      { children }
    </div>
  )
}

export default Section