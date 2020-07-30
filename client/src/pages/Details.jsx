import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fecthProduct, addProductToCart, patchInCartInProdDB } from '../store/actions/productActions';
import { getCartInDB, getCart } from '../store/actions/CartActions';
import { calculatePriceInCart } from '../store/actions/costAction';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { CusButton } from '../styles/StyledComps';
import Modal from '../components/Modal';

class Details extends React.Component {
	state = {
		showModal: false,
		id: null,
	};

	componentDidMount() {
		this.props.fecthProduct(this.props.match.params.id);
		this.setState({ id: this.props.match.params.id });
	}

	onAddToCart = (product) => {
		let initialInCart = _.pick(this.props.product, 'inCart', 'count', 'total');
		let initialValues = _.pick(
			this.props.product,
			'id',
			'title',
			'img',
			'price',
			'company',
			'description',
			'inCart',
			'count',
			'total'
		);
		const { title, img, price, company, description } = this.props.product;
		const { id } = this.props.match.params;

		initialInCart.inCart = true;
		initialInCart.total = price;
		initialInCart.count = 1;

		initialValues.id = parseInt(id);
		initialValues.title = title;
		initialValues.img = img;
		initialValues.price = price;
		initialValues.company = company;
		initialValues.description = description;
		initialValues.inCart = true;
		initialValues.count = 1;
		initialValues.total = price;

		//check if user is signed in and the userId is equall to the currentUserId then perform these
		this.props.addProductToCart(initialValues);
		this.props.calculatePriceInCart();
		this.props.patchInCartInProdDB(id, initialInCart);

		// else{
		// 	//show a modal to tell the user to sign in
		// }
	};

	openModal = () => {
		this.setState({ showModal: true, id: this.props.match.params.id });
	};

	closeModal = () => {
		this.setState({ showModal: false });
	};

	render() {
		if (!this.props.product) {
			return (
				<div className="container">
					<div className="col-10 mx-auto row">
						<Header name="Loading..." />
					</div>
				</div>
			);
		}
		// console.log(this.props.currentUserId);
		const { title, img, description, company, price, inCart } = this.props.product;

		return (
			<div className="container">
				{/* Phone Title */}
				<div className="row col-10 mx-auto">
					<Header name={title} />
				</div>
				{/* Phone Details */}
				<div className="row">
					<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
						<img src={img} className="img-fluid" alt={title} />
					</div>
					<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
						<h2>Model : {title}</h2>
						<h4 className="text-title text-uppercase mt-2 mb-2">
							made by : <span>{company}</span>
						</h4>
						<h4 className="text-deepVoilet text-uppercase">
							Price : <span>$</span>
							{price}
						</h4>
						<p className="text-capitalize mt-2 mb-0 font-weight-bold">Some info about this product</p>
						<p className="lead">{description}</p>
						{/* buttons */}
						<div>
							<Link to="/" className="mr-2">
								<CusButton>Back to Products</CusButton>
							</Link>
							<CusButton
								cart
								disabled={inCart ? true : false}
								onClick={() => {
									this.onAddToCart(this.props.product);
									this.openModal();
								}}
							>
								{inCart ? 'inCart' : 'Add to Cart'}
							</CusButton>
						</div>
					</div>
				</div>
				{/* Modal */}
				<Modal showModal={this.state.showModal} closeModal={this.closeModal} id={this.state.id} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	const { userId, isSignedIn } = state.auth;
	return {
		product: state.products[ownProps.match.params.id],
		currentUserId: userId,
		isSignedIn: isSignedIn,
	};
};

export default connect(mapStateToProps, {
	fecthProduct,
	addProductToCart,
	getCartInDB,
	patchInCartInProdDB,
	getCart,
	calculatePriceInCart,
})(Details);
