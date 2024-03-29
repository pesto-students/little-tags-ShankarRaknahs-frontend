import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../config/colors.config';

export const useStyles = makeStyles((theme) => ({
  title: {
    color: COLORS.TITLE1,
    fontWeight: 'bold',
    // fontFamily: 'Poppins',
    fontSize: 25,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    marginBottom: -20,
  },
  title2: {
    color: COLORS.SECONDARY,
    fontWeight: 'bold',
    marginInlineStart: 15,
    fontSize: 25,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));
