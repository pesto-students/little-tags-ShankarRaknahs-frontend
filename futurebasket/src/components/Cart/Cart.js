import { ShoppingCart } from '@material-ui/icons/';
import { IconButton, Badge } from '@material-ui/core';

const Cart = () => {
  return (
    <IconButton aria-label='show notifications' color='inherit' href='/cart'>
      <Badge badgeContent={1} color='secondary'>
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
};

export default Cart;
