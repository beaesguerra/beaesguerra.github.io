import * as React from 'react';
import { Typography, ButtonBase } from '@material-ui/core';

export const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <ButtonBase onClick={scrollToTop}>
      <Typography variant="h4">
        bea esguerra
      </Typography>
    </ButtonBase>
  );
};
