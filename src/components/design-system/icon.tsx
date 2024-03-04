import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

export type IconSize = 'sm' | 'md' | 'lg';

type IconProps = {
  icon: IconProp;
  size: IconSize;
}

const Icon = (props: IconProps) => {
  let faSize: SizeProp = 'sm';
  switch (props.size) {
    case 'sm': {
      faSize = 'lg';
      break;
    }
    case 'md': {
      faSize = 'xl';
      break;
    }
    case 'lg': {
      faSize = '2xl';
      break;
    }
  }
  return (
    <FontAwesomeIcon icon={props.icon} size={faSize} />
  )
}

export default Icon;
