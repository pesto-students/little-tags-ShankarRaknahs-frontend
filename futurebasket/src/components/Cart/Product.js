import React from 'react';
import { useStyles } from './styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { Avatar, CardActions, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const Product = ({ item }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState(1);

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQty = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
  };

  return (
    <div className={classes.productContainer}>
      <Card className={classes.cartItem}>
        <div className={classes.container}>
          <CardMedia
            component='img'
            className={classes.cover}
            image={item.image}
          />
          <CardContent>
            <Typography variant='subtitle1'>{item.title}</Typography>
            <Typography variant='subtitle2' className={classes.brand}>
              {item.company}
            </Typography>
            <div className={classes.priceDetails}>
              <Typography variant='subtitle1' className={classes.price}>
                &#8377;{item.price}
              </Typography>
              <Typography
                variant='subtitle1'
                style={{ textDecoration: 'line-through' }}
                className={classes.originalPrice}
              >
                {item.originalPrice}
              </Typography>
              <Typography className={(classes.lightText, classes.discount)}>
                ({item.discount} off)
              </Typography>
            </div>
            <div className={classes.qtyContainer}>
              <div onClick={decreaseQty}>
                <Avatar className={classes.avatar}>
                  <RemoveIcon />
                </Avatar>
              </div>
              <Typography variant='h3' className={classes.quantity}>
                {quantity}
              </Typography>
              <div onClick={increaseQty}>
                <Avatar className={classes.avatar}>
                  <AddIcon />
                </Avatar>
              </div>
            </div>
          </CardContent>
        </div>
        <CardActions>
          <Button variant='outlined' size='small'>
            Remove
          </Button>
          <Button variant='outlined' size='small'>
            Move to wishlist
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
