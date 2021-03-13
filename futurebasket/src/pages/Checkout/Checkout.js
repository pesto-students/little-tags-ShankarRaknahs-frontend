import React from 'react';
import Categories from '../../components/Categories/Categories';
import Navbar from '../../components/Navbar/Navbar';
import Process from '../../components/Checkout/Process';

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <Categories />
      <Process />
    </div>
  );
};

export default Checkout;
