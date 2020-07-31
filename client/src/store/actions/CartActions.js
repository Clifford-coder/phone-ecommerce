import cogoToast from 'cogo-toast';
import { GET_CART, REMOVE_ITEM, GET_CARTS_INDB, PATCH_INCART_CARTS } from './types';
import productsapi from '../../apis/productsapi';

export const getCart = () => {
	return async (dispatch) => {
		try {
			const response = await productsapi.get('/carts');
			const { message } = response.data;
			cogoToast.success(message);
			dispatch({ type: GET_CART, payload: response.data });
		} catch (error) {
			cogoToast.error(error.response.data.message);
		}
	};
};

export const getCartInDB = (id) => {
	return async (dispatch) => {
		try {
			const response = await productsapi.get(`/carts/${id}`);
			const { message } = response.data;
			cogoToast.success(message);
			dispatch({ type: GET_CARTS_INDB, payload: response.data });
		} catch (error) {
			cogoToast.error(error.response.data.message);
		}
	};
};

export const removeItemFromCart = (id) => {
	return async (dispatch) => {
		try {
			await productsapi.delete(`carts/${id}`);
			dispatch({ type: REMOVE_ITEM, payload: id });
		} catch (error) {
			cogoToast.error(error.response.data.message);
		}
	};
};

export const patchInCartInCartDB = (id, editedInCart) => {
	return async (dispatch) => {
		try {
			const response = await productsapi.patch(`/carts/${id}`, editedInCart);
			const { message } = response.data;
			cogoToast.success(message);
			dispatch({ type: PATCH_INCART_CARTS, payload: response.data });
		} catch (error) {
			cogoToast.error(error.response.data.message);
		}
	};
};
