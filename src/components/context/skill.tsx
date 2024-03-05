import * as React from 'react';
import Text from '../design-system/text';

type SkillProps = {
  label: string;
  img: string;
}

const Skill = (props: SkillProps) => (
  <div className="flex flex-col items-center justify-center gap-2">
    <img src={props.img} role="presentation" aria-hidden="true" className="h-16 md:h-14 object-contain" />
    <Text variant="sm" tag="span" className="text-center h-8">
      {
        props.label
      }
    </Text>
  </div>
);

export default Skill;
