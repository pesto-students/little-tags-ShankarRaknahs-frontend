import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../config/colors.config';

export const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  button: {
    marginRight: '1vw',
  },
  stepAction: {
    display: 'flex',
    justifyContent: 'center',
  },
  stepContainer: {
    // marginTop: '5vh',
    marginBottom: '1vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  addressContainer: {
    margin: '1vh',
  },
  stepButton: {
    margin: '1vw',
  },
  paymentContainer: {
    marginTop: '7vh',
    marginBottom: '5vh',
  },
});
