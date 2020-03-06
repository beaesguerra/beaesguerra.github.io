import * as React from 'react';
import { Hidden } from '@material-ui/core';
import { ExpandedNavigation } from './ExpandedNavigation/ExpandedNavigation';
import { CollapsedNavigation } from './CollapsedNavigation/CollapsedNavigation';


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

export const Navigation = () => (
  <>
    <Hidden smDown={true}>
      <ExpandedNavigation links={links} />
    </Hidden>
    <Hidden smUp={true}>
      <CollapsedNavigation links={links} />
    </Hidden>
  </>
);
