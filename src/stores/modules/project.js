export const UPDATE_PROJECT_STORE_ACTION = 'UPDATE_PROJECT_STORE_ACTION';
export const GET_LIST_PROJECTS_ACTION = 'GET_LIST_PROJECTS_ACTION';
export const GET_DETAIL_PROJECT_ACTION = 'GET_DETAIL_PROJECT_ACTION';

const defaultState = {
  listProjects: [],
  loadingGetListProject: null,
  detailProject: null,
  loadingDetailProject: null
};

export default function projectReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_PROJECT_STORE_ACTION:
      return { 
        ...state, 
        ...action.payload
      };
    default:
      return state;
  }
}

export const updateProjectStoreAction = (payload) => {
  return {
    type: UPDATE_PROJECT_STORE_ACTION,
    payload
  }
}

export const getListProjectsAction = (payload) => {
  return {
    type: GET_LIST_PROJECTS_ACTION,
    payload
  }
}

export const getDetailProjectAction = (payload) => {
  return {
    type: GET_DETAIL_PROJECT_ACTION,
    payload
  }
}