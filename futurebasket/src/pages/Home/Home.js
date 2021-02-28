import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Categories from '../../components/Categories/Categories';

function Home() {
  return (
    <div className='homepage-container'>
      <Navbar />
      <Categories />
    </div>
  );
}

export default Home;
