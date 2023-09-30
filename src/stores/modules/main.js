export const UPDATE_MAIN_STORE_ACTION = 'UPDATE_MAIN_STORE_ACTION';
export const START_CONNECT_ACTION = 'START_CONNECT_ACTION';
export const RESIZE_SCREEN_ACTION = 'RESIZE_SCREEN_ACTION';
export const MOBILE_NAV_ACTION = 'MOBILE_NAV_ACTION';

const defaultState = {
  loadingGetConfig: null,
  listInformations: [],
  listServices: [],
  listProjects: [],
  mobileView: false,
  mobileNavbar: false
};

export default function mainReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_MAIN_STORE_ACTION:
      return { 
        ...state, 
        ...action.payload
      };
    case RESIZE_SCREEN_ACTION:
      return { 
        ...state, 
        mobileView: action.data
      };
    case MOBILE_NAV_ACTION:
      return { 
        ...state, 
        mobileNavbar: action.data
      };
    default:
      return state;
  }
}

export const startConnectAction = (payload) => {
  return {
    type: START_CONNECT_ACTION,
    payload
  }
}

export const updateMainStoreAction = (payload) => {
  return {
    type: UPDATE_MAIN_STORE_ACTION,
    payload
  }
}

export const resizeScreenAction = (data) => {
  return {
    type: RESIZE_SCREEN_ACTION,
    data
  }
}

export const mobileNavAction = (data) => {
  return {
    type: MOBILE_NAV_ACTION,
    data
  }
}