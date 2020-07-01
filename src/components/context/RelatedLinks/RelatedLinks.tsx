import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import {
  ILinkButtonProps,
  LinkButton,
} from '../../basic/buttons/LinkButton/LinkButton';

export type IRelatedLink = ILinkButtonProps;

interface IProps {
  links: IRelatedLink[];
  color?: string;
}

export const RelatedLinks = (props: IProps) => {
  const classes = useStyles();
  return (
    <div
      className={classes.container}
    >
      {
        props.links.map((linkProps) => (
          <LinkButton {...linkProps} key={linkProps.href} color={props.color} />
        ))
      }
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    padding: '10px 0',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
