import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { CusButton } from '../styles/StyledComps';

// import GoogleAuth from './GoogleAuth';

// ALL CLASSNAMES STARTING WITH CUS IS MY OUR CUSTOM CSS NOT BOOTSTRAP
const NavBar = () => (
	<nav className="navbar cus-nav-bg navbar-dark navbar-expand-sm px-sm-5">
		<Link to="/">
			{/* https://www.iconfinder.com/icons/1243689/call_phone_icon
					Creative Commons (Attribution 3.0 Unported);
					https://www.iconfinder.com/Makoto_msk */}
			<img src={logo} alt="phone" className="navbar-brand" />
		</Link>
		<ul className="navbar-nav align-items-center">
			<li className="nav-item ml-5">
				<Link to="/" style={{ color: 'var(--primaryWhite)', marginTop: '0.17rem' }} className="nav-link">
					Products
				</Link>
			</li>
		</ul>
		<div className="ml-auto d-flex">
			{/* todo: Add <GoogleAuth /> */}
			<span className="ml-2">
				<Link to="/carts">
					<CusButton>
						<span className="mr-2">
							<i className="fa fa-shopping-cart"></i>
						</span>
						<span>My Cart</span>
					</CusButton>
				</Link>
			</span>
		</div>
	</nav>
);

export default NavBar;
