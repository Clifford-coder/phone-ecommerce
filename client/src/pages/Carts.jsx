import React, { useEffect } from 'react';
import CartColumns from '../components/carts/CartColumns';
import { useDispatch, useSelector } from 'react-redux';

import EmptyCart from '../components/carts/EmptyCart';
import Header from '../components/Header';
import { getCart } from '../store/actions/CartActions';
import { calculatePriceInCart } from '../store/actions/costAction';
import CartList from '../components/carts/CartList';
import CartTotals from '../components/carts/CartTotals';

const Carts = () => {
	const dispatch = useDispatch();
	const itemsInCart = useSelector(({ carts: { cartItems } }) => cartItems);

	useEffect(() => {
		dispatch(getCart());
		dispatch(calculatePriceInCart());
	}, [dispatch]);

	if (!itemsInCart) {
		return (
			<div className="container">
				<div className="row mt-lg-8">
					<Header classNamee="text-uppercase" name="Loading cart...." />
				</div>
			</div>
		);
	} else if (itemsInCart.length === 0) {
		return (
			<div className="container">
				<EmptyCart />
			</div>
		);
	}
	return (
		<div className="container">
			<div>
				<div className="row text-center mx-auto">
					<Header classNamee="text-uppercase" name="Your Cart" />
				</div>
				<CartColumns />
				<CartList itemsInCart={itemsInCart} />
				<CartTotals itemsInCart={itemsInCart} />
			</div>
		</div>
	);
};

export default Carts;
