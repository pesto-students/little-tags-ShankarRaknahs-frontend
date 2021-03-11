import React from 'react';
import { useLocation } from 'react-router-dom';
import Categories from '../../components/Categories/Categories';
import Navbar from '../../components/Navbar/Navbar';
import Item from '../../components/Item/Item';

function Product() {
  //   let params = new URLSearchParams(useLocation().search);

  //   console.log(params);
  return (
    <div>
      <Navbar />
      <Categories />
      <Item />
    </div>
  );
}

export default Product;
