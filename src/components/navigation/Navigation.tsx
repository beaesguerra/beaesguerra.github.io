import * as React from 'react';
import { ExpandedNavigation } from './ExpandedNavigation/ExpandedNavigation';


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
  <ExpandedNavigation links={links} />
);
