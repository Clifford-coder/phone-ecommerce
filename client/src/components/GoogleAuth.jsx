import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, signOut } from '../store/actions/authAction';
import { CusButton } from '../styles/StyledComps';

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client: auth2', () => {
			window.gapi.client
				.init({
					clientId: '760114961786-497vqg3uj7r2o77ml8u9hk8vcsh2end0.apps.googleusercontent.com',
					scope: 'email',
				})
				.then(() => {
					//code to be executed after the entire gapi library is ready.
					this.auth = window.gapi.auth2.getAuthInstance(); //save a reference of the auth obj to our class

					//check if the user is signed in or not
					this.onAuthStatusChange(this.auth.isSignedIn.get());

					//listen for login status change
					this.auth.isSignedIn.listen(this.onAuthStatusChange);
				});
		});
	}

	onAuthStatusChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		// if (this.props.isSignedIn === null) {
		// 	return null
		// }
		if (this.props.isSignedIn) {
			return (
				<React.Fragment>
					<CusButton onClick={this.onSignOutClick}>
						<span className="mr-2">
							<i className="fab fa-google" />
						</span>
						Sign Out
					</CusButton>

					<span className="ml-2">
						<Link to="/carts">
							<CusButton>
								<span className="mr-2">
									<i className="fa fa-shopping-cart"></i>
								</span>
								<span>My Carts</span>
							</CusButton>
						</Link>
					</span>
				</React.Fragment>
			);
		} else {
			return (
				<CusButton onClick={this.onSignInClick}>
					<span className="mr-2">
						<i className="fab fa-google" />
					</span>
					<span>Sign In with Google</span>
				</CusButton>
			);
		}
	}

	// style={{ color: '#42045a' }}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn: signIn, signOut: signOut })(GoogleAuth);
