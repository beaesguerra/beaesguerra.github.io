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
    label: 'Extra Curricular',
    route: hashRoutes.EXTRA_CURRICULAR,
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
