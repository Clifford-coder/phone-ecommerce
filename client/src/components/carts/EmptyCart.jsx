import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';
import { CusButton } from '../../styles/StyledComps';

function EmptyCart() {
	return (
		<div className="row m-lg-5 justify-content-center">
			<div className="text-center ">
				<Header classNamee="text-uppercase" name="Your Cart is currently empty" />
				<h4 className="text-capitalize"> You can shop to add products to your cart</h4>
				<Link to="/">
					<CusButton>Shop Now</CusButton>
				</Link>
			</div>
		</div>
	);
}

export default EmptyCart;
