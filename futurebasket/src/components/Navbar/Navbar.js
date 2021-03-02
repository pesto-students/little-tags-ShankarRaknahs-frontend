import React from 'react';
import { IconButton, Menu, MenuItem, AppBar, Toolbar } from '@material-ui/core';

import { More } from '@material-ui/icons/';

import { useStyles } from './styles';

import Searchbar from '../Search/SearchBar';
import LanguageInt from '../Language/Language';
import Profile from '../Profile/Profile';
import APP from '../../config/app.config';
import Notification from '../Notifications/Notification';
import Title from '../Title/Title';
import Fab from '@material-ui/core/Fab';

import Cart from '../Cart/Cart';
import Wishlist from '../Wishlist/Wishlist';

export default function Navbar() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuId = APP.DESKTOP_ID;
  const mobileMenuId = APP.MOBILE_ID;
  const app = { firstName: APP.FIRSTNAME, lastName: APP.LASTNAME };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <LanguageInt id={mobileMenuId} />
      </MenuItem>
      <MenuItem>
        <Notification id={mobileMenuId} />
      </MenuItem>
      <MenuItem>
        <Profile id={mobileMenuId} />
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appbar} position='static'>
        <Toolbar>
          <Title {...app} />
          <div className={classes.grow} />
          <Searchbar />
          {/* <div className={classes.grow} /> */}
          <div className={classes.sectionDesktop}>
            <LanguageInt id={menuId} />
            <Notification id={menuId} />
            <Profile id={menuId} />
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <More className={classes.more} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <div className={classes.fabContainer}>
        <Fab size='small' aria-label='add' className={classes.fab}>
          <Cart />
        </Fab>
        <Fab size='small' aria-label='add' className={classes.fab}>
          <Wishlist />
        </Fab>
      </div>

      {renderMobileMenu}
    </div>
  );
}
