import React from 'react'
import Categories from '../../components/Categories/Categories'
import Navbar from '../../components/Navbar/Navbar'
import Item from "../../components/Item/Item";

function Product() {
    return (
        <div>
            <Navbar />
            <Categories />
            <Item />
        </div>
    )
}

export default Product
