import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../config/colors.config';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2%',
  },
  card: {
    position: 'relative',
  },
  productsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1rem',
  },
  avatar: {
    position: 'absolute',
    backgroundColor: '#f0f0f7',
    bottom: 10,
    right: 10,
  },
  colors: {
    display: 'flex',
  },
  itemColor: {},
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    width: 250,
  },
  coverContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: '2%',
  },
  cover: {
    width: 250,
    height: 300,
  },
  cart: {
    backgroundColor: COLORS.ACTION,
  },
  price: {
    color: '#000000',
    fontWeight: 'bold',
  },
  actionArea: {},
  lightText: {
    fontWeight: 'lighter',
  },
  priceDetails: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  sizeContainer: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  sizes: {
    marginLeft: '0.5rem',
  },
  originalPrice: {
    marginLeft: '0.5rem',
  },
  discount: {
    marginLeft: '0.5rem',
    color: 'green',
  },
});

export const useFilterStyles = makeStyles((theme) => ({
  container: {
    width: '15%',
    position: 'sticky',
    height: '100%,',
  },
  subContainer: {
    marginLeft: '1rem',
  },
  filter: {
    marginTop: '1rem',
  },
  minMax: {
    width: '8ch',
  },
  range: {
    display: 'flex',
    textDecoration: 'none',
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '5vh',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    paddding: '0.5rem',
  },
  iconButton: {
    padding: 1,
  },
  searchResults: {
    maxHeight: '20vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    flexWrap: 'nowrap',
    marginTop: '1rem',
  },
  slider: {
    marginTop: '1rem',
  },
  searchFilters: {
    marginTop: '1rem',
  },
}));
