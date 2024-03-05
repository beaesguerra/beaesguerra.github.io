import * as React from 'react'
import { RelatedLink } from '../../types'

type RelatedLinksProps = {
  links: RelatedLink[]
}

const RelatedLinks = (props: RelatedLinksProps) => {
  return (
    <ul className="list-disc">
      {props.links && props.links.map((link) => {
        return (
          <li key={link.label}><a href={link.href}>{ link.label }</a></li>
        )
      })}
    </ul>
  )
}

export default RelatedLinks