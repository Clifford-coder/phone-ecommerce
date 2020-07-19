import React from 'react';

class Header extends React.Component {
	render() {
		return <h1 className="text-title mx-auto my-4">{this.props.name}</h1>;
	}
}

export default Header;
