import { GET_CART, REMOVE_ITEM, GET_CARTS_INDB, PATCH_INCART_CARTS } from './types';
import productsapi from '../../apis/productsapi';

export const getCart = () => {
	return async (dispatch) => {
		const response = await productsapi.get('/carts');
		dispatch({ type: GET_CART, payload: response.data });
	};
};

export const getCartInDB = (id) => {
	return async (dispatch) => {
		const response = await productsapi.get(`/carts/${id}`);
		dispatch({ type: GET_CARTS_INDB, payload: response.data });
	};
};

export const removeItemFromCart = (id) => {
	return async (dispatch) => {
		await productsapi.delete(`carts/${id}`);
		dispatch({ type: REMOVE_ITEM, payload: id });
	};
};

export const patchInCartInCartDB = (id, editedInCart) => {
	return async (dispatch) => {
		const response = await productsapi.patch(`/carts/${id}`, editedInCart);
		dispatch({ type: PATCH_INCART_CARTS, payload: response.data });
	};
};
