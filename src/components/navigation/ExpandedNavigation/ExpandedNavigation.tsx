import * as React from 'react';
import { Typography, Button, makeStyles } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';
import { IBaseNavigationProps } from '../types';
import { Logo } from '../../basic/Logo/logo';

export const ExpandedNavigation = (props: IBaseNavigationProps) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Logo />
      <div>
        {props.links.map((link) => (
          <Link key={link.label} smooth={true} to={`#${link.route}`}>
            <Button>
              <Typography className={classes.text}>
                {link.label}
              </Typography>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  text: {
    color: 'white',
    textTransform: 'capitalize',
  },
  header: {
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});
