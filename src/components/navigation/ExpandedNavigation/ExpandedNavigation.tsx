import * as React from 'react';
import { Typography, Button, makeStyles } from '@material-ui/core';
import { IBaseNavigationProps } from '../types';

export const ExpandedNavigation = (props: IBaseNavigationProps) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <Typography variant="h4">
        Bea Esguerra
      </Typography>
      <div>
        {props.links.map((link) => (
          <Button>
            <Typography className={classes.text}>
              {link.label}
            </Typography>
          </Button>
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
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});
