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
        'flex flex-col pb-32 px-8 md:px-0',
        'lg:w-3/4 max-w-screen-lg m-auto',
      ])}
    >
      { props.children }
    </div>
  )
}

export default Section