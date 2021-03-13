import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Categories from '../../components/Categories/Categories';
import Navbar from '../../components/Navbar/Navbar';
import List from '../../components/ListProducts/List';
import queryFilter from "components/ListProducts/queryfilter";
import { useEffect } from 'react';

const ItemsContext = React.createContext();

function Search() {
  let params = new URLSearchParams(useLocation().search);
  let queryTerm = params.get('q');
  const [items, setItems] = useState(queryFilter(queryTerm));

  useEffect(() => {
    setItems(queryFilter(queryTerm));
  }, [queryTerm])

  return (
    <div>
      <Navbar />
      <Categories /> 
      <ItemsContext.Provider value = {items}>
        <List products={items} />
      </ItemsContext.Provider>
    </div>
  );
}

export { Search, ItemsContext };
