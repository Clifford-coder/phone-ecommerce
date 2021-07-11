import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import Logout from './Logout';

const GoogleOAuth = () => {
  //check if a user is logged in
  const user = useSelector((state) => state.auth.user);
  return <>{user ? <Logout /> : <Login />}</>;
};

export default GoogleOAuth;
