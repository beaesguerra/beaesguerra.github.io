import * as React from 'react';
import { IProps as IVolunteeringItemProps, VolunteeringItem } from './VolunteeringItem';
import ucraRobot from '../../assets/ucra.png';
import ucraUnity1 from '../../assets/ucra1.png';
import ucraUnity2 from '../../assets/ucra2.png';
import spreadTheLove1 from '../../assets/spreadthelove.jpg';
import spreadTheLove2 from '../../assets/spreadthelove2.jpg';
import spreadTheLove3 from '../../assets/spreadthelove3.jpg';

const imgStyle = { width: 'auto', height: '25vh', padding: '10px' };

export const volunteeringItems: IVolunteeringItemProps[] = [
  {
    title: 'University of Calgary Robotics Association (UCRA)',
    subtitle: 'Mentor Volunteer',
    imgJsx: (
      <>
        <img src={ucraUnity2} alt="ucra" style={imgStyle} />
        <img src={ucraRobot} alt="ucra" style={imgStyle} />
        <img src={ucraUnity1} alt="ucra" style={imgStyle} />
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
    imgJsx: (
      <>
        <img src={spreadTheLove1} alt="spread-the-love" style={imgStyle} />
        <img src={spreadTheLove2} alt="spread-the-love" style={imgStyle} />
        <img src={spreadTheLove3} alt="spread-the-love" style={imgStyle} />
      </>
    ),
    description: `
      Spread the Love is a non-profit organization that raises social awareness 
      about hunger and homelessness.
      I helped prepare sandwiches that are brought to a homeless shelter.
      I would also bring baked goods to seasonal bake sales to help raise money.
    `,
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
