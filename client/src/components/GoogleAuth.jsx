import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../store/actions/authAction';
import { CusButton } from '../styles/StyledComps';
import { GOOGLE_CLIENTID } from '../config';

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load('client: auth2', () => {
			window.gapi.client
				.init({
					clientId: GOOGLE_CLIENTID,
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
