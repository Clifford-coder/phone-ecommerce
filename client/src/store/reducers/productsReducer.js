import _ from 'lodash';

import { FETCH_PRODUCTS, FETCH_PRODUCT, ADD_TO_CART, PATCH_INCART } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS:
			//the '...' take out the key-value pair from the obj returned from the mapKeys function and
			//adds them to the state object.
			//mapKeys() is fxn that turns array of objs into object of objs.
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case FETCH_PRODUCT:
			//return an obj with the IDs as the keys and the value as all the data we get from the payload
			//i.e the 'resopnse.data' we get from the backend.
			return { ...state, [action.payload.id]: action.payload };
		case ADD_TO_CART:
			return { ...state, [action.payload.id]: action.payload };
		case PATCH_INCART:
			return { ...state, [action.payload.id]: action.payload };
		default:
			return state;
	}
};
