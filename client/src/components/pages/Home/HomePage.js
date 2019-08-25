import React from 'react';
import Products from '../../features/Products/ProductsContainer';
import Widget from '../../features/Widget/WidgetContainer';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

const HomePage = ({added}) => {
  if (added) {
    setTimeout(() => {
      ToastsStore.success('Item added to the cart.')  
    })
  }
  return (
    <div>
      <Widget />
      <Products productsPerPage={6} pagination={true} />
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER}/>
    </div>
  );
}

export default HomePage;