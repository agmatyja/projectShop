import React from 'react';
import Products from '../../features/Products/ProductsContainer';

const HomePage = () => (
  <div>
    <Products productsPerPage={6} pagination={true} />
  </div>
);

export default HomePage;