import * as React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

interface IProps {
  keywords: string[];
  color: string;
}

export const Keywords = (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container} style={{ color: props.color }}>
      {props.keywords.map((keyword) => (
        <Typography className={classes.keyword} style={{ borderColor: props.color }}>
          {keyword}
        </Typography>
      ))}
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  },
  keyword: {
    padding: '5px 10px',
    margin: '5px',
    border: '1px solid',
    borderRadius: '10px',
  },
}));
