import * as React from 'react';
import { makeStyles, IconButton, Menu, MenuItem } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HashLink as Link } from 'react-router-hash-link';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { IBaseNavigationProps } from '../types';
import { Logo } from '../../basic/Logo/logo';

export const CollapsedNavigation = (props: IBaseNavigationProps) => {
  const classes = useStyles();
  const [opened, setOpened] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | Element>(null);

  const handleOpen = (event: React.MouseEvent) => {
    setOpened(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpened(false);
    setAnchorEl(null);
  };

  return (
    <div className={classes.header}>
      <Logo />
      <IconButton onClick={handleOpen}>
        <FontAwesomeIcon icon={faBars} color="#ffffff" />
      </IconButton>
      <Menu open={opened} anchorEl={anchorEl} onClose={handleClose}>
        {props.links.map((link) => (
          <Link key={link.label} smooth={true} to={`#${link.route}`}>
            <MenuItem onClick={handleClose}>
              {link.label}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
};

const useStyles = makeStyles({
  text: {
    color: 'white',
    textTransform: 'capitalize',
  },
  header: {
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: '100%',
    padding: '0 20px',
  },
});
