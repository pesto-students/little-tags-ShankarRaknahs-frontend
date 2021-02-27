import { IconButton } from '@material-ui/core';

import { PersonOutlineOutlined } from '@material-ui/icons/';
import APP from '../../config/app.config';
import { useStyles } from './styles';

const Profile = ({ id }) => {
  const classes = useStyles();

  return (
    <IconButton
      edge='end'
      aria-label='account of current user'
      aria-controls={id}
      aria-haspopup='true'
      onClick={() => {}}
      color='inherit'
    >
      <PersonOutlineOutlined
        className={id === APP.DESKTOP_ID ? classes.icon : classes.mobileicon}
      />
    </IconButton>
  );
};

export default Profile;
