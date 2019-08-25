import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getProducts = ({ products }) => products.data;
export const getProductsCount = ({ products }) => products.amount;
export const getRequest = ({ products }) => products.request;
export const getProduct = ({ products }) => products.product;
export const getPages = ({ products }) => Math.ceil(products.amount / products.productsPerPage);
export const getPresentPage = ({ products }) => products.presentPage;
export const getSort = ({ products }) => products.sort;
export const getCart = ({ products }) => products.cart;
export const getStore = ({ products }) => products.store;
export const getPromotion = ({products}) => products.promotion;
export const getNumberOfCartItems = ({ products }) => {
  let count = 0;
  for (let product of products.cart) {
    count += product.quantity
  }
  return count
};

/* ACTIONS */

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_PRODUCT = createActionName('LOAD_PRODUCT');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const LOAD_PRODUCTS_BY_PAGE = createActionName('LOAD_PRODUCTS_BY_PAGE');
export const SORT_PRODUCTS = createActionName('SORT_PRODUCTS');
export const ADD_CART_PRODUCT = createActionName('ADD_CART_PRODUCT');
export const REMOVE_CART_PRODUCT = createActionName('REMOVE_CART_PRODUCT');
export const DELETE_CART_PRODUCT = createActionName('DELETE_CART_PRODUCT');
export const ADD_DISCOUNT_CODE = createActionName('ADD_DISCOUNT_CODE');
export const CART_PAY = createActionName('CART_PAY');

export const loadProduct = payload => ({ payload, type: LOAD_PRODUCT });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const loadProductsByPage = payload => ({ payload, type: LOAD_PRODUCTS_BY_PAGE });
export const sortProducts = payload => ({ payload, type: SORT_PRODUCTS });
export const addCartProduct = payload => ({ payload, type: ADD_CART_PRODUCT});
export const removeCartProduct = payload => ({ payload, type: REMOVE_CART_PRODUCT});
export const deleteCartProduct = payload => ({ payload, type: DELETE_CART_PRODUCT});
export const addDiscountCode = payload => ({ payload, type: ADD_DISCOUNT_CODE});
export const cartPay = () => ({ type: CART_PAY });

/* INITIAL STATE */

const initialState = {
  data: [{
    id: '1',
    title: '',
    author: '',
    extraInfo: '',
    image: null,
    description: '',
    price: 0
  }],
  request: {
    success: false,
    error: null,
    pending: false
  },
  //cart: [{ productId: '1', quantity: 3}, { productId: '2', quantity: 2}],
  cart: [],
  sort: 'TITLE_ASC',
  promotion: 0,
  store: {}
}

/* REDUCER */

const addToCart = (cart, id) => {
  for (let cartItem of cart) {
    if (cartItem.productId === id) {
      cartItem.quantity++
      return [...cart] // make a copy of the cart to trigger Redux
    }
  }
  cart.push({ productId: id, quantity: 1 });
  return cart
}

const removeFromCart = (cart, id) => {
  for (let cartItem of cart) {
    if (cartItem.productId === id && cartItem.quantity > 0) {
      cartItem.quantity--
      return [...cart] // make a copy of the cart to trigger Redux
    }
  }
  return cart
}

const deleteFromCart = (cart, id) => {
  cart.splice(cart.findIndex(function(i){
    return i.productId === id;
  }), 1);
  return [...cart] // make a copy of the cart to trigger Redux
}

const updateStore = (store, products) => {
  for (let prod of products) {
    store[prod.id] = prod;
  }
  return {...store}
}

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
	  case START_REQUEST:
      return { ...statePart, request: { pending: true } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, success: true } };
	  case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
	  case RESET_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: null } };  
    case LOAD_PRODUCT:
      return { ...statePart, product: action.payload, store: updateStore(statePart.store, [action.payload]) };
    case SORT_PRODUCTS:
      return { ...statePart, data: null, sort: action.payload };
    case ADD_CART_PRODUCT:
      return { ...statePart, cart: addToCart(statePart.cart, action.payload)};
    case REMOVE_CART_PRODUCT:
      return { ...statePart, cart: removeFromCart(statePart.cart, action.payload)};
    case DELETE_CART_PRODUCT:
      return { ...statePart, cart: deleteFromCart(statePart.cart, action.payload)};
    case ADD_DISCOUNT_CODE:
      return { ...statePart, promotion: action.payload };
    case CART_PAY:
      return { ...statePart, promotion: 0, cart: [] };
	  case LOAD_PRODUCTS_BY_PAGE:
      return {
        ...statePart,
        productsPerPage: action.payload.productsPerPage,
        presentPage: action.payload.presentPage,
        amount: action.payload.amount,
        data: [...action.payload.products],
        store: updateStore(statePart.store, action.payload.products),
      };
    default: 
	    return statePart;
  }
};

/* THUNKS */

export const loadProductRequest = (id) => {
  return async dispatch => {

    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/products/` + id);
      dispatch(loadProduct(res.data));
      dispatch(endRequest());

    } catch(e) {
      console.log(e);
  	  if (e.response.status === 404) {
  		  dispatch(loadProduct(null));  
        dispatch(endRequest());
  	  } else {
  	    dispatch(errorRequest(e.message));
  	  }
    }

  };
};

export const loadProductsByPageRequest = (page, productsPerPage, sort) => {
  return async dispatch => {
    dispatch(startRequest());
    try {

      const startAt = (page - 1) * productsPerPage;
      const limit = productsPerPage;

      let res = await axios.get(`${API_URL}/products/range/${startAt}/${limit}/${sort}`);

      const payload = {
        products: res.data.products,
        amount: res.data.amount,
        productsPerPage,
        presentPage: page,
      };

      dispatch(loadProductsByPage(payload));
      dispatch(endRequest());

    } catch(e) {
      console.log(e)
      dispatch(errorRequest(e.message));
    }

  };
};


