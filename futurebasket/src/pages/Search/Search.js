import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Categories from '../../components/Categories/Categories';
import Navbar from '../../components/Navbar/Navbar';
import List from '../../components/ListProducts/List';
import { productsModal } from '../../components/Modals/products.modal';
import productsJson from 'assets/products.json';
import queryFilter from "components/ListProducts/queryfilter";
import { useEffect } from 'react';

function Search() {
  let params = new URLSearchParams(useLocation().search);
  let queryTerm = params.get('q');
  // const [query, setQuery] = useState(queryTerm)
  const [items, setItems] = useState(queryFilter(queryTerm));

  useEffect(() => {
    setItems(queryFilter(queryTerm));
  }, [queryTerm])

  return (
    <div>
      <Navbar />
      <Categories /> 
      <List products={items} />
    </div>
  );
}

export default Search;
