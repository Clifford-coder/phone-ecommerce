import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { calculatePriceInCart } from '../../store/actions/costAction';

const CartList = ({ itemsInCart }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculatePriceInCart());
	}, [itemsInCart, dispatch]);

	return (
		<div className="container-fluid">
			{itemsInCart.map((item) => {
				return <CartItem key={item.id} item={item} />;
			})}
		</div>
	);
};

export default CartList;
