import { useStyles } from './styles';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import React from 'react';
import ProductsList from '../../assets/products.json';
import Product from './Product';

const WishlistLayout = () => {
  const classes = useStyles();

  const itemsInWishlist = ProductsList;

  return (
    <div className={classes.root}>
      <Card className={classes.cardContainer}>
        <CardContent>
          <Typography variant='h6' className={classes.header}>
            My wishlist (4)
          </Typography>
          <div className={classes.cartContainer}>
            <Product item={itemsInWishlist[0]} />
            <Product item={itemsInWishlist[1]} />
            <Product item={itemsInWishlist[1]} />
            <Product item={itemsInWishlist[1]} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WishlistLayout;
