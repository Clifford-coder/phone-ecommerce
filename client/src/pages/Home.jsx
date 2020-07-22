import React from 'react';
import ProductList from '../components/products/ProductList';

class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<ProductList />
			</div>
		);
	}
}

export default Home;
