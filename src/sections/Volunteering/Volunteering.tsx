import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import { IProps as IVolunteeringItemProps, VolunteeringItem } from './VolunteeringItem';
import ucraRobot from '../../assets/ucra.png';
import ucraUnity1 from '../../assets/ucra1.png';
import ucraUnity2 from '../../assets/ucra2.png';
import spreadTheLove1 from '../../assets/spreadthelove.jpg';
import spreadTheLove2 from '../../assets/spreadthelove2.jpg';
import spreadTheLove3 from '../../assets/spreadthelove3.jpg';
import adoptAFamily1 from '../../assets/adopt-a-family-2020.jpeg';
import adoptAFamily2 from '../../assets/adopt-a-family-2021.jpeg';
import { SectionHeader } from '../../components/basic/text/SectionHeader/SectionHeader';

const sectionHeading = 'Volunteering';

export const Volunteering = () => {
  const classes = useStyles();
  const volunteeringItems: IVolunteeringItemProps[] = [
    {
      title: 'Kinette Club of Calgary: Adopt-a-Family',
      subtitle: 'Volunteer Shopper',
      imgJsx: (
        <>
          <img
            src={adoptAFamily1}
            alt="Lots of holiday wrapped gifts"
            className={classes.image}
          />
          <img
            src={adoptAFamily2}
            alt="More holiday wrapped gifts"
            className={classes.image}
          />
        </>
      ),
      description: `
        During the holiday season, I shopped for items from a wishlist
        and gift wrapped the items for low-income families.
      `,
    },
    {
      title: 'University of Calgary Robotics Association (UCRA)',
      subtitle: 'Mentor Volunteer',
      imgJsx: (
        <>
          <img
            src={ucraUnity2}
            alt="A screenshot of a 3D game with player cubes in a world with palm trees"
            className={classes.image}
          />
          <img
            src={ucraUnity1}
            alt="A screenshot of the 3D game world that shows trees and mountains"
            className={classes.image}
          />
          <img
            src={ucraRobot}
            alt="A small LEGO robot with sensors"
            className={classes.image}
          />
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
      relatedLinks: [
        {
          label: 'Schulich Community Robotics Program',
          href: 'https://www.ucalgary.ca/robotics/',
        },
      ],
    },
    {
      title: 'Spread the Love',
      subtitle: 'Volunteer',
      imgJsx: (
        <>
          <img
            src={spreadTheLove1}
            alt="Volunteers preparing sandwiches"
            className={classes.image}
          />
          <img
            src={spreadTheLove2}
            alt="A sandwich mascot standing beside a bake sale for 'Spread the Love'"
            className={classes.image}
          />
          <img
            src={spreadTheLove3}
            alt="Volunteers preparing more sandwiches"
            className={classes.image}
          />
        </>
      ),
      description: `
        Spread the Love is a non-profit organization that raises social awareness 
        about hunger and homelessness.
        I helped prepare sandwiches that are brought to a homeless shelter.
        I would also bring baked goods to seasonal bake sales to help raise money
        used for buying ingredients for the sandwiches.
      `,
    },
  ];
  return (
    <div className={classes.container}>
      <SectionHeader text={sectionHeading} />
      {volunteeringItems.map(item => (
        <VolunteeringItem {...item} key={item.title} />
      ))}
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  image: {
    width: 'auto',
    height: '35vh',
    padding: '10px',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: 'auto',
      padding: '10px 0',
    },
  },
  container: {
    padding: '5vh 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      padding: '10vh 0',
    },
  },
}));
