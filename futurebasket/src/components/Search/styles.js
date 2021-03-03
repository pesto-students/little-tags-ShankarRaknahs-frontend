import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '30vw',
    height: '5vh',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    borderRadius: 30,
    fontFamily: 'Poppins',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));
