import * as React from 'react';
import ScrollAnimationComponent, { ScrollAnimationProps } from 'react-animate-on-scroll';

interface IProps extends ScrollAnimationProps {
}

export const ScrollAnimation: React.FunctionComponent<IProps> = (props) => (
  <ScrollAnimationComponent
    offset={window.innerHeight * 0.7}
    {...props}
  >
    {props.children}
  </ScrollAnimationComponent>
);
