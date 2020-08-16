import cogoToast from 'cogo-toast';
import { FETCH_PRODUCTS, FETCH_PRODUCT, ADD_TO_CART, PATCH_INCART } from './types';
import productsapi from '../../apis/productsapi';

export const fetchProducts = () => {
	return async (dispatch) => {
		try {
			const response = await productsapi.get('/products');
			cogoToast.success('Products were succesfully loaded!');
			dispatch({ type: FETCH_PRODUCTS, payload: response.data });
		} catch (error) {
			cogoToast.error('Something went wrong!!');
		}
	};
};

export const fecthProduct = (id) => {
	return async (dispatch) => {
		try {
			const response = await productsapi.get(`/products/${id}`);
			cogoToast.success('Done!!');
			dispatch({ type: FETCH_PRODUCT, payload: response.data });
		} catch (error) {
			cogoToast.error('Something went wrong!!');
		}
	};
};

export const addProductToCart = (values) => {
	return async (dispatch, getState) => {
		try {
			const { userId } = getState().auth;
			const response = await productsapi.post('/carts', { ...values, userId });
			cogoToast.success('Done!!');
			dispatch({ type: ADD_TO_CART, payload: response.data });
		} catch (error) {
			cogoToast.error('Something went wrong!!');
		}
	};
};

export const patchInCartInProdDB = (id, editedInCart) => {
	return async (dispatch) => {
		try {
			const response = await productsapi.patch(`/products/${id}`, editedInCart);
			cogoToast.success('Done!!');
			dispatch({ type: PATCH_INCART, payload: response.data });
		} catch (error) {
			cogoToast.error('Something went wrong!!');
		}
	};
};
