import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../config/colors.config';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2%',
    marginTop: '5vh',
  },
  container: {
    display: 'flex',
    margin: '2%',
  },
  cover: {
    width: 400,
    height: 400,
  },
  childCover: {
    width: 100,
    height: 100,
    marginTop: '2vh',
  },
  content: {
    marginLeft: '5vw',
  },
  lightText: {
    fontWeight: 'lighter',
  },
  priceDetails: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    marginTop: '3vh',
    marginBottom: '3vh',
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
  sizeContainer: {
    marginTop: '5vh',
    display: 'flex',
  },
  sizeButton: {
    backgroundColor: COLORS.ICON,
    marginRight: '2vw',
  },
  actionButton: {
    color: COLORS.LIGHT,
    backgroundColor: COLORS.ACTION,
    marginTop: '5vh',
  },
  detailsContainer: {
    margin: '2%',
    marginTop: '5%',
  },
  childImages: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1vh',
  },
  quantityContainer: {
    marginTop: '5vh',
    display: 'flex',
    alignItems: 'center'
  },
  buttons: {
    fontSize: "1.5rem",
    margin: "0rem 0.5rem"
  },
  applyColor: {
    color: '#2874f0',
    border: '2px solid #2874f0 !important',
  },
  sizeButton: {
    margin:"0 1rem"
  }
});
