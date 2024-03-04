import * as React from 'react'
import { RelatedLink } from '../../types';
import Keywords from '../context/keywords';
import RelatedLinks from '../context/related-links';
import Display from '../design-system/display';

export type WorkRole = {
  title: string;
  description: string;
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
      <Display tag="h2" variant="md">{props.company}</Display>
      {props.logo}
      <ul>
      {props.roles.map((role) => (
        <li>
          <Display tag="h3" variant="sm">{role.title}</Display>
          <p>{role.description}</p>
          <Keywords keywords={role.keywords} />
          { role.links && <RelatedLinks links={role.links} />}
        </li>
      ))}
      </ul>
    </div>
  )
}

export default WorkBlock