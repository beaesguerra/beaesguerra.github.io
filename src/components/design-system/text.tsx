import * as React from 'react';
import { classes } from '../../utils/css';

export type TextVariant = 'base' | 'sm' | 'xs';

type TextProps = {
  variant?: TextVariant;
  tag?: React.ElementType;
  className?: string;
}

const variantStyles: { [key in TextVariant]: string} = {
  'base': '',
  'xs': 'text-xs',
  'sm': 'text-sm',
}

const Text = (props: React.PropsWithChildren<TextProps>) => {
  const Tag = props.tag || 'span'
  return (
    <Tag
      className={classes([
        props.variant ? variantStyles[props.variant] : variantStyles.base,
        props.className,
        props.tag === 'p' ? 'py-2': '',
      ])}
    >
      { props.children }
    </Tag>
  )
}

export default Text;
