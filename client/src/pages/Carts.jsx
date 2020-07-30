import React from 'react';
import CartColumns from '../components/carts/CartColumns';
import { connect } from 'react-redux';
import EmptyCart from '../components/carts/EmptyCart';
import Header from '../components/Header';
import { getCart } from '../store/actions/CartActions';
import { calculatePriceInCart } from '../store/actions/costAction';
import CartList from '../components/carts/CartList';
import CartTotals from '../components/carts/CartTotals';

class Carts extends React.Component {
	async componentDidMount() {
		await this.props.getCart();
		this.props.calculatePriceInCart();
	}

	render() {
		// console.log(this.props.itemsInCart);
		if (!this.props.itemsInCart) {
			return (
				<div className="container">
					<div className="row mt-lg-8">
						<Header classNamee="text-uppercase" name="Loading cart...." />
					</div>
				</div>
			);
		} else if (this.props.itemsInCart.length === 0) {
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
					<CartList itemsInCart={this.props.itemsInCart} />
					<CartTotals itemsInCart={this.props.itemsInCart} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ carts: { cartItems } }) => {
	return {
		itemsInCart: cartItems,
	};
};

export default connect(mapStateToProps, { getCart, calculatePriceInCart })(Carts);
