import React from 'react';
import Categories from '../../components/Categories/Categories';
import Navbar from '../../components/Navbar/Navbar';
import List from '../../components/ListProducts/List';
import { productsModal } from '../../components/Modals/products.modal';

function Search() {
  return (
    <div>
      <Navbar />
      <Categories />
      <List products={productsModal} />
    </div>
  );
}

export default Search;
