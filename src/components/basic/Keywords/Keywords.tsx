import * as React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

interface IProps {
  keywords: string[];
}

export const Keywords = (props: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {props.keywords.map((keyword) => (
        <Typography className={classes.keyword}>
          {keyword}
        </Typography>
      ))}
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
  },
  keyword: {
    padding: '5px 10px',
    margin: '10px',
    border: '1px solid red',
    borderRadius: '10px',
  },
});
