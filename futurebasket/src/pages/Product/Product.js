import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from '../../components/Categories/Categories';
import Navbar from '../../components/Navbar/Navbar';
import Item from '../../components/Item/Item';
import ProductsList from '../../assets/products.json';

function Product() {
  let { id } = useParams();
  let product = ProductsList.filter(
    (productObj) => productObj.id === parseInt(id)
  );
  return (
    <div>
      <Navbar />
      <Categories />
      <Item product={product[0]} />
    </div>
  );
}

export default Product;
