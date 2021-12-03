import * as React from 'react';
import { Hidden } from '@material-ui/core';
import { ExpandedNavigation } from './ExpandedNavigation/ExpandedNavigation';
import { CollapsedNavigation } from './CollapsedNavigation/CollapsedNavigation';
import { hashRoutes } from '../../App/routes';


const links: { label: string; route: string }[] = [
  {
    label: 'Education',
    route: hashRoutes.EDUCATION,
  },
  {
    label: 'Skills',
    route: hashRoutes.SKILLS,
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
  // TODO navigation could be more accessible. For now it has been disabled
  // for screen readers since it is not functional at this time.
  <div aria-hidden="true">
    <Hidden xsDown={true}>
      <ExpandedNavigation links={links} />
    </Hidden>
    <Hidden smUp={true}>
      <CollapsedNavigation links={links} />
    </Hidden>
  </div>
);
