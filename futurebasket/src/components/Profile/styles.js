import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../config/colors.config';

export const useStyles = makeStyles((theme) => ({
  icon: {
    color: COLORS.ICON,
  },
  mobileicon: {
    color: COLORS.PRIMARY,
  },
  close: {
    margin: '5%',
    cursor: 'pointer',
  },
  form: {
    marginLeft: '5%',
  },
}));
