import * as React from 'react'
import { classes } from '../../utils/css';

export type DisplayVariant = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

type DisplayProps = {
  variant: DisplayVariant;
  tag?: React.ElementType;
  className?: string;
}

const variantStyles: { [key in DisplayVariant]: string} = {
  'xs': 'text-lg font-cute pb-2 text-neutral-900',
  'sm': 'text-xl font-cute font-semibold pb-3 text-neutral-900',
  'md': 'text-2xl m:text-3xl font-cute font-bold pb-4 text-neutral-900',
  'lg': 'text-6xl font-cursive lowercase pb-10 underline decoration-[#beabea] underline-offset-8 text-neutral-900',
  'xl': 'text-7xl font-cursive lowercase pb-4 text-neutral-900',
}

const Display = (props: React.PropsWithChildren<DisplayProps>) => {
  const Tag = props.tag || 'div'
  return (
    <Tag
      className={classes([
        props.className,
        variantStyles[props.variant],
      ])}
    >
      { props.children }
    </Tag>
  )
}

export default Display