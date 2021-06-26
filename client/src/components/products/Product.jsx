import React from 'react';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ProductCardWrapper } from '../../styles/StyledComps';
import { addProductToCart, patchInCartInProdDB } from '../../store/actions/productActions';
import { calculatePriceInCart } from '../../store/actions/costAction';

const Product = ({ product, openModal }) => {
	const dispatch = useDispatch();

	const onAddToCart = () => {
		if (!product) {
			return null;
		}
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
			'total',
			'tax'
		);
		const { title, img, price, company, description, id } = product;
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

		dispatch(addProductToCart(initialValues));
		dispatch(patchInCartInProdDB(id, initialInCart));
		dispatch(calculatePriceInCart());
	};

	const { title, img, inCart, price, id } = product;
	return (
		<>
			<ProductCardWrapper>
				<div className="card">
					<div className="cusImg-container p-5">
						<Link to={`details/${id}`}>
							<img src={img} alt="product" className="card-img-top" />
						</Link>
						<button
							className="cus-cart-btn"
							onClick={() => {
								onAddToCart();
								openModal();
							}}
							disabled={inCart ? true : false}
						>
							{inCart ? (
								<p className="text-capitalized mb-0" disabled>
									in cart
								</p>
							) : (
								<span className="text-on-hover">
									<i className="fas fa-cart-plus" />
								</span>
							)}
						</button>
					</div>
					{/* card footer */}
					<div className="card-footer d-flex justify-content-between">
						<p className="align-self-center mb-0 cus-card-footer-text">{title}</p>
						<h5 className="cus-card-footer-text mb-0">
							<span className="mr-1">$</span>
							{price}
						</h5>
					</div>
				</div>
			</ProductCardWrapper>
		</>
	);
};

//Strictly set the the datatypes for the props.
Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		img: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool,
	}).isRequired,
};

export default Product;
