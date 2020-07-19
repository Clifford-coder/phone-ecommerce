// import _ from 'lodash';
import { ADD_TO_CART, GET_CART, REMOVE_ITEM, PATCH_INCART_CARTS } from '../actions/types';

const INITIAL_STATE = {
	cartItems: [],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return { ...state, cartItems: [...state.cartItems, action.payload] };
		case REMOVE_ITEM:
			const cartItems = state.cartItems.filter((obj) => obj.id !== action.payload);
			return { ...state, cartItems };
		case GET_CART:
			return { ...state, cartItems: [...action.payload] };
		case PATCH_INCART_CARTS:
			const itemIndex = state.cartItems.findIndex((obj) => obj.id === action.payload.id);
			state.cartItems.splice(itemIndex, 1, action.payload);
			return { ...state, cartItems: [...state.cartItems] };
		default:
			return state;
	}
};
