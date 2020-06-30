import * as React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-scroll';
import { IBaseNavigationProps } from '../types';
import { Logo } from '../../basic/Logo/Logo';

export const ExpandedNavigation = (props: IBaseNavigationProps) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Logo />
      <div>
        {props.links.map((link) => (
          <Link
            key={link.label}
            smooth={true}
            to={link.route}
            spy={true}
            activeClass={classes.active}
            className={classes.link}
            offset={-window.innerHeight * 0.25}
          >
            <Button className={classes.button}>
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

const useStyles = makeStyles(theme => ({
  link: {
    color: 'white',
  },
  button: {
    color: 'inherit',
    margin: '5px',
    padding: '5px',
  },
  text: {
    textTransform: 'capitalize',
    color: 'inherit',
    fontWeight: 'bold',
  },
  header: {
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  active: {
    color: `${theme.palette.secondary.main} !important`,
    paddingBottom: '8px',
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
}));
