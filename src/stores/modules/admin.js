export const UPDATE_ADMIN_STORE_ACTION = 'UPDATE_ADMIN_STORE_ACTION';
export const UPLOAD_IMAGE_ACTION = 'UPLOAD_IMAGE_ACTION';
// ------- Action Service ------------
export const GET_LIST_INFORMATION_ADMIN_ACTION = 'GET_LIST_INFORMATION_ADMIN_ACTION';
export const GET_DETAIL_INFORMATION_ADMIN_ACTION = 'GET_DETAIL_INFORMATION_ADMIN_ACTION';
export const EDIT_INFORMATION_ADMIN_ACTION = 'EDIT_INFORMATION_ADMIN_ACTION';
// ------------------------------------

// ------- Action Service ------------
export const GET_LIST_SERVICES_ADMIN_ACTION = 'GET_LIST_SERVICES_ADMIN_ACTION';
export const GET_DETAIL_SERVICE_ADMIN_ACTION = 'GET_DETAIL_SERVICE_ADMIN_ACTION';
export const CREATE_SERVICE_ADMIN_ACTION = 'CREATE_SERVICE_ADMIN_ACTION';
export const EDIT_SERVICE_ADMIN_ACTION = 'EDIT_SERVICE_ADMIN_ACTION';
export const DELETE_SERVICE_ADMIN_ACTION = 'DELETE_SERVICE_ADMIN_ACTION';
// ------------------------------------

// ------- Action Project ------------
export const GET_LIST_PROJECTS_ADMIN_ACTION = 'GET_LIST_PROJECTS_ADMIN_ACTION';
export const GET_DETAIL_PROJECT_ADMIN_ACTION = 'GET_DETAIL_PROJECT_ADMIN_ACTION';
export const CREATE_PROJECT_ADMIN_ACTION = 'CREATE_PROJECT_ADMIN_ACTION';
export const EDIT_PROJECT_ADMIN_ACTION = 'EDIT_PROJECT_ADMIN_ACTION';
export const DELETE_PROJECT_ADMIN_ACTION = 'DELETE_PROJECT_ADMIN_ACTION';
// ------------------------------------

// ------- Action Outstanding Index ------------
export const GET_LIST_OUTSTANDINGS_ADMIN_ACTION = 'GET_LIST_OUTSTANDINGS_ADMIN_ACTION';
export const GET_DETAIL_OUTSTANDING_ADMIN_ACTION = 'GET_DETAIL_OUTSTANDING_ADMIN_ACTION';
export const CREATE_OUTSTANDING_ADMIN_ACTION = 'CREATE_OUTSTANDING_ADMIN_ACTION';
export const EDIT_OUTSTANDING_ADMIN_ACTION = 'EDIT_OUTSTANDING_ADMIN_ACTION';
export const DELETE_OUTSTANDING_ADMIN_ACTION = 'DELETE_OUTSTANDING_ADMIN_ACTION';
// ------------------------------------

// ------- Action Activity ------------
export const GET_LIST_ACTIVITY_ADMIN_ACTION = 'GET_LIST_ACTIVITY_ADMIN_ACTION';
export const GET_DETAIL_ACTIVITY_ADMIN_ACTION = 'GET_DETAIL_ACTIVITY_ADMIN_ACTION';
export const CREATE_ACTIVITY_ADMIN_ACTION = 'CREATE_ACTIVITY_ADMIN_ACTION';
export const EDIT_ACTIVITY_ADMIN_ACTION = 'EDIT_ACTIVITY_ADMIN_ACTION';
export const DELETE_ACTIVITY_ADMIN_ACTION = 'DELETE_ACTIVITY_ADMIN_ACTION';
// ------------------------------------

// ------- Action Partner ------------
export const GET_LIST_PARTNER_ADMIN_ACTION = 'GET_LIST_PARTNER_ADMIN_ACTION';
export const GET_DETAIL_PARTNER_ADMIN_ACTION = 'GET_DETAIL_PARTNER_ADMIN_ACTION';
export const CREATE_PARTNER_ADMIN_ACTION = 'CREATE_PARTNER_ADMIN_ACTION';
export const EDIT_PARTNER_ADMIN_ACTION = 'EDIT_PARTNER_ADMIN_ACTION';
export const DELETE_PARTNER_ADMIN_ACTION = 'DELETE_PARTNER_ADMIN_ACTION';
// ------------------------------------

// ------- Action Program ------------
export const GET_LIST_PROGRAM_ADMIN_ACTION = 'GET_LIST_PROGRAM_ADMIN_ACTION';
export const GET_DETAIL_PROGRAM_ADMIN_ACTION = 'GET_DETAIL_PROGRAM_ADMIN_ACTION';
export const CREATE_PROGRAM_ADMIN_ACTION = 'CREATE_PROGRAM_ADMIN_ACTION';
export const EDIT_PROGRAM_ADMIN_ACTION = 'EDIT_PROGRAM_ADMIN_ACTION';
export const DELETE_PROGRAM_ADMIN_ACTION = 'DELETE_PROGRAM_ADMIN_ACTION';
// ------------------------------------

// ------- Action Achievement ------------
export const GET_LIST_ACHIEVEMENT_ADMIN_ACTION = 'GET_LIST_ACHIEVEMENT_ADMIN_ACTION';
export const GET_DETAIL_ACHIEVEMENT_ADMIN_ACTION = 'GET_DETAIL_ACHIEVEMENT_ADMIN_ACTION';
export const CREATE_ACHIEVEMENT_ADMIN_ACTION = 'CREATE_ACHIEVEMENT_ADMIN_ACTION';
export const EDIT_ACHIEVEMENT_ADMIN_ACTION = 'EDIT_ACHIEVEMENT_ADMIN_ACTION';
export const DELETE_ACHIEVEMENT_ADMIN_ACTION = 'DELETE_ACHIEVEMENT_ADMIN_ACTION';
// ------------------------------------

// ------- Action Capacity ------------
export const GET_LIST_CAPACITY_ADMIN_ACTION = 'GET_LIST_CAPACITY_ADMIN_ACTION';
export const GET_DETAIL_CAPACITY_ADMIN_ACTION = 'GET_DETAIL_CAPACITY_ADMIN_ACTION';
export const CREATE_CAPACITY_ADMIN_ACTION = 'CREATE_CAPACITY_ADMIN_ACTION';
export const EDIT_CAPACITY_ADMIN_ACTION = 'EDIT_CAPACITY_ADMIN_ACTION';
export const DELETE_CAPACITY_ADMIN_ACTION = 'DELETE_CAPACITY_ADMIN_ACTION';
// ------------------------------------

// ------- Action Capacity ------------
export const GET_LIST_RATING_ADMIN_ACTION = 'GET_LIST_RATING_ADMIN_ACTION';
export const GET_DETAIL_RATING_ADMIN_ACTION = 'GET_DETAIL_RATING_ADMIN_ACTION';
export const CREATE_RATING_ADMIN_ACTION = 'CREATE_RATING_ADMIN_ACTION';
export const EDIT_RATING_ADMIN_ACTION = 'EDIT_RATING_ADMIN_ACTION';
export const DELETE_RATING_ADMIN_ACTION = 'DELETE_RATING_ADMIN_ACTION';
// ------------------------------------

// ------- Action Team ------------
export const GET_LIST_TEAM_ADMIN_ACTION = 'GET_LIST_TEAM_ADMIN_ACTION';
export const GET_DETAIL_TEAM_ADMIN_ACTION = 'GET_DETAIL_TEAM_ADMIN_ACTION';
export const CREATE_TEAM_ADMIN_ACTION = 'CREATE_TEAM_ADMIN_ACTION';
export const EDIT_TEAM_ADMIN_ACTION = 'EDIT_TEAM_ADMIN_ACTION';
export const DELETE_TEAM_ADMIN_ACTION = 'DELETE_TEAM_ADMIN_ACTION';
// ------------------------------------

const defaultState = {
  miniSidenav: false,

  listInformationAdmin: [],
  loadingInformationAdmin: null,
  loadingDetailInformationAdmin: null,
  detailInformationAdmin: null,
  // ------------
  listServicesAdmin: [],
  loadingServiceAdmin: null,
  loadingDetailServiceAdmin: null,
  detailServiceAdmin: null,
  // ------------
  listProjectsAdmin: [],
  loadingProjectAdmin: null,
  loadingDetailProjectAdmin: null,
  detailProjectAdmin: null,
  // -------------
  listOutstandingsAdmin: [],
  loadingOutstandingAdmin: null,
  loadingDetailOutstandingAdmin: null,
  detailOutstandingAdmin: null,
  // ------------
  listActivityAdmin: [],
  loadingActivityAdmin: null,
  loadingDetailActivityAdmin: null,
  detailActivityAdmin: null,
  // ------------
  listPartnerAdmin: [],
  loadingPartnerAdmin: null,
  loadingDetailPartnerAdmin: null,
  detailPartnerAdmin: null,
  // ------------
  listProgramAdmin: [],
  loadingProgramAdmin: null,
  loadingDetailProgramAdmin: null,
  detailProgramAdmin: null,
  // ------------
  listAchievementAdmin: [],
  loadingAchievementAdmin: null,
  loadingDetailAchievementAdmin: null,
  detailAchievementAdmin: null,
  // ------------
  listCapacityAdmin: [],
  loadingCapacityAdmin: null,
  loadingDetailCapacityAdmin: null,
  detailCapacityAdmin: null,
  // ------------
  listRatingAdmin: [],
  loadingRatingAdmin: null,
  loadingDetailRatingAdmin: null,
  detailRatingAdmin: null,
  // ------------
  listTeamAdmin: [],
  loadingTeamAdmin: null,
  loadingDetailTeamAdmin: null,
  detailTeamAdmin: null,
  // ------------
};

export default function adminReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_ADMIN_STORE_ACTION:
      return { 
        ...state, 
        ...action.payload
      };
    default:
      return state;
  }
}

export const updateAdminStoreAction = (payload) => {
  return {
    type: UPDATE_ADMIN_STORE_ACTION,
    payload
  }
}

export const onUploadImageAction = (payload) => {
  return {
    type: UPLOAD_IMAGE_ACTION,
    payload
  }
}

// ---------- Service -------------
export const getListServicesAdminAction = (payload) => {
  return {
    type: GET_LIST_SERVICES_ADMIN_ACTION,
    payload
  }
}

export const onCreateServiceAdminAction = (payload, onSuccess) => {
  return {
    type: CREATE_SERVICE_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const getDetailServiceAdminAction = (payload) => {
  return {
    type: GET_DETAIL_SERVICE_ADMIN_ACTION,
    payload
  }
}

export const deleteServiceAdminAction = (payload, onSuccess) => {
  return {
    type: DELETE_SERVICE_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const onEditServiceAdminAction = (payload, onSuccess) => {
  return {
    type: EDIT_SERVICE_ADMIN_ACTION,
    payload,
    onSuccess
  }
}
//-----------------------

// ---------- Project -------------
export const getListProjectsAdminAction = (payload) => {
  return {
    type: GET_LIST_PROJECTS_ADMIN_ACTION,
    payload
  }
}

export const onCreateProjectAdminAction = (payload, onSuccess) => {
  return {
    type: CREATE_PROJECT_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const getDetailProjectAdminAction = (payload) => {
  return {
    type: GET_DETAIL_PROJECT_ADMIN_ACTION,
    payload
  }
}

export const deleteProjectAdminAction = (payload, onSuccess) => {
  return {
    type: DELETE_PROJECT_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const onEditProjectAdminAction = (payload, onSuccess) => {
  return {
    type: EDIT_PROJECT_ADMIN_ACTION,
    payload,
    onSuccess
  }
}
//-----------------------

// ---------- Outstanding -------------
export const getOutstandingAdminAction = (payload) => {
  return {
    type: GET_LIST_OUTSTANDINGS_ADMIN_ACTION,
    payload
  }
}

export const createOutstandingAdminAction = (payload, onSuccess) => {
  return {
    type: CREATE_OUTSTANDING_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const getDetailOutstandingAdminAction = (payload) => {
  return {
    type: GET_DETAIL_OUTSTANDING_ADMIN_ACTION,
    payload
  }
}

export const deleteOutstandingAdminAction = (payload, onSuccess) => {
  return {
    type: DELETE_OUTSTANDING_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const editOutstandingAdminAction = (payload, onSuccess) => {
  return {
    type: EDIT_OUTSTANDING_ADMIN_ACTION,
    payload,
    onSuccess
  }
}
//----------------------------

// ---------- Activity -------------
export const getListActivityAdminAction = (payload) => {
  return {
    type: GET_LIST_ACTIVITY_ADMIN_ACTION,
    payload
  }
}

export const onCreateActivityAdminAction = (payload, onSuccess) => {
  return {
    type: CREATE_ACTIVITY_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const getDetailActivityAdminAction = (payload) => {
  return {
    type: GET_DETAIL_ACTIVITY_ADMIN_ACTION,
    payload
  }
}

export const deleteActivityAdminAction = (payload, onSuccess) => {
  return {
    type: DELETE_ACTIVITY_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const onEditActivityAdminAction = (payload, onSuccess) => {
  return {
    type: EDIT_ACTIVITY_ADMIN_ACTION,
    payload,
    onSuccess
  }
}
//-----------------------

// ---------- Partner -------------
export const getListPartnerAdminAction = (payload) => {
  return {
    type: GET_LIST_PARTNER_ADMIN_ACTION,
    payload
  }
}

export const onCreatePartnerAdminAction = (payload, onSuccess) => {
  return {
    type: CREATE_PARTNER_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const getDetailPartnerAdminAction = (payload) => {
  return {
    type: GET_DETAIL_PARTNER_ADMIN_ACTION,
    payload
  }
}

export const deletePartnerAdminAction = (payload, onSuccess) => {
  return {
    type: DELETE_PARTNER_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const onEditPartnerAdminAction = (payload, onSuccess) => {
  return {
    type: EDIT_PARTNER_ADMIN_ACTION,
    payload,
    onSuccess
  }
}
//-----------------------

// ---------- Program -------------
export const getListProgramAdminAction = (payload) => {
  return {
    type: GET_LIST_PROGRAM_ADMIN_ACTION,
    payload
  }
}

export const onCreateProgramAdminAction = (payload, onSuccess) => {
  return {
    type: CREATE_PROGRAM_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const getDetailProgramAdminAction = (payload) => {
  return {
    type: GET_DETAIL_PROGRAM_ADMIN_ACTION,
    payload
  }
}

export const deleteProgramAdminAction = (payload, onSuccess) => {
  return {
    type: DELETE_PROGRAM_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const onEditProgramAdminAction = (payload, onSuccess) => {
  return {
    type: EDIT_PROGRAM_ADMIN_ACTION,
    payload,
    onSuccess
  }
}
//-----------------------

// ---------- information -------------
export const getListInformationAdminAction = (payload) => {
  return {
    type: GET_LIST_INFORMATION_ADMIN_ACTION,
    payload
  }
}

export const getDetailInformationAdminAction = (payload) => {
  return {
    type: GET_DETAIL_INFORMATION_ADMIN_ACTION,
    payload
  }
}

export const onEditInformationAdminAction = (payload, onSuccess) => {
  return {
    type: EDIT_INFORMATION_ADMIN_ACTION,
    payload,
    onSuccess
  }
}
//-----------------------

// ---------- Achievement -------------
export const getListAchievementAdminAction = (payload) => {
  return {
    type: GET_LIST_ACHIEVEMENT_ADMIN_ACTION,
    payload
  }
}

export const onCreateAchievementAdminAction = (payload, onSuccess) => {
  return {
    type: CREATE_ACHIEVEMENT_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const getDetailAchievementAdminAction = (payload) => {
  return {
    type: GET_DETAIL_ACHIEVEMENT_ADMIN_ACTION,
    payload
  }
}

export const deleteAchievementAdminAction = (payload, onSuccess) => {
  return {
    type: DELETE_ACHIEVEMENT_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const onEditAchievementAdminAction = (payload, onSuccess) => {
  return {
    type: EDIT_ACHIEVEMENT_ADMIN_ACTION,
    payload,
    onSuccess
  }
}
//-----------------------

// ---------- Capacity -------------
export const getListCapacityAdminAction = (payload) => {
  return {
    type: GET_LIST_CAPACITY_ADMIN_ACTION,
    payload
  }
}

export const onCreateCapacityAdminAction = (payload, onSuccess) => {
  return {
    type: CREATE_CAPACITY_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const getDetailCapacityAdminAction = (payload) => {
  return {
    type: GET_DETAIL_CAPACITY_ADMIN_ACTION,
    payload
  }
}

export const deleteCapacityAdminAction = (payload, onSuccess) => {
  return {
    type: DELETE_CAPACITY_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const onEditCapacityAdminAction = (payload, onSuccess) => {
  return {
    type: EDIT_CAPACITY_ADMIN_ACTION,
    payload,
    onSuccess
  }
}
//-----------------------

// ---------- Rating -------------
export const getListRatingAdminAction = (payload) => {
  return {
    type: GET_LIST_RATING_ADMIN_ACTION,
    payload
  }
}

export const onCreateRatingAdminAction = (payload, onSuccess) => {
  return {
    type: CREATE_RATING_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const getDetailRatingAdminAction = (payload) => {
  return {
    type: GET_DETAIL_RATING_ADMIN_ACTION,
    payload
  }
}

export const deleteRatingAdminAction = (payload, onSuccess) => {
  return {
    type: DELETE_RATING_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const onEditRatingAdminAction = (payload, onSuccess) => {
  return {
    type: EDIT_RATING_ADMIN_ACTION,
    payload,
    onSuccess
  }
}
//-----------------------

// ---------- Team -------------
export const getListTeamAdminAction = (payload) => {
  return {
    type: GET_LIST_TEAM_ADMIN_ACTION,
    payload
  }
}

export const onCreateTeamAdminAction = (payload, onSuccess) => {
  return {
    type: CREATE_TEAM_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const getDetailTeamAdminAction = (payload) => {
  return {
    type: GET_DETAIL_TEAM_ADMIN_ACTION,
    payload
  }
}

export const deleteTeamAdminAction = (payload, onSuccess) => {
  return {
    type: DELETE_TEAM_ADMIN_ACTION,
    payload,
    onSuccess
  }
}

export const onEditTeamAdminAction = (payload, onSuccess) => {
  return {
    type: EDIT_TEAM_ADMIN_ACTION,
    payload,
    onSuccess
  }
}
//-----------------------