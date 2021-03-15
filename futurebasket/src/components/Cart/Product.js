import React, { useState } from 'react';
import { useStyles } from './styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import { Avatar, CardActions, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { addToCart, removeToCart } from "actions/cart";
import { useDispatch } from 'react-redux';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Product = ({ item: itemFromStore }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [item, setItem] = useState(itemFromStore)

  const increaseQty = (size) => {
    dispatch(addToCart(item, size, 1));
    let newItem = increseItemQuantity(item, size);
    setItem(newItem);
  };

  const decreaseQty = (size) => {
    dispatch(removeToCart(item, size, 1));
    let newItem = decreseItemQuantity(item, size);
    setItem(newItem);
  };

  return (
    <>
    {Object.keys(item.cart).map(size => (
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
              <div style = {{margin : "1rem 0rem"}}>
              <Typography variant='span' >
              size: { size}
              </Typography>
              </div>
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
                <div>
                  <Avatar className={classes.avatar} onClick={() => decreaseQty(size)}>
                    <RemoveIcon />
                  </Avatar>
                </div>
                <Typography variant='h3' className={classes.quantity}>
                  {item.cart[size]["quantity"]}
                </Typography>
                <div>
                  <Avatar className={classes.avatar} onClick={() => increaseQty(size)}>
                    <AddIcon />
                  </Avatar>
                </div>
              </div>
            </CardContent>
          </div>
          <CardActions>
            <Button variant='outlined' size='small' color = "secondary" startIcon = {<RemoveCircleIcon />} >
             REMOVE
            </Button>
            <Button variant='outlined' size='small'  color = "primary" startIcon = {<FavoriteIcon />}>
              Move to wishlist
            </Button>
          </CardActions>
        </Card>
      </div>
      ))}
    </>
  );
};

export default Product;


function decreseItemQuantity(item, size) {
  let cartItem = Object.assign({}, item);
  if(cartItem['cart'][size]) {
      let quantity = Math.max(cartItem['cart'][size]['quantity'], 0);
      if(quantity === 0) 
          delete  cartItem['cart'][size];
      else
          cartItem['cart'][size]['quantity'] = quantity; 
  }
  return cartItem;
}

function increseItemQuantity(item, size) {
  let cartItem = Object.assign({}, item);
  if(cartItem['cart'][size]) {
    let quantity = Math.min(cartItem['cart'][size]['quantity'], 5);
    cartItem['cart'][size]['quantity'] = quantity; 
  }
  return cartItem;
}