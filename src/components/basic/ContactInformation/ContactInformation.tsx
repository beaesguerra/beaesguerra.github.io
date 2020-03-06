import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core';

const contactDetails: { icon: IconDefinition; href: string }[] = [
  {
    icon: faEnvelope,
    href: 'mailto:bea.esguerra@outlook.com',
  },
  {
    icon: faGithub,
    href: 'https://github.com/beaesguerra',
  },
  {
    icon: faLinkedin,
    href: 'https://www.linkedin.com/in/beaesguerra',
  },
];

export const ContactInformation = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {contactDetails.map((detail) => (
        <a
          href={detail.href}
          className={classes.detail}
          target="_blank"
          rel="noopener noreferrer"
          key={detail.href}
        >
          <FontAwesomeIcon icon={detail.icon} size="2x" />
        </a>
      ))}
    </div>
  );
};

const useStyles = makeStyles({
  detail: {
    color: 'white',
    padding: '10px',
  },
  container: {
    padding: '10px',
  },
});
