import React from 'react';
import Products from '../../features/Products/ProductsContainer';
import Widget from '../../features/Widget/WidgetContainer';

const HomePage = () => (
  <div>
    <Widget />
    <Products productsPerPage={6} pagination={true} />
  </div>
);

export default HomePage;