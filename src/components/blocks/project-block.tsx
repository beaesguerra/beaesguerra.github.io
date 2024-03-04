import * as React from 'react'
import { Image, RelatedLink } from '../../types';
import Keywords from '../context/keywords';
import RelatedLinks from '../context/related-links';
import Display from '../design-system/display';

export type ProjectBlockProps = {
  name: string;
  context?: string;
  type: string;
  img: Image;
  description: string;
  keywords: string[];
  githubLink?: string;
  links?: RelatedLink[];
}
const ProjectBlock = (props: ProjectBlockProps) => {
  return (
    <div>
      <Display tag="h2" variant="md">{props.name}</Display>
      {props.context && <Display tag="h3" variant="sm">{props.context}</Display>}
      <Display tag="h4" variant="xs">{props.type}</Display>
      {props.githubLink && <a href={props.githubLink}>GitHub</a>}
      <img src={props.img.src} alt={props.img.alt} />
      <p>{ props.description }</p>
      <Keywords keywords={props.keywords} />
      { props.links && <RelatedLinks links={props.links} />}
    </div>
  )
}

export default ProjectBlock