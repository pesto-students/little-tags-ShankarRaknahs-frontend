import React from 'react';
import Navbar from '../Navbar/Navbar';
import Categories from '../Categories/Categories';

const Layout = ({ children }) => {
  return (
    <>
      <section className='fixed-layout'>
        <Navbar />
        <Categories />
      </section>
      <section className='routing-layout'>{children}</section>
    </>
  );
};

export default Layout;
