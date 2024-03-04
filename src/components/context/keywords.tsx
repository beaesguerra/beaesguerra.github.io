import * as React from 'react'
import Tag from '../design-system/tag'

type KeywordsProps = {
  keywords: string[]
}

const Keywords = (props: KeywordsProps) => {
  return (
    <ul className="flex gap-3 flex-wrap">
      {props.keywords && props.keywords.map((link) => {
        return (
          <li><Tag label={link} /></li>
        )
      })}
    </ul>
  )
}

export default Keywords