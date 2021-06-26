import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../store/actions/CartActions';
import { clearCost } from '../../store/actions/costAction';
import { patchInCartInProdDB } from '../../store/actions/productActions';

const CartTotals = ({ itemsInCart }) => {
	const dispatch = useDispatch();
	const cost = useSelector(({ cost }) => cost);

	const clearCart = () => {
		itemsInCart.map((item) => {
			let intialInCart = _.pick(item, 'inCart');
			intialInCart.inCart = false;
			dispatch(patchInCartInProdDB(item.id, intialInCart));
			return dispatch(removeItemFromCart(item.id));
		});
	};

	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
						<Link to="/">
							<button
								className="btn btn-outline-danger text-uppercase mb-3 px-5"
								onClick={() => {
									clearCart();
									dispatch(clearCost());
								}}
							>
								clear cart
							</button>
						</Link>
						<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
							<h4 className="text-title">
								<span>Total Tax : </span>
								<strong>$ {cost.tax}</strong>
							</h4>
							<h4 className="text-title">
								<span>Sub total: </span>
								<strong>$ {cost.subTotal}</strong>
							</h4>
							<h4 className="text-title">
								<span>Total Cost: </span>
								<strong>$ {cost.totalCost}</strong>
							</h4>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default CartTotals;
