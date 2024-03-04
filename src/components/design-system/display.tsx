import * as React from 'react'

export type DisplayVariant = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

type DisplayProps = {
  variant: DisplayVariant;
  tag?: React.ElementType;
}

const variantStyles: { [key in DisplayVariant]: string} = {
  'xs': 'text-lg font-cute leading-relaxed',
  'sm': 'text-xl font-cute font-semibold leading-relaxed',
  'md': 'text-3xl font-cute font-bold leading-relaxed',
  'lg': 'text-6xl font-cursive lowercase leading-loose',
  'xl': 'text-7xl font-cursive lowercase leading-loose',
}

const Display = (props: React.PropsWithChildren<DisplayProps>) => {
  const Tag = props.tag || 'div'
  return (
    <Tag className={variantStyles[props.variant]}>
      { props.children }
    </Tag>
  )
}

export default Display