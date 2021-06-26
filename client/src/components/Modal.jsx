import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CusButton, ModalContainer } from '../styles/StyledComps';
import { fecthProduct } from '../store/actions/productActions';

const Modal = ({ id, showModal, closeModal }) => {
	const dispatch = useDispatch();
	const product = useSelector(({ products }) => products[id]);

	useEffect(() => {
		dispatch(fecthProduct(id));
	}, [dispatch, id]);

	if (!product && !id) {
		return null;
	} else {
		const { title, img, price } = product;
		return showModal ? (
			<ModalContainer>
				<div className="container">
					<div className="row">
						<div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5">
							<h5 className="text-title">Item added to the cart</h5>
							<img src={img} className="img-fluid" alt={title} />
							<h5>{title}</h5>
							<h5>Price : $ {price}</h5>
							<Link to="/">
								<CusButton onClick={() => closeModal()}>Buy More</CusButton>
							</Link>
							<Link to="/carts">
								<CusButton cart className="ml-2" onClick={() => closeModal()}>
									View Cart
								</CusButton>
							</Link>
						</div>
					</div>
				</div>
			</ModalContainer>
		) : null;
	}
};

export default Modal;
