import axios from 'axios';
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';

const backend = 'http://localhost:5000';

export const SignUp = ({ name, email, password }) => {
  return dispatch => {
    axios
      .post(`${backend}/user/signup`, { name, email, password })
      .then(({ data }) => {
        dispatch({ type: SIGNUP, payload: data });
      })
      .catch(err => {
        console.error(err);
        dispatch({ type: SIGNUP_ERROR, payload: err });
      });
  };
};
