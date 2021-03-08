import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../config/colors.config';

export const useStyles = makeStyles((theme) => ({
  icon: {
    color: COLORS.ICON,
  },
  mobileicon: {
    color: COLORS.PRIMARY,
  },
  formControl: {
    color: COLORS.ICON,
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  },
}));
