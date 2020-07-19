import { CALCULATE_COST, CLEAR_COST } from '../actions/types';

const INITIAL_STATE = {
	subTotal: 0,
	tax: 0,
	totalCost: 0,
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CALCULATE_COST:
			return { ...state, ...action.payload };
		case CLEAR_COST:
			return { ...state, ...INITIAL_STATE };
		default:
			return state;
	}
};
