import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';
import Product from './Product';
import ProductsList from '../../assets/products.json';
import PriceDetails from '../Price/PriceDetails';

const CartLayout = () => {
  const classes = useStyles();

  const itemsInCart = ProductsList;

  return (
    <div className={classes.root}>
      <Card className={classes.cardContainer}>
        <CardHeader title={<Typography variant='h6'>My cart</Typography>} />
        <CardContent>
          <div className={classes.cartContainer}>
            <div>
              <Product item={itemsInCart[0]} />
              <Product item={itemsInCart[1]} />
            </div>
            <div>
              <PriceDetails />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CartLayout;
