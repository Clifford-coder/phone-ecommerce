import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

import { fecthProduct, addProductToCart, patchInCartInProdDB } from '../store/actions/productActions';
import { calculatePriceInCart } from '../store/actions/costAction';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { CusButton } from '../styles/StyledComps';
import asyncComponent from '../components/hoc/asyncComponent';

//Load modal asynchronously i.e load it only when needed.
const AsyncModalComponent = asyncComponent(() => import('../components/Modal'));

const Details = ({
	match: {
		params: { id },
	},
}) => {
	const [showModal, setShowModal] = useState(false);
	const dispatch = useDispatch();
	const product = useSelector(({ products }) => products[id]);
	// const currentUserId = useSelector(({auth})=> auth.userId)
	// const isSignedIn = useSelector(({ auth }) => auth.isSignedIn);

	useEffect(() => {
		dispatch(fecthProduct(id));
	}, [dispatch, id]);

	const onAddToCart = () => {
		let initialInCart = _.pick(product, 'inCart', 'count', 'total');
		let initialValues = _.pick(
			product,
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
		const { title, img, price, company, description } = product;

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
		dispatch(addProductToCart(initialValues));
		dispatch(calculatePriceInCart());
		dispatch(patchInCartInProdDB(id, initialInCart));

		// else{
		//show a modal to tell the user to sign in
		// }
	};

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	if (!product) {
		return (
			<div className="container">
				<div className="col-10 mx-auto row">
					<Header name="Loading..." />
				</div>
			</div>
		);
	}
	const { title, img, description, company, price, inCart } = product;

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
								onAddToCart();
								openModal();
							}}
						>
							{inCart ? 'inCart' : 'Add to Cart'}
						</CusButton>
					</div>
				</div>
			</div>
			{/* Modal */}
			{id && <AsyncModalComponent showModal={showModal} closeModal={closeModal} id={id} />}
		</div>
	);
};

export default Details;
