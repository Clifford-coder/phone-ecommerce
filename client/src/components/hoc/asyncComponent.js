//THIS COMPONENT IS TO HELP US DO LAZY LOADING i.e LOADING COMPONENTS ONLY WHEN THEY ARE NEEDED.
import React from 'react';

const asyncComponent = (importComponent) => {
	return class extends React.Component {
		state = {
			component: null,
		};
		componentDidMount() {
			importComponent().then((cmp) => {
				this.setState({ component: cmp.default });
			});
		}
		render() {
			const Component = this.state.component;
			return Component ? <Component {...this.props} /> : null;
		}
	};
};

export default asyncComponent;
