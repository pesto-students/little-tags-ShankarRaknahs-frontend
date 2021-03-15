import Card from '@material-ui/core/Card';
import { CardActions, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';

const PriceDetails = ({cart}) => {
  const classes = useStyles();
  console.log(cart);
  const [totalPrice, totalItems] = cart.reduce((acc,item) => {
    for(const size of Object.keys(item.cart)) {
      acc[0] += (item.cart[size].quantity * item.price);
      acc[1] += 1;
    }
    return acc;
  },[0,0]) 

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant='subtitle1' className={classes.header}>
            Price details ({totalItems} item)
          </Typography>
          <br />
          <Typography variant='subtitle1' className={classes.subHeader}>
            Total MRP - - - - - - - - - -
          </Typography>
          <Typography variant='subtitle1' className={classes.price}>
            &#8377; {totalPrice}
          </Typography>
          <br />
          <Typography variant='subtitle1' className={classes.subHeader}>
            Service fee- - - - - - - - - -
          </Typography>
          <Typography variant='subtitle1' className={classes.price}>
            &#8377; 020
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant='subtitle1' className={classes.totalPrice}>
            Total Amount- - - - -- - -
          </Typography>
          <Typography variant='subtitle1' className={classes.totalPrice}>
            &#8377; {totalPrice + 20}
          </Typography>
          <br />
          <Link to = '/checkout'>
          <Button
            variant='contained'
            color='secondary'
            aria-label='reduce quantity'
            className={classes.button}
          >
            Proceed to Checkout
          </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default PriceDetails;
