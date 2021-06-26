import React from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { calculatePriceInCart } from '../../store/actions/costAction';
import { patchInCartInProdDB } from '../../store/actions/productActions';
import { removeItemFromCart, patchInCartInCartDB } from '../../store/actions/CartActions';

const CartItem = ({ item }) => {
	const dispatch = useDispatch();

	const onRemoveItemFromCart = () => {
		if (!item) {
			return null;
		}
		const { id } = item;
		let initialInCart = _.pick(item, 'inCart', 'count', 'total');
		initialInCart.inCart = false;
		initialInCart.total = 0;
		initialInCart.count = 0;
		dispatch(patchInCartInProdDB(id, initialInCart));
		dispatch(calculatePriceInCart());
		return dispatch(removeItemFromCart(id));
	};

	const onIncrementItemIncart = async () => {
		if (!item) {
			return null;
		}
		const { id, count, price } = item;
		let initialInCart = _.pick(item, 'count', 'total');
		initialInCart.count = count + 1;
		initialInCart.total = count * price;
		dispatch(patchInCartInCartDB(id, initialInCart));
		dispatch(calculatePriceInCart());
	};

	const onDecrementItemIncart = () => {
		if (!item) {
			return null;
		}
		const { id, count, price } = item;
		let initialInCart = _.pick(item, 'count', 'total');
		initialInCart.count = count - 1;
		if (initialInCart.count <= 0) {
			onRemoveItemFromCart();
		} else {
			initialInCart.total = count * price;
			dispatch(patchInCartInCartDB(id, initialInCart));
			dispatch(calculatePriceInCart());
		}
	};

	const { img, title, price, total, count } = item;
	return (
		<div className="row my-2 text-capitalize text-center ">
			<div className="col-10 mx-auto col-lg-2">
				<img src={img} style={{ width: '5rem', height: '5rem' }} alt={title} className="img-fluid" />
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<span className="d-lg-none">Product : </span>
				{title}
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<span className="d-lg-none">Price : </span>
				{price}
			</div>
			<div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
				<div className="d-flex justify-content-center">
					<div>
						<span
							onClick={() => {
								onDecrementItemIncart();
							}}
							className="btn btn-purple mx-1 "
						>
							<i className="fas fa-minus"></i>
						</span>
						<span className="btn btn-purple mx-1 ">{count}</span>
						<span
							onClick={() => {
								onIncrementItemIncart();
							}}
							className="btn btn-purple mx-1 "
						>
							<i className="fas fa-plus"></i>
						</span>
					</div>
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<div onClick={onRemoveItemFromCart} className="cus-trash-icon">
					<i className="fas fa-trash"></i>
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<strong className="text-capitalize">item total : $ {total}</strong>
			</div>
		</div>
	);
};

export default CartItem;
