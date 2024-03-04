import * as React from 'react'
import { RelatedLink } from '../../types';
import Keywords from '../keywords';
import RelatedLinks from '../related-links';

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
      <h3>{props.company}</h3>
      {props.logo}
      {props.roles.map((role) => (
        <div>
          <h4>{role.title}</h4>
          <p>{role.description}</p>
          <Keywords keywords={role.keywords} />
          { role.links && <RelatedLinks links={role.links} />}
        </div>
      ))}
    </div>
  )
}

export default WorkBlock