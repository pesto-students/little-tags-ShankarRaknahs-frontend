import React from 'react';
import Navbar  from '../Navbar/Navbar';
import Categories from '../Categories/Categories'

function Home() {
    return (
        <div className = "homepage-container">
            <Navbar></Navbar>
            <Categories></Categories> 
        </div>
    )
}

export default Home;
