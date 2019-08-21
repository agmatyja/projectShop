import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import Products from '../../features/Products/ProductsContainer';

const HomePage = () => (
  <div>
    <PageTitle>Ready to read?</PageTitle>
    <Products productsPerPage={6} pagination={true} />
  </div>
);

export default HomePage;