import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

type IllustrationProps = {
  icon: IconProp;
  className?: string;
}

const Illustration = (props: IllustrationProps) => {
  return (
    <FontAwesomeIcon icon={props.icon} size='7x' className={props.className} />
  )
}

export default Illustration;
