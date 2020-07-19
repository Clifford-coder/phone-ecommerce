import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { getCart } from '../../store/actions/CartActions';
import { calculatePriceInCart } from '../../store/actions/costAction';

class CartList extends Component {
	componentDidUpdate(prevProps) {
		if (prevProps.itemsInCart !== this.props.itemsInCart) {
			this.props.calculatePriceInCart();
		}
	}
	render() {
		return (
			<div className="container-fluid">
				{this.props.itemsInCart.map((item) => {
					return <CartItem key={item.id} item={item} />;
				})}
			</div>
		);
	}
}

export default connect(null, { getCart, calculatePriceInCart })(CartList);
