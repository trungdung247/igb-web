export const UPDATE_SERVICE_STORE_ACTION = 'UPDATE_SERVICE_STORE_ACTION';
export const GET_LIST_SERVICES_ACTION = 'GET_LIST_SERVICES_ACTION';
export const GET_DETAIL_SERVICE_ACTION = 'GET_DETAIL_SERVICE_ACTION';

const defaultState = {
  listServices: [],
  loadingGetListService: null,
  detailService: null,
  loadingDetailService: null
};

export default function serviceReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_SERVICE_STORE_ACTION:
      return { 
        ...state, 
        ...action.payload
      };
    default:
      return state;
  }
}

export const updateServiceStoreAction = (payload) => {
  return {
    type: UPDATE_SERVICE_STORE_ACTION,
    payload
  }
}

export const getListServicesAction = (payload) => {
  return {
    type: GET_LIST_SERVICES_ACTION,
    payload
  }
}

export const getDetailServiceAction = (payload) => {
  return {
    type: GET_DETAIL_SERVICE_ACTION,
    payload
  }
}