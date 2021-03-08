import React, { useState } from 'react';
import {
  Link,
  BrowserRouter as Router,
  Route,
  useLocation,
  Switch,
} from 'react-router-dom';
import SubCategory from '../SubCategory/index';
import COLORS from '../../config/colors.config';
import './Categories.css';
import { FormattedMessage } from 'react-intl';
import { categories } from '../Modals/categories.modal';

function Categories() {
  const location = useLocation();
  let defaultCategory = location.path === '/' ? 'Men' : '';
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);

  const handleCategory = (selectedCategory) =>
    setSelectedCategory(selectedCategory);

  return (
    <>
      <div className='categories'>
        {categories.map((category) =>
          category.type === selectedCategory ? (
            <Link to={`/`} className='category' key={category.type}>
              {
                <span
                  style={{
                    color:
                      selectedCategory === category.type
                        ? COLORS.PRIMARY
                        : COLORS.SILVERSAND,

                    display: 'flex',
                  }}
                >
                  <img
                    src={category.icon}
                    alt={category.type}
                    style={{
                      height: 25,
                      width: 25,
                    }}
                  />{' '}
                  <div
                    style={{
                      alignSelf: 'center',
                      marginLeft: '15%',
                      fontSize: '1.2em',
                    }}
                  >
                    <FormattedMessage
                      id={`categories.${category.type}`}
                      defaultMessage={category.type}
                    />{' '}
                  </div>
                </span>
              }
              {selectedCategory === category.type && (
                <div className='selectionBar'></div>
              )}
            </Link>
          ) : (
            <Link
              to={`/category/${category.type}`}
              className='category'
              key={category.type}
            >
              {
                <span
                  style={{
                    color:
                      selectedCategory === category.type
                        ? COLORS.PRIMARY
                        : COLORS.SILVERSAND,

                    display: 'flex',
                  }}
                >
                  <img
                    src={category.icon}
                    alt={category.type}
                    style={{
                      height: 25,
                      width: 25,
                    }}
                  />{' '}
                  <div
                    style={{
                      alignSelf: 'center',
                      marginLeft: '5%',
                    }}
                  >
                    <FormattedMessage
                      id={`categories.${category.type}`}
                      defaultMessage={category.type}
                    />{' '}
                  </div>
                </span>
              }

              {selectedCategory === category.type && (
                <div className='selectionBar'></div>
              )}
            </Link>
          )
        )}
      </div>
      <div className='divider'></div>
      <Switch>
        <Route path='/' exact={true}>
          <SubCategory handleCategory={handleCategory} />
        </Route>
        <Route path='/category/:categoryName' exact = {true}>
          <SubCategory handleCategory={handleCategory} />
        </Route>
      </Switch>
    </>
  );
}

export default Categories;
