export const UPDATE_PRESENTATION_STORE_ACTION = 'UPDATE_PRESENTATION_STORE_ACTION';
export const GET_LIST_ACTIVITY_ACTION = 'GET_LIST_ACTIVITY_ACTION';
export const GET_DETAIL_ACTIVITY_ACTION = 'GET_DETAIL_ACTIVITY_ACTION';
export const GET_LIST_OUTSTANDING_ACTION = 'GET_LIST_OUTSTANDING_ACTION';
export const GET_LIST_PARTNER_ACTION = 'GET_LIST_PARTNER_ACTION';
export const GET_LIST_PROGRAM_ACTION = 'GET_LIST_PROGRAM_ACTION';
export const GET_LIST_ACHIEVEMENT_ACTION = 'GET_LIST_ACHIEVEMENT_ACTION';
export const GET_LIST_CAPACITY_ACTION = 'GET_LIST_CAPACITY_ACTION';
export const GET_LIST_RATING_ACTION = 'GET_LIST_RATING_ACTION';
export const GET_LIST_TEAM_ACTION = 'GET_LIST_TEAM_ACTION';

const defaultState = {
  loadingGetPresentation: null,
  loadingGetOutstandings: null,
  listOutstandings: [],
  loadingGetActivity: null,
  listActivity: [],
  loadingDetailActivity: null, 
  detailActivity: null,
  listPartner: [],
  loadingGetPartner: null, 
  listProgram: [],
  loadingGetProgram: null, 
  listAchievement: [],
  loadingGetAchievement: null, 
  listCapacity: [],
  loadingGetCapacity: null, 
  listRating: [],
  loadingGetRating: null,
  listTeam: [],
  loadingGetTeam: null,
};

export default function presentationReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_PRESENTATION_STORE_ACTION:
      return { 
        ...state, 
        ...action.payload
      };
    default:
      return state;
  }
}

export const updatePresentationStoreAction = (payload) => {
  return {
    type: UPDATE_PRESENTATION_STORE_ACTION,
    payload
  }
}

export const getListOutstandingAction = (payload) => {
  return {
    type: GET_LIST_OUTSTANDING_ACTION,
    payload
  }
}

export const getListActivityAction = (payload) => {
  return {
    type: GET_LIST_ACTIVITY_ACTION,
    payload
  }
}

export const getDetailActivityAction = (payload) => {
  return {
    type: GET_DETAIL_ACTIVITY_ACTION,
    payload
  }
}

export const getListPartnerAction = (payload) => {
  return {
    type: GET_LIST_PARTNER_ACTION,
    payload
  }
}

export const getListProgramAction = (payload) => {
  return {
    type: GET_LIST_PROGRAM_ACTION,
    payload
  }
}

export const getListAchievementAction = (payload) => {
  return {
    type: GET_LIST_ACHIEVEMENT_ACTION,
    payload
  }
}

export const getListCapacityAction = (payload) => {
  return {
    type: GET_LIST_CAPACITY_ACTION,
    payload
  }
}

export const getListRatingAction = (payload) => {
  return {
    type: GET_LIST_RATING_ACTION,
    payload
  }
}

export const getListTeamAction = (payload) => {
  return {
    type: GET_LIST_TEAM_ACTION,
    payload
  }
}