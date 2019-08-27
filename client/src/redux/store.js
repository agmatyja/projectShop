import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducers
import products from './ProductsRedux';

// combine reducers
const rootReducer = combineReducers({
  products
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
);


export default store;