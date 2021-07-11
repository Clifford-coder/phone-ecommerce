import cogoToast from 'cogo-toast';
import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import googleIcon from '../../assets/icons/google.svg';
import { signIn } from '../../store/actions/authAction';
// refresh token
import { refreshTokenSetup } from './util/refreshToken';

const Login = () => {
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    dispatch(signIn(res.profileObj));
    refreshTokenSetup(res);
    cogoToast.success('Logged in Successfully ✌');
  };

  const onFailure = (res) => {
    cogoToast.error('Error occured while logging in!');
  };

  return (
    <>
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENTID}`}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            type="button"
            className="btn btn-outline-primary mr-2"
          >
            <img src={googleIcon} alt="google login" className="google-icon" />
            <span className="ml-2 text-white font-weight-bold">
              Sign in with Google
            </span>
          </button>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </>
  );
};

export default Login;
