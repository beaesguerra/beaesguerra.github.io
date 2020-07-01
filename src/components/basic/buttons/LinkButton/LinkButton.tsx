import * as React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

interface IProps {
  href: string;
  label: string;
}

export type ILinkButtonProps = IProps;

export const LinkButton = (props: IProps) => {
  const classes = useStyles();
  return (
    <Button
      href={props.href}
      target="_blank"
      component="a"
      className={classes.button}
    >
      <FontAwesomeIcon icon={faLink} size="lg" className={classes.icon} />
      {props.label}
    </Button>
  );
};

const useStyles = makeStyles({
  button: {
    color: '#828282',
    textAlign: 'center',
  },
  icon: {
    padding: '5px',
  },
});
