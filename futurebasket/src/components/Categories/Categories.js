import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import SubCategory from '../SubCategory/index';
import COLORS from '../../config/colors.config';
import './Categories.css';
import { FormattedMessage } from "react-intl";

function Categories() {
  const categories = ['Men', 'Women', 'Electronics', 'Jewelry'];
  const [selectedCategory, setSelectedCategory] = useState('Men');

  const handleCategory = (selectedCategory) =>
    setSelectedCategory(selectedCategory);

  return (
    <Router>
      <div className='categories'>
        {categories.map((category) =>
          category === 'Men' ? (
            <Link to={`/`} className='category' key={category}>
              {
                <span
                  style={{
                    color:
                      selectedCategory === category
                        ? COLORS.PRIMARY
                        : COLORS.SILVERSAND,
                  }}
                >
                  {' '}
                    <FormattedMessage id = {`components.categories.${category}`} defaultMessage = {category} />
                  {' '}
                </span>
              }
              {selectedCategory === category && (
                <div className='selectionBar'></div>
              )}
            </Link>
          ) : (
            <Link
              to={`/category/${category}`}
              className='category'
              key={category}
            >
              {
                <span
                  style={{
                    color:
                      selectedCategory === category
                        ? COLORS.PRIMARY
                        : COLORS.SILVERSAND,
                  }}
                >
                  {' '}
                    <FormattedMessage id = {`components.categories.${category}`} defaultMessage = {category} />
                  {' '}
                </span>
              }
              {selectedCategory === category && (
                <div className='selectionBar'></div>
              )}
            </Link>
          )
        )}
      </div>
      <div className='divider'></div>
      <Route path='/' exact={true}>
        <SubCategory handleCategory={handleCategory} />
      </Route>
      <Route path='/category/:categoryName'>
        <SubCategory handleCategory={handleCategory} />
      </Route>
    </Router>
  );
}

export default Categories;
