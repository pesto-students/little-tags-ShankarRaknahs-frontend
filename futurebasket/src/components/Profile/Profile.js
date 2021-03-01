import React from 'react';

import LoginForm from '../Login/Form';
import { IconButton, SwipeableDrawer } from '@material-ui/core';
import { PersonOutlineOutlined, Close } from '@material-ui/icons/';

import APP from '../../config/app.config';
import { useStyles } from './styles';

const Profile = ({ id }) => {
  console.log(id);

  const classes = useStyles();
  const [isProfile, setProfile] = React.useState(false);

  const toggleProfileWindow = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setProfile(open);
  };

  return (
    <>
      <IconButton
        edge='end'
        aria-label='account of current user'
        aria-controls={id}
        aria-haspopup='true'
        onClick={toggleProfileWindow(true)}
        color='inherit'
      >
        <PersonOutlineOutlined
          className={id === APP.DESKTOP_ID ? classes.icon : classes.mobileicon}
        />
      </IconButton>

      <SwipeableDrawer
        anchor={'right'}
        open={isProfile}
        onClose={toggleProfileWindow(false)}
        onOpen={toggleProfileWindow(true)}
      >
        <Close className={classes.close} onClick={toggleProfileWindow(false)} />
        <LoginForm className={classes.form} />
      </SwipeableDrawer>
    </>
  );
};

export default Profile;
