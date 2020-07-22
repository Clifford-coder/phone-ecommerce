import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { calculatePriceInCart } from '../../store/actions/costAction';
import { patchInCartInProdDB } from '../../store/actions/productActions';
import { removeItemFromCart, patchInCartInCartDB } from '../../store/actions/CartActions';

class CartItem extends Component {
	onRemoveItemFromCart = () => {
		if (!this.props.item) {
			return null;
		}
		const { id } = this.props.item;
		let initialInCart = _.pick(this.props.item, 'inCart', 'count', 'total');
		initialInCart.inCart = false;
		initialInCart.total = 0;
		initialInCart.count = 0;
		this.props.patchInCartInProdDB(id, initialInCart);
		this.props.calculatePriceInCart();
		return this.props.removeItemFromCart(id);
	};

	onIncrementItemIncart = async () => {
		if (!this.props.item) {
			return null;
		}
		const { id, count, price } = this.props.item;
		let initialInCart = _.pick(this.props.item, 'count', 'total');
		initialInCart.count = count + 1;
		initialInCart.total = count * price;
		await this.props.patchInCartInCartDB(id, initialInCart);
		this.props.calculatePriceInCart();
	};

	onDecrementItemIncart = () => {
		if (!this.props.item) {
			return null;
		}
		const { id, count, price } = this.props.item;
		let initialInCart = _.pick(this.props.item, 'count', 'total');
		initialInCart.count = count - 1;
		if (initialInCart.count <= 0) {
			this.onRemoveItemFromCart();
		} else {
			initialInCart.total = count * price;
			this.props.patchInCartInCartDB(id, initialInCart);
			this.props.calculatePriceInCart();
		}
	};

	render() {
		const { img, title, price, total, count } = this.props.item;
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
									this.onDecrementItemIncart();
								}}
								className="btn btn-purple mx-1 "
							>
								<i className="fas fa-minus"></i>
							</span>
							<span className="btn btn-purple mx-1 ">{count}</span>
							<span
								onClick={() => {
									this.onIncrementItemIncart();
								}}
								className="btn btn-purple mx-1 "
							>
								<i className="fas fa-plus"></i>
							</span>
						</div>
					</div>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<div onClick={this.onRemoveItemFromCart} className="cus-trash-icon">
						<i className="fas fa-trash"></i>
					</div>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<strong className="text-capitalize">item total : $ {total}</strong>
				</div>
			</div>
		);
	}
}

export default connect(null, { removeItemFromCart, calculatePriceInCart, patchInCartInProdDB, patchInCartInCartDB })(
	CartItem
);
