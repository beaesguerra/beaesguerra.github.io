import * as React from 'react'
import { Image, RelatedLink } from '../../types';
import Keywords from '../context/keywords';
import RelatedLinks from '../context/related-links';

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
      <h3>{ props.name }</h3>
      {props.context && <h4>{ props.context }</h4>}
      <h5>{ props.type }</h5>
      {props.githubLink && <a href={props.githubLink}>GitHub</a>}
      <img src={props.img.src} alt={props.img.alt} />
      <p>{ props.description }</p>
      <Keywords keywords={props.keywords} />
      { props.links && <RelatedLinks links={props.links} />}
    </div>
  )
}

export default ProjectBlock