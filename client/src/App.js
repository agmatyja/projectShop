import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

// import routes
import Home from './components/pages/Home/HomePage';
import SingleProduct from './components/pages/SingleProduct/SingleProductPage';
import AddProduct from './components/pages/AddProduct/AddProduct';
import Products from './components/pages/Products/ProductsPage';
import Contact from './components/pages/Contact/ContactPage';
import NotFound from './components/pages/NotFound/NotFoundPage';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" exact component={Products} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/products/new" exact component={AddProduct} />
          <Route path="/products/:id" exact component={SingleProduct} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

}

export default App;