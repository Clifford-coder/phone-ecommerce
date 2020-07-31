import { CALCULATE_COST, CLEAR_COST } from './types';
import cogoToast from 'cogo-toast';

export const calculatePriceInCart = () => {
	return async (dispatch, getState) => {
		try {
			let subTotal = 0;
			getState().carts.cartItems.map((item) => {
				return (subTotal += item.total);
			});
			let tempTax = subTotal * 0.06;
			const tax = parseFloat(tempTax.toFixed(2));
			const totalCost = tax + subTotal;
			dispatch({ type: CALCULATE_COST, payload: { subTotal, tax, totalCost } });
		} catch (error) {
			cogoToast.error(error.response.data.message);
		}
	};
};

export const clearCost = () => {
	return {
		type: CLEAR_COST,
	};
};
