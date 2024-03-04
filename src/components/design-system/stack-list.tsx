import * as React from 'react'

const StackList = (props: React.PropsWithChildren) => {
  return (
    <ul className="flex gap-y-16 flex-col">
      {props.children}
    </ul>
  )
}

export default StackList