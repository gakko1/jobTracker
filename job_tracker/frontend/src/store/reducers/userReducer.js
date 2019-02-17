import {
  SIGNUP,
  LOGIN,
  LOGOUT,
  LOGIN_ERROR,
  SIGNUP_ERROR
} from '../actions/userActions';

const initialState = {
  user: '',
  name: '',
  email: '',
  signedUp: false,
  loggedIn: false,
  loading: false,
  loginError: false,
  signupError: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, signedUp: true, signupError: false };
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        signedUp: false,
        user: action.payload._id,
        loginError: false
      };
    case LOGOUT:
      return {
        ...state,
        user: '',
        name: '',
        email: '',
        signedUp: false,
        loggedIn: false,
        loading: false,
        loginError: false,
        signupError: false
      };
    case LOGIN_ERROR:
      return { ...state, loginError: true };
    case SIGNUP_ERROR:
      return { ...state, signupError: true };
    default:
      return state;
  }
};
