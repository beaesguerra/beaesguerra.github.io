import * as React from 'react';
import { Skill } from './Skill';
import { SectionHeader } from '../../components/basic/text/SectionHeader/SectionHeader';

const skills = [
  1, 2, 3, 4,
];
interface IProps {
}

export const Skills = (props: IProps) => (
  <>
    <SectionHeader text="Skills" />
    {skills.map((skill) => (
      <Skill />
    ))}
  </>
);
