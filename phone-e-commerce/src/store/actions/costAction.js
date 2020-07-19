import { CALCULATE_COST, CLEAR_COST } from './types';

export const calculatePriceInCart = () => {
	return async (dispatch, getState) => {
		let subTotal = 0;
		getState().carts.cartItems.map((item) => {
			return (subTotal += item.total);
		});
		let tempTax = subTotal * 0.06;
		const tax = parseFloat(tempTax.toFixed(2));
		const totalCost = tax + subTotal;
		dispatch({ type: CALCULATE_COST, payload: { subTotal, tax, totalCost } });
	};
};

export const clearCost = () => {
	return {
		type: CLEAR_COST,
	};
};
