import * as React from 'react';

type TagProps = {
  label: string;
}

const Tag = (props: TagProps) => (
  <div className="border-solid border-2 inline-block py-1 px-2 rounded-xl">
    {props.label}
  </div>
);

export default Tag;
