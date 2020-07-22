import { FETCH_PRODUCTS, FETCH_PRODUCT, ADD_TO_CART, PATCH_INCART } from './types';
import productsapi from '../../apis/productsapi';

export const fetchProducts = () => {
	return async (dispatch) => {
		const response = await productsapi.get('/products');
		dispatch({ type: FETCH_PRODUCTS, payload: response.data });
	};
};

export const fecthProduct = (id) => {
	return async (dispatch) => {
		const response = await productsapi.get(`/products/${id}`);
		dispatch({ type: FETCH_PRODUCT, payload: response.data });
	};
};

export const addProductToCart = (values) => {
	return async (dispatch, getState) => {
		const { userId } = getState().auth;
		const response = await productsapi.post('/carts', { ...values, userId });
		dispatch({ type: ADD_TO_CART, payload: response.data });
	};
};

export const patchInCartInProdDB = (id, editedInCart) => {
	return async (dispatch) => {
		const response = await productsapi.patch(`/products/${id}`, editedInCart);
		dispatch({ type: PATCH_INCART, payload: response.data });
	};
};
