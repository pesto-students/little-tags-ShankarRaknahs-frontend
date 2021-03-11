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
  sizeButtons: {
    marginLeft: '1vw',
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
});
