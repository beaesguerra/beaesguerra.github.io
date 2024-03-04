import * as React from 'react'

type KeywordsProps = {
  keywords: string[]
}

const Keywords = (props: KeywordsProps) => {
  return (
    <ul>
      {props.keywords && props.keywords.map((link) => {
        return (
          <li>{link}</li>
        )
      })}
    </ul>
  )
}

export default Keywords