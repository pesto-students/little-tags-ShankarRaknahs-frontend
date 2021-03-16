import { useSelector } from 'react-redux';
import { useStyles } from './styles';
import ItemDisplay  from "./itemDisplay";

const { Typography } = require('@material-ui/core');

const OrderReview = () => {
  const classes = useStyles();
  const cartStore = useSelector((state) => state.cartReducer);
  console.log({cartStore});

  return (
    <div className={classes.stepContainer}>
      <Typography variant='h6'>
        Review your order and make the payment to conform.
      </Typography>
      {cartStore.map(item => (<ItemDisplay item = {item} />))}
    </div>
  );
};

export default OrderReview;
