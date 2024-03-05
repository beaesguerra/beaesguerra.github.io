import * as React from 'react'

export type DisplayVariant = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

type DisplayProps = {
  variant: DisplayVariant;
  tag?: React.ElementType;
}

const variantStyles: { [key in DisplayVariant]: string} = {
  'xs': 'text-lg font-cute pb-2',
  'sm': 'text-xl font-cute font-semibold pb-3',
  'md': 'text-3xl font-cute font-bold pb-4',
  'lg': 'text-6xl font-cursive lowercase pb-10',
  'xl': 'text-7xl font-cursive lowercase py-10',
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