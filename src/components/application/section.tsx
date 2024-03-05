import * as React from 'react'

type SectionProps = {
  className?: string;
}

const Section = (props: React.PropsWithChildren<SectionProps>) => {
  const className = [
    props.className,
    'flex flex-col pb-32',
  ].join(' ')
  return (
    <div className={className}>
      { props.children }
    </div>
  )
}

export default Section