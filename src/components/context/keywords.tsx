import * as React from 'react'
import Tag from '../design-system/tag'

type KeywordsProps = {
  keywords: string[]
}

const Keywords = (props: KeywordsProps) => {
  return (
    <ul className="flex gap-3 flex-wrap">
      {props.keywords && props.keywords.map((keyword) => {
        return (
          <li key={keyword}><Tag label={keyword} /></li>
        )
      })}
    </ul>
  )
}

export default Keywords