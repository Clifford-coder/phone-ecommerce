import { SIGN_IN, SIGN_OUT } from './types';

export const signIn = (user) => {
  return {
    type: SIGN_IN,
    payload: user,
  };
};

export const logOut = () => {
  return {
    type: SIGN_OUT,
  };
};
