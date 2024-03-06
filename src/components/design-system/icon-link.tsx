import { IconProp } from '@fortawesome/fontawesome-svg-core';
import * as React from 'react';
import Icon from './icon';

type IconLinkProps = {
  href: string;
  ariaLabel: string;
  icon: IconProp;
}

const IconLink = (props: IconLinkProps) => (
  <a
    href={props.href}
    aria-label={props.ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-75 p-3 text-pink-900"
  >
    <Icon icon={props.icon} size="md" />
  </a>
);

export default IconLink;
