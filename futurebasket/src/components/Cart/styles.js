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
    paddingInline: '2vw',
    marginInline: '8vw',
  },
  cartContainer: {
    display: 'flex',
  },
  cartItem: {
    // paddingInline: '2vw',
  },
  cover: {
    margin: '2vw',
    width: 80,
    height: 100,
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
    display: 'flex',
  },
  quantity: {
    fontWeight: 'bold',
    fontSize: '1em',
    margin: '0.8vw',
  },
  roundBtn: {
    borderRadius: 10,
  },
  productContainer: {
    marginTop: '2vh',
    width: '100vh',
  },
  header: {
    fontWeight: 'bold',
  },
  avatar: {
    backgroundColor: '#f0f0f7',
    color: '#000000',
  },
});
