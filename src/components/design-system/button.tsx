import * as React from 'react';
import { classes } from '../../utils/css';

type ButtonProps = {
  className?: string;
  href?: string;
}

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  const Tag = props.href ? 'a' : 'button'
  return (
    <Tag className={classes([
      props.className,
      'border border-solid px-4 py-2 rounded-md bg-gray-100 border-gray-500 hover:bg-gray-200',
    ])} href={props.href}>
      { props.children }
    </Tag>
  )
};

export default Button;
