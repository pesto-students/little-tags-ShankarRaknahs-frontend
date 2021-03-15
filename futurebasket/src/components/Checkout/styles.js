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

export const useStylesItems = makeStyles({
  productContainer: {
    marginTop: '2vh',
    width: '100vh',
  },
  container: {
    display: 'flex',
    padding: '1vh',
  },
  cover: {
    margin: '2vw',
    width: 80,
    height: 100,
  }, brand: {
    color: '#9B9796',
  }, priceDetails: {
    display: 'flex',
    // justifyContent: 'start',
    alignItems: 'center',
  },
  discount: {
    marginLeft: '0.5rem',
    color: 'green',
  },
  price: {
    color: '#000000',
    fontWeight: 'bold',
  }, originalPrice: {
    marginLeft: '0.5vw',
  },
})
