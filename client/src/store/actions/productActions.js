import cogoToast from 'cogo-toast';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  ADD_TO_CART,
  PATCH_INCART,
} from './types';
import productsapi from '../../apis/productsapi';

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_PRODUCTS, payload: null, isLoading: true });
      const response = await productsapi.get('/products');
      cogoToast.success('Products were succesfully loaded!');
      dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data,
        isLoading: false,
      });
    } catch (error) {
      console.log('errorrrrr ---', error);
    }
  };
};

export const fecthProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await productsapi.get(`/products/${id}`);
      dispatch({ type: FETCH_PRODUCT, payload: response.data });
    } catch (error) {
      console.log('errorr ---- ', error);
    }
  };
};

export const addProductToCart = (values) => {
  return async (dispatch, getState) => {
    try {
      const { user } = getState().auth;
      const response = await productsapi.post('/carts', {
        ...values,
        userId: user?.googleId,
      });
      dispatch({ type: ADD_TO_CART, payload: response.data });
    } catch (error) {
      console.log('errorr in adding to cart ---- ', error);
    }
  };
};

export const patchInCartInProdDB = (id, editedInCart) => {
  return async (dispatch) => {
    try {
      const response = await productsapi.patch(`/products/${id}`, editedInCart);
      dispatch({ type: PATCH_INCART, payload: response.data });
    } catch (error) {
      console.log('errorr ---- ', error);
    }
  };
};
