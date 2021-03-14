import React from 'react';
import Categories from '../../components/Categories/Categories';
import Navbar from '../../components/Navbar/Navbar';
import CartLayout from '../../components/Cart/CartLayout';

const CartView = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <CartLayout />
    </div>
  );
};

export default CartView;
