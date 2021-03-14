import Card from '@material-ui/core/Card';
import { CardActions, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from './styles';

const PriceDetails = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant='subtitle1' className={classes.header}>
            PRICE DETAILS (1 item)
          </Typography>
          <br />
          <Typography variant='subtitle2' className={classes.subHeader}>
            Total MRP - - - - - - - - - - - -
          </Typography>
          <Typography variant='subtitle1' className={classes.price}>
            &#8377; 280
          </Typography>
          <br />
          <Typography variant='subtitle2' className={classes.subHeader}>
            Service fee- - - - - - - - - - - -
          </Typography>
          <Typography variant='subtitle1' className={classes.price}>
            &#8377; 020
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant='subtitle2' className={classes.totalPrice}>
            Total Amount- - - - - - - - - -
          </Typography>
          <Typography variant='subtitle1' className={classes.totalPrice}>
            &#8377; 300
          </Typography>
          <br />
          <Button
            variant='contained'
            color='secondary'
            aria-label='reduce quantity'
            href='/checkout'
            className={classes.button}
          >
            Proceed to Checkout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PriceDetails;
