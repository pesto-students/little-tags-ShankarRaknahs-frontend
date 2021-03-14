import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../config/colors.config';

export const useStyles = makeStyles({
  root: {
    padding: '5vh',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContainer: {
    backgroundColor: '#f0f0f7',
    paddingInline: '4vw',
  },
  cartContainer: {
    display: 'flex',
  },
  cartItem: {
    // width: '10  0%',
  },
  cover: {
    width: 100,
    height: 150,
  },
  container: {
    display: 'flex',
    padding: '1vh',
  },
  brand: {
    color: '#9B9796',
  },
  content: {
    marginLeft: '5vw',
  },
  priceDetails: {
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
  },
  originalPrice: {
    marginLeft: '0.5vw',
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'right',
  },
  button: {
    fontWeight: 'bold',
  },
  qtyContainer: {
    marginTop: '2vh',
  },
  quantity: {
    fontWeight: 'bold',
    fontSize: '1em',
    marginInline: '1vw',
  },
  roundBtn: {
    borderRadius: 10,
  },
  productContainer: {
    marginTop: '2vh',
  },
});
