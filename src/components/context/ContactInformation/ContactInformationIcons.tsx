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
import { makeStyles, IconButton } from '@material-ui/core';

interface IProps extends IExternalProps {
  href: string;
  icon: IconDefinition;
}

interface IExternalProps {
  color?: string;
}

const ContactIcon = (props: IProps) => {
  const classes = useStyles();
  return (
    <IconButton
      component="a"
      href={props.href}
      className={classes.link}
      target="_blank"
      rel="noopener noreferrer"
      key={props.href}
    >
      <FontAwesomeIcon icon={props.icon} size="1x" color={props.color || '#ffffff'} />
    </IconButton>
  );
};

const useStyles = makeStyles({
  link: {
    padding: '10px',
    pointerEvents: 'auto',
  },
});

export const EmailContactInfo = (props: IExternalProps) => (
  <ContactIcon
    icon={faEnvelope}
    href="mailto:bea.esguerra@outlook.com"
    {...props}
  />
);

export const GithubContactInfo = (props: IExternalProps) => (
  <ContactIcon
    icon={faGithub}
    href="https://github.com/beaesguerra"
    {...props}
  />
);

export const LinkedInContactInfo = (props: IExternalProps) => (
  <ContactIcon
    icon={faLinkedin}
    href="https://www.linkedin.com/in/beaesguerra"
    {...props}
  />
);

export const GithubProjectInfo = (props: IExternalProps & { link: string }) => (
  <ContactIcon
    icon={faGithub}
    href={props.link}
    {...props}
  />
);
