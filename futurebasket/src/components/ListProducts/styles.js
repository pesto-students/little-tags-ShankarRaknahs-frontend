import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../config/colors.config';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2%',
  },
  productsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '1rem',
  },
  header: {
    // backgroundColor: '#ffffff',
  },
  avatar: {
    backgroundColor: '#f0f0f7',
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
    width: 200,
  },
  coverContainer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: '2%',
  },
  cover: {
    width: 300,
    height: 300,
  },
  cart: {
    backgroundColor: COLORS.ACTION,
  },
  price: {
    color: '#000000',
    fontWeight: 'bold',
  },
  actionArea:{
    
  },
  lightText:{
    fontWeight:"lighter"
  },
  priceDetails:{
    display: "flex",
    justifyContent:"start",
    alignItems:"center"
  },
  sizeContainer:{
    display: "flex",
    justifyContent:"start",
    alignItems:"center"
  },
  sizes:{
    marginLeft: "0.5rem"
  },
  originalPrice:{
    marginLeft: "0.5rem"
  },
  discount:{
    marginLeft: "0.5rem",
    color: 'green'
  },
});
