import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  FETCH_PROFILE_PENDING,
  FETCH_PROFILE_SUCCESS
} from "../actions/auth";

const initialState = {
  user: null,
  loggingIn: false,
  loggingOut: false,
  loginErrors: null
};

function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return Object.assign({}, initialState);
    case LOGIN_SUCCESS:
      let user = action.payload.data;
      window.localStorage.setItem("uid", user.uid);
      return Object.assign({}, state, {
        user: user,
        loggingIn: false,
        loginErrors: null
      });
    case FETCH_PROFILE_SUCCESS:
      return Object.assign({}, state, {
        user: action.payload.data,
        loggingIn: false,
        loginErrors: null
      });
    default:
      return state;
  }
}

export default auth;
