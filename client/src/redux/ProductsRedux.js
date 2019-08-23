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


/* ACTIONS */

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
export const LOAD_PRODUCT = createActionName('LOAD_PRODUCT');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const LOAD_PRODUCTS_BY_PAGE = createActionName('LOAD_PRODUCTS_PAGE');
export const SORT_PRODUCTS = createActionName('SORT_PRODUCTS');

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadProduct = payload => ({ payload, type: LOAD_PRODUCT });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const loadProductsByPage = payload => ({ payload, type: LOAD_PRODUCTS_BY_PAGE });
export const sortProducts = payload => ({ payload, type: SORT_PRODUCTS });

/* INITIAL STATE */

const initialState = {
  data: [{
    id: '1',
    title: '',
    author: '',
    extraInfo: '',
    image: null,
    description: '',
    price: 0,
    inStore: 0
  }],
  request: {
    success: false,
    error: null,
    pending: false
  },
  cart: [{ productId: '1', quantity: 3}, { productId: '2', quantity: 2}],
  sort: 'TITLE_ASC'
}

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: action.payload };
	  case START_REQUEST:
      return { ...statePart, request: { pending: true } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, success: true } };
	  case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
	  case RESET_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: null } };  
    case LOAD_PRODUCT:
      return { ...statePart, product: action.payload };
    case SORT_PRODUCTS:
      return { ...statePart, data: null, sort: action.payload };	  
	  case LOAD_PRODUCTS_BY_PAGE:
      return {
        ...statePart,
        productsPerPage: action.payload.productsPerPage,
        presentPage: action.payload.presentPage,
        amount: action.payload.amount,
        data: [...action.payload.products],
    };
    default: 
	    return statePart;
  }
};

/* THUNKS */

export const loadProductsRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/products`);
      dispatch(loadProducts(res.data));
      dispatch(endRequest());

    } catch(e) {	
      console.log(e)
	    dispatch(errorRequest(e.message));
    }

  };
};

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

export const addProductRequest = (product) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      await axios.post(`${API_URL}/products`, product);
      dispatch(endRequest());

    } catch(e) {
      console.log(e)
      dispatch(errorRequest(e.message));
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


