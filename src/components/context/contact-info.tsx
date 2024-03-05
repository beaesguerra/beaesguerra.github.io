import * as React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import IconLink from '../design-system/icon-link';

type ContactInfoProps = {
}

const contactInfoItems = [
  {
    icon: faEnvelope,
    href: 'mailto:bea.esguerra@outlook.com',
    ariaLabel: 'Email me!',
  },
  {
    icon: faLinkedin,
    href: 'https://www.linkedin.com/in/beaesguerra',
    ariaLabel: 'Visit my LinkedIn profile',
  },
  {
    icon: faGithub,
    href: 'https://github.com/beaesguerra',
    ariaLabel: 'Visit my Github profile',
  },
]
const ContactInfo = (props: ContactInfoProps) => (
  <ul className="flex gap-1">
    {contactInfoItems.map((item) => (
      <li key={item.ariaLabel}>
        <IconLink href={item.href} ariaLabel={item.ariaLabel} icon={item.icon} />
      </li>
    ))}
  </ul>
);

export default ContactInfo;
