import * as React from 'react';
import { Hidden } from '@material-ui/core';
import { ExpandedNavigation } from './ExpandedNavigation/ExpandedNavigation';
import { CollapsedNavigation } from './CollapsedNavigation/CollapsedNavigation';
import { hashRoutes } from '../../App/routes';


const links: { label: string; route: string }[] = [
  {
    label: 'About',
    route: hashRoutes.ABOUT,
  },
  {
    label: 'Work',
    route: hashRoutes.WORK,
  },
  {
    label: 'Projects',
    route: hashRoutes.PROJECTS,
  },
  {
    label: 'Volunteering',
    route: hashRoutes.VOLUNTEERING,
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
