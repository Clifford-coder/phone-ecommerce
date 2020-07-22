import React from 'react';

class PageNotFound extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 text-center text-uppercase mx-auto pt-5">
						<h1 className="display-3 text-title mr-2">404</h1>
						<h1 className="text-title">Error</h1>
						<h2>page not found</h2>
						<h4>
							The requested URL<span className="text-danger">{this.props.location.pathname}</span> was
							not found
						</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default PageNotFound;
