export const UPDATE_USER_STORE_ACTION = 'UPDATE_USER_STORE_ACTION';
export const LOGIN_ACTION = 'LOGIN_ACTION';
export const LOGOUT_ACTION = 'LOGOUT_ACTION';

const defaultState = {
  userInfo: null
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_USER_STORE_ACTION:
      return { 
        ...state, 
        ...action.payload
      };
    default:
      return state;
  }
}

export const updateUserStoreAction = (payload) => {
  return {
    type: UPDATE_USER_STORE_ACTION,
    payload
  }
}

export const onLogoutAction = (payload) => {
  return {
    type: LOGOUT_ACTION,
    payload
  }
}

export const onLoginAction = (payload, onSuccess) => {
  return {
    type: LOGIN_ACTION,
    payload,
    onSuccess
  }
}