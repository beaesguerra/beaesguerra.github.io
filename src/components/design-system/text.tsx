import * as React from 'react';

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
  const className = [
    props.variant ? variantStyles[props.variant] : variantStyles.base,
    props.className
  ].join(' ')
  return (
    <Tag
      className={className}
    >
      { props.children }
    </Tag>
  )
}

export default Text;
