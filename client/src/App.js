import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

// import routes
import Home from './components/pages/Home/HomePage';
import SingleProduct from './components/pages/SingleProduct/SingleProductPage';
import Products from './components/pages/Products/ProductsPage';
import Contact from './components/pages/Contact/ContactPage';
import Cart from './components/pages/Cart/CartPage';
import Payment from './components/pages/Payment/PaymentPage';
import NotFound from './components/pages/NotFound/NotFoundPage';

class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/added" component={() => <Home added={true}/>} />
          <Route path="/products" exact component={Products} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/products/:id" exact component={SingleProduct} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/payment" exact component={Payment} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

}

export default App;