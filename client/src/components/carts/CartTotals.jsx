import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItemFromCart } from '../../store/actions/CartActions';
import { clearCost } from '../../store/actions/costAction';
import { patchInCartInProdDB } from '../../store/actions/productActions';

const CartTotals = (props) => {
	const clearCart = () => {
		props.itemsInCart.map((obj) => {
			let intialInCart = _.pick(obj, 'inCart');
			intialInCart.inCart = false;
			props.patchInCartInProdDB(obj.id, intialInCart);
			return props.removeItemFromCart(obj.id);
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
									props.clearCost();
								}}
							>
								clear cart
							</button>
						</Link>
						<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
							<h4 className="text-title">
								<span>Total Tax : </span>
								<strong>$ {props.cost.tax}</strong>
							</h4>
							<h4 className="text-title">
								<span>Sub total: </span>
								<strong>$ {props.cost.subTotal}</strong>
							</h4>
							<h4 className="text-title">
								<span>Total Cost: </span>
								<strong>$ {props.cost.totalCost}</strong>
							</h4>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		cost: state.cost,
	};
};

export default connect(mapStateToProps, { removeItemFromCart, clearCost, patchInCartInProdDB })(CartTotals);
