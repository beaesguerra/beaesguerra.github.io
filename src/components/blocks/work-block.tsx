import * as React from 'react'
import { RelatedLink } from '../../types';
import Keywords from '../context/keywords';
import RelatedLinks from '../context/related-links';
import Display from '../design-system/display';
import LayoutSidebar from '../design-system/layout-sidebar';

export type WorkRole = {
  title: string;
  description: JSX.Element;
  keywords: string[];
  links?: RelatedLink[];
}

export type WorkBlockProps = {
  logo: JSX.Element;
  company: string;
  roles: WorkRole[];
}

const WorkBlock = (props: WorkBlockProps) => {
  return (
    <div>
      <LayoutSidebar
        main={
          <Display tag="h2" variant="md">{props.company}</Display>  
        }
        sidebar={
          <div className="flex justify-end">
            {props.logo}
          </div>
        }
      />
      <ul>
        {props.roles.map((role) => (
          <li>
            <Display tag="h3" variant="sm">{role.title}</Display>
            { role.description }
            { role.keywords.length > 0 && <Keywords keywords={role.keywords} /> }
            { role.links && <RelatedLinks links={role.links} />}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorkBlock