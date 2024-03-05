import * as React from 'react'
import { classes } from '../../utils/css';

type StackListProps = {
  className?: string;
}

const StackList = (props: React.PropsWithChildren<StackListProps>) => {
  return (
    <ul className={classes([props.className, "flex gap-y-16 flex-col"])}>
      {props.children}
    </ul>
  )
}

export default StackList