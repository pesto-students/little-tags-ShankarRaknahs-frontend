import { ShoppingCart } from '@material-ui/icons/';
import { IconButton, Badge, withStyles } from '@material-ui/core';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 5,
    top: 4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const Cart = () => {
  return (
    <IconButton aria-label='show notifications' color='black'>
      {/* <StyledBadge badgeContent={4} color="secondary"> */}
        <ShoppingCart />
      {/* </StyledBadge> */}
    </IconButton>
  );
};

export default Cart;
