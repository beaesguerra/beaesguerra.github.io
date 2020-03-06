import * as React from 'react';
import { Typography, Button } from '@material-ui/core';

const links: { label: string; route: string }[] = [
  {
    label: 'Education',
    route: '',
  },
  {
    label: 'Skills',
    route: '',
  },
  {
    label: 'Work',
    route: '',
  },
  {
    label: 'Projects',
    route: '',
  },
  {
    label: 'Extra Curricular',
    route: '',
  },
];

export const ExpandedNavigation = () => (
  <div>
    {links.map((link) => (
      <Button>
        <Typography>
          {link.label}
        </Typography>
      </Button>
    ))}
  </div>
);
