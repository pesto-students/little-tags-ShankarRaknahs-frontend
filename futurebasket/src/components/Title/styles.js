import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../config/colors.config';

export const useStyles = makeStyles((theme) => ({
  title: {
    display: 'none',
    color: COLORS.TITLE1,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 25,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    marginBottom: -20,
    marginInlineStart: -5,
  },
  title2: {
    display: 'none',
    color: COLORS.SECONDARY,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 25,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));
