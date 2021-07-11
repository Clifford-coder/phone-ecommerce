import cogoToast from 'cogo-toast';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useGoogleLogout } from 'react-google-login';
import googleIcon from '../../assets/icons/google.svg';
import { logOut } from '../../store/actions/authAction';

function Logout() {
  const dispatch = useDispatch();
  const onLogoutSuccess = (res) => {
    dispatch(logOut());
    cogoToast.success('Logged out Successfully ✌');
  };

  const onFailure = () => {
    cogoToast.error('Error occured while logging out!');
  };

  const { signOut } = useGoogleLogout({
    clientId: process.env.REACT_APP_GOOGLE_CLIENTID,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button
      type="button"
      className="btn btn-outline-danger mr-2"
      onClick={signOut}
    >
      <img src={googleIcon} alt="google login" className="google-icon"></img>
      <span className="ml-2 text-white font-weight-bold">Sign out</span>
    </button>
  );
}

export default Logout;
