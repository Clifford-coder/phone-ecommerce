import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../src/styles/App.css';

import Home from '../src/pages/Home';
import Carts from '../src/pages/Carts';
import ProductDetails from '../src/pages/Details';
import PageNotFound from '../src/pages/PageNotFound';
import Navbar from '../src/components/NavBar';

const App = () => {
	return (
		<React.Fragment>
			<BrowserRouter>
				{/* Include Navbar everywhere */}
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/details/:id" exact component={ProductDetails} />
					<Route path="/carts" exact component={Carts} />
					<Route path="*" component={PageNotFound} />
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
};

export default App;
