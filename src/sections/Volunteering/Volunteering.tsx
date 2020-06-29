import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { IProps as IVolunteeringItemProps, VolunteeringItem } from './VolunteeringItem';
import ucraRobot from '../../assets/ucra.png';
import ucraUnity1 from '../../assets/ucra1.png';
import ucraUnity2 from '../../assets/ucra2.png';
import spreadTheLove1 from '../../assets/spreadthelove.jpg';
import spreadTheLove2 from '../../assets/spreadthelove2.jpg';
import spreadTheLove3 from '../../assets/spreadthelove3.jpg';

export const Volunteering = () => {
  const classes = useStyles();
  const volunteeringItems: IVolunteeringItemProps[] = [
    {
      title: 'University of Calgary Robotics Association (UCRA)',
      subtitle: 'Mentor Volunteer',
      imgJsx: (
        <>
          <img src={ucraUnity2} alt="ucra" className={classes.image} />
          <img src={ucraRobot} alt="ucra" className={classes.image} />
          <img src={ucraUnity1} alt="ucra" className={classes.image} />
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
          <img src={spreadTheLove1} alt="spread-the-love" className={classes.image} />
          <img src={spreadTheLove2} alt="spread-the-love" className={classes.image} />
          <img src={spreadTheLove3} alt="spread-the-love" className={classes.image} />
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
  return (
    <div className={classes.container}>
      <Typography variant="h1" color="secondary">volunteering</Typography>
      {volunteeringItems.map(item => (
        <VolunteeringItem {...item} key={item.title} />
      ))}
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  image: {
    width: 'auto',
    height: '30vh',
    padding: '10px',
    [theme.breakpoints.down('md')]: {
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
  },
}));
