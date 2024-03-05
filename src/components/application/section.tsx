import * as React from 'react'
import { classes } from '../../utils/css';

type SectionProps = {
  className?: string;
}

const Section = (props: React.PropsWithChildren<SectionProps>) => {
  return (
    <div
      className={classes([
        props.className,
        'flex flex-col pb-32',
      ])}
    >
      { props.children }
    </div>
  )
}

export default Section