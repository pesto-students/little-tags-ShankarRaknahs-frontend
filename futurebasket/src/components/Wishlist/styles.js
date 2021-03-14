import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../config/colors.config';

export const useStyles = makeStyles({
  root: {
    padding: '5vh',
  },
  cardContainer: {
    backgroundColor: '#f0f0f7',
    paddingInline: '4vw',
  },
  cartContainer: {
    // display: 'flex',
    flexWrap: 'wrap',
  },
  cover: {
    width: 150,
    height: 200,
  },
  container: {
    display: 'flex',
    padding: '1vh',
  },
  roundBtn: {
    borderRadius: 10,
  },
  productContainer: {
    margin: '2vh',
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
    marginTop: '2vh',
    marginRight: '2vw',
  },
});
