import React from 'react';
import { connect } from 'react-redux';

import Product from './Product';
import Header from '../Header';
import { fetchProducts } from '../../store/actions/productActions';
import asyncComponent from '../hoc/asyncComponent';

//Load modal asynchronously i.e load it only when needed.
const AsyncModalComponent = asyncComponent(() => import('../Modal'));

class ProductList extends React.Component {
	state = {
		showModal: false,
	};

	openModal = () => {
		this.setState({ showModal: true });
	};

	closeModal = () => {
		this.setState({ showModal: false });
	};

	//get the products on the fisrt render
	componentDidMount() {
		this.props.fetchProducts();
	}

	renderList() {
		return this.props.products.map((product, index) => {
			return (
				<div key={index} className="col-9 mx-auto col-md-6 col-lg-3 my-3">
					<Product openModal={this.openModal} product={product} />
				</div>
			);
		});
	}

	render() {
		const PageHeading = 'OUR PRODUCTS';
		if (!this.props.products) {
			return <h1>No Products</h1>;
		}

		return (
			<div className="container">
				<div className="row">
					<Header name={PageHeading} />
				</div>
				<div className="row">{this.renderList()}</div>
				{/* Modal */}
				<div>
					<AsyncModalComponent
						products={this.props.products}
						showModal={this.state.showModal}
						closeModal={this.closeModal}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: Object.values(state.products),
	};
};

export default connect(mapStateToProps, { fetchProducts })(ProductList);
