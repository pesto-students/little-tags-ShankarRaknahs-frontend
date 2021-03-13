import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../config/colors.config';

export const useStyles = makeStyles({
  root: {
    padding: '5vh',
    display: 'flex',
    flexDirection: 'column',
  },
  stepperContainer: {
    width: '40vw',
    alignSelf: 'center',
  },
  button: {
    margin: '5vw',
    fontWeight: 'bold',
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  addressContainer: {
    margin: '1vh',
    width: '50vw',
  },
  paymentContainer: {
    margin: '1vh',
    width: '50vw',
    padding: '2vh',
  },
  actionBtn: {
    width: '20vw',
    marginLeft: '1vw',
    marginTop: '2vh',
    textTransform: 'none',
    fontWeight: 'bold',
  },
  stepperLabel: {
    fontWeight: 'bolder',
  },
  /////
  stepAction: {
    display: 'flex',
    justifyContent: 'center',
  },

  stepButton: {
    margin: '1vw',
  },
});
