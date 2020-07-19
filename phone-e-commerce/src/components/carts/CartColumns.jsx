import React from 'react';

function CartColouuns() {
	return (
		<div className="container-fluid text-center d-none d-lg-block">
			<div className="row text-muted">
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">product</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">name of product</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">price</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">product quantity</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">remove</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">total</p>
				</div>
			</div>
		</div>
	);
}

export default CartColouuns;
