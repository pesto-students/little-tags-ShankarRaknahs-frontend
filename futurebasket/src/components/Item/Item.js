import React from 'react';

import { useStyles } from './styles';
import Product from './Product';

const Item = ({ item }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Product />
    </div>
  );
};

export default Item;
