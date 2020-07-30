import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { CusButton, ModalContainer } from '../styles/StyledComps';
import { fetchProducts } from '../store/actions/productActions';

class Modal extends React.Component {
	componentDidMount() {
		this.props.fetchProducts();
	}

	render() {
		if (!this.props.products) {
			return null;
		} else {
			// const { title, img, price } = props.product;
			console.log(this.props);
			return this.props.showModal ? (
				<ModalContainer>
					<div className="container">
						<div className="row">
							<div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5">
								<h5 className="text-title">Item added to the cart</h5>
								<img src="{img} " className="img-fluid" alt="pic" />
								<h5>"title"</h5>
								<h5>Price : $ "price"</h5>
								<Link to="/">
									<CusButton onClick={() => this.props.closeModal()}>Buy More</CusButton>
								</Link>
								<Link to="/carts">
									<CusButton cart className="ml-2" onClick={() => this.props.closeModal()}>
										View Cart
									</CusButton>
								</Link>
							</div>
						</div>
					</div>
				</ModalContainer>
			) : null;
		}
	}
}

const mapStateToProps = (state) => {
	return {
		products: Object.values(state.products),
	};
};

export default connect(mapStateToProps, { fetchProducts })(Modal);
