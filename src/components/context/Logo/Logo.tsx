import * as React from 'react';
import { Typography, ButtonBase } from '@material-ui/core';
import { animateScroll } from 'react-scroll';

export const Logo = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <ButtonBase onClick={scrollToTop}>
      <Typography variant="h4">
        bea esguerra
      </Typography>
    </ButtonBase>
  );
};
