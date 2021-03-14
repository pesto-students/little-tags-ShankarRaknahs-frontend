import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../config/colors.config';

export const useStyles = makeStyles({
  root: {
    padding: '2vh',
    marginLeft: '5vw',
  },
  button: {
    fontWeight: 'bold',
    marginTop: '4vh',
  },
  header: {
    fontWeight: 'bold',
    marginBottom: '2vh',
    marginTop: '2vh',
  },
  subHeader: {
    marginBottom: '1vh',
    display: 'inline',
  },
  price: {
    display: 'inline',
  },
  totalPrice: {
    display: 'inline',
    fontWeight: 'bold',
  },
});
