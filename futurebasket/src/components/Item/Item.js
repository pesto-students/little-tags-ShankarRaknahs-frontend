import React from 'react';

import { useStyles } from './styles';
import Product from './Product';

const Item = ({ product }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Product item={product} />
    </div>
  );
};

export default Item;
