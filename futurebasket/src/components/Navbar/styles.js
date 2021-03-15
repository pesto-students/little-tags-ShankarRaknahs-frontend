import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../config/colors.config';

export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    color: COLORS.ICON,
    backgroundColor: COLORS.PRIMARY,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  more: {
    marginLeft: '30%',
  },
  fabContainer: {
    borderRadius: '15%',
    display: 'flex',
    flexDirection: 'column',
    padding: '1%',
    backgroundColor: COLORS.PRIMARY,
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    marginBottom: '20%',
  },
  fab: {
    marginTop: '40%',
  },
  avatar: {
    backgroundColor: '#f0f0f7',
  },
}));
