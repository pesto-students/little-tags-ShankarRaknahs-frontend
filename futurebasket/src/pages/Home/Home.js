import React from 'react';
import Layout from '../../components/Layout';
import SubCategory from '../../components/SubCategory';

function Home() {
  return (
    <div className='homepage-container'>
      <Layout>
        <SubCategory category={'men'} />
      </Layout>
    </div>
  );
}

export default Home;
