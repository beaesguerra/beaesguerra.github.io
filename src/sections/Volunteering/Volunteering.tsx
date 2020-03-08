import * as React from 'react';
import { IProps as IVolunteeringItemProps, VolunteeringItem } from './VolunteeringItem';
import ucraRobot from '../../assets/ucra.png';
import ucraUnity1 from '../../assets/ucra1.png';
import ucraUnity2 from '../../assets/ucra2.png';

export const volunteeringItems: IVolunteeringItemProps[] = [
  {
    title: 'University of Calgary Robotics Association (UCRA)',
    subtitle: 'Mentor Volunteer',
    imgJsx: (
      <>
        <img src={ucraUnity2} alt="ucra" style={{ width: 'auto', height: '100%' }} />
        <img src={ucraRobot} alt="ucra" style={{ width: 'auto', height: '100%' }} />
        <img src={ucraUnity1} alt="ucra" style={{ width: 'auto', height: '100%' }} />
      </>
    ),
    description: `
      UCRA provides programs to give children an opportunity to learn
      and work with robotics and programming.
      For the 3D Game Design Program, I taught lessons on
      basic programming and helped children create a game using Unity Game Engine.
      For the Discover Robotics Program, I helped them build and program
      LEGO robotics that would complete fun challenges.
    `,
  },
  {
    title: 'Spread the Love',
    subtitle: 'Volunteer',
    imgJsx: (<div />),
    description: '',
  },
];
export const Volunteering = () => {
  return (
    <div>
      {volunteeringItems.map(item => (
        <VolunteeringItem {...item} />
      ))}
    </div>
  );
};
