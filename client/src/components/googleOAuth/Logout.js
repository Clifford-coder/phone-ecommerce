import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import googleIcon from '../../assets/icons/google.svg';

function LogoutHooks() {
	const onLogoutSuccess = (res) => {
		console.log('Logged out Success');
		alert('Logged out Successfully ✌');
	};

	const onFailure = () => {
		console.log('Handle failure cases');
	};

	const { signOut } = useGoogleLogout({
		clientId: process.env.REACT_APP_GOOGLE_CLIENTID,
		onLogoutSuccess,
		onFailure,
	});

	return (
		<button type="button" className="btn btn-outline-danger" onClick={signOut}>
			<img src={googleIcon} alt="google login" className="icon"></img>
			<span className="buttonText">Sign out</span>
		</button>
	);
}

export default LogoutHooks;
