import React, { useState } from 'react'
import { Link,  BrowserRouter as Router, Route, useParams, } from 'react-router-dom';
import  SubCategory  from '../SubCategory/index'
import './Categories.css'

function Categories() {
    const categories = ["Men", "Women", "Electronics", "Jewelry"];
    const [selectedCategory, setSelectedCategory] = useState("Men");

    const handleCategory = (selectedCategory) =>  {
        console.log({selectedCategory});
        setSelectedCategory(selectedCategory);
    } 

    return (
        <Router>
            <div className = "categories">
                {categories.map(category => category === 'Men' ? (
                        <Link to = {`/`} className = "category" key = {category}>
                            {category}
                            {selectedCategory === category &&  <div className = 'selectionBar'></div> }
                        </Link>
                ) :(
                    <Link to = {`/category/${category}`} className = "category" key = {category}>
                        {category}
                        {selectedCategory === category &&  <div className = 'selectionBar'></div> }
                    </Link>
                )
                 
                )}
            </div>
            <div className = "divider"></div>
            <Route path = '/' exact = {true}>
                <SubCategory handleCategory = {handleCategory} />
            </Route>
            <Route path = '/category/:categoryName'>
                <SubCategory handleCategory = {handleCategory} />
            </Route>
        </Router>
    )
}


export default Categories
