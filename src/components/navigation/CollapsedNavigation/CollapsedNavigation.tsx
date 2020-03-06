import * as React from 'react';
import { makeStyles, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { IBaseNavigationProps } from '../types';
import { Logo } from '../../basic/Logo/logo';

export const CollapsedNavigation = (props: IBaseNavigationProps) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Logo />
      <IconButton>
        <FontAwesomeIcon icon={faBars} color="#ffffff" />
      </IconButton>
    </div>
  );
};

const useStyles = makeStyles({
  text: {
    color: 'white',
    textTransform: 'capitalize',
  },
  header: {
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});
