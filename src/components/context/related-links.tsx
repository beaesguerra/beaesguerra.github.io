import * as React from 'react'
import { RelatedLink } from '../../types'

type RelatedLinksProps = {
  links: RelatedLink[]
}

const RelatedLinks = (props: RelatedLinksProps) => {
  return (
    <ul>
      {props.links && props.links.map((link) => {
        return (
          <li><a href={link.href}>{ link.label }</a></li>
        )
      })}
    </ul>
  )
}

export default RelatedLinks