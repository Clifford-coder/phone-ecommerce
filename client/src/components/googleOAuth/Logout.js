import React from 'react';
import cogoToast from 'cogo-toast';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import { useGoogleLogout } from 'react-google-login';

import googleIcon from '../../assets/icons/google.svg';
import { logOut } from '../../store/actions/authAction';
import {
  patchInCartInCartDB,
  removeItemFromCart,
} from '../../store/actions/CartActions';

function Logout() {
  const dispatch = useDispatch();
  const history = useHistory();
  const itemsInCart = useSelector(({ carts: { cartItems } }) => cartItems);

  const clearCart = () => {
    itemsInCart.map((item) => {
      let intialInCart = _.pick(item, 'inCart');
      intialInCart.inCart = false;
      dispatch(patchInCartInCartDB(item.id, intialInCart));
      return dispatch(removeItemFromCart(item.id));
    });
  };

  const onLogoutSuccess = (res) => {
    dispatch(logOut());
    clearCart();
    cogoToast.success('Logged out Successfully ✌');
    history.push('/');
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
