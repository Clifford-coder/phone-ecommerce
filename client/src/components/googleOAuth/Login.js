import React from 'react';
import GoogleLogin from 'react-google-login';
import googleIcon from '../../assets/icons/google.svg';

// refresh token
import { refreshTokenSetup } from './util/refreshToken';

const loginHooks = () => {
	const onSuccess = (res) => {
		console.log('Login Success: currentUser:', res.profileObj);
		//todo: do something else
		alert(`Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`);
		refreshTokenSetup(res);
	};

	const onFailure = (res) => {
		console.log('Login failed: res:', res);
		alert(`Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`);
	};

	return (
		<>
			<GoogleLogin
				clientId={`${process.env.REACT_APP_GOOGLE_CLIENTID}`}
				render={(renderProps) => (
					<button onClick={renderProps.onClick} type="button" className="btn btn-outline-primary mr-2">
						<img src={googleIcon} alt="google login" className="google-icon" />
						<span className="ml-2 text-white font-weight-bold">Sign in with Google</span>
					</button>
				)}
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={'single_host_origin'}
			/>
		</>
	);
};

export default loginHooks;
