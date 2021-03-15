import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import Product from './Product';
import ProductsList from '../../assets/products.json';
import PriceDetails from '../Price/PriceDetails';
import { useSelector, useDispatch } from 'react-redux';
import countCartItems from './countCartItems';

const CartLayout = () => {
  const classes = useStyles();
  const itemsInCart = ProductsList;
  const cartStore = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [cart, setCart] = useState(cartStore);
 
  const updateCartInStore = () => {
    // dispatch(addToCart(item, size, quantity ));
  }

  return (
    <div className={classes.root}>
      <Card className={classes.cardContainer}>
        <CardContent>
          <Typography variant='h5' className={classes.header}>
            My cart ({countCartItems(cart)});
          </Typography>
          <div className={classes.cartContainer}>
            <div>
              {cart.map(item => (
                <Product item={item} />
              ))}
            </div>
            <div>
              <PriceDetails cart = {cart}/>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartLayout;
