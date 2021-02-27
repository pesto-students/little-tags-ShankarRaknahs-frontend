import { IconButton, Badge } from '@material-ui/core';

import { Notifications } from '@material-ui/icons/';
import APP from '../../config/app.config';
import { useStyles } from './styles';

const Notification = ({ id }) => {
  const classes = useStyles();

  return (
    <IconButton aria-label='show notifications' color='inherit'>
      <Badge badgeContent={10} color='secondary'>
        <Notifications
          className={id === APP.DESKTOP_ID ? classes.icon : classes.mobileicon}
        />
      </Badge>
    </IconButton>
  );
};

export default Notification;
