import axios from 'axios';
import store from 'stores';
import { create } from 'apisauce'
import Reactotron from 'reactotron-react-js';

const serverURL = process.env.API_ENDPOINT;

const customAxiosInstance = axios.create({ 
  timeout: 50000
});

const apisauceInstance = create({ axiosInstance: customAxiosInstance });

apisauceInstance.addMonitor(Reactotron.apisauce);

const AUTH = {
  YES: true,
  NO: false,
};

function apiGet(url, data) {
  const state = store.getState();
  let currentLang = state?.languages?.currentLang || "vi";
  const params = {...data, lang: currentLang};
  return apisauceInstance
    .get(serverURL + url, params)
    .then((response) => response.data)
    .catch((error) => error);
}

function apiPost(url, data) {
  const state = store.getState();
  let currentLang = state?.languages?.currentLang || "vi";
  const params = {...data, lang: currentLang};
  return apisauceInstance
    .post(serverURL + url, params, {
      headers: {"Content-Type": "application/json"}
    })
    .then((response) => response.data)
    .catch((error) => error);
}

function apiDelete(url, data) {
  const state = store.getState();
  let currentLang = state?.languages?.currentLang || "vi";
  const params = {...data, lang: currentLang};
  return apisauceInstance
    .delete(serverURL + url, params)
    .then((response) => response.data)
    .catch((error) => error);
}
function postForm(url, data) {
  const state = store.getState();
  let currentLang = state?.languages?.currentLang || "vi";
  let formData = new FormData();
  formData.append('lang', currentLang);
  Object.keys(data).forEach((key) => {
    const value = data[key];
    if (Array.isArray(value)) {
      value.forEach((val) => formData.append(`${key}[]`, val));
    } else {
      formData.append(key, value);
    }
  });
  return apisauceInstance
    .post(serverURL + url, formData, {})
    .then((response) => response.data)
    .catch((error) => error);
}

const apis = {
  PATH: {
    // ------ main -------
    API_GET_CONFIG: '/get-config',
    // -------------------

    // ----- user -----
    API_REGISTER: '/register',
    API_LOGIN: '/login',
    API_LOGOUT: '/logout',
    // ----------------

    // ----- information --------
    API_DETAIL_INFORMATION_ADMIN: "/admin-detail-information",
    API_LIST_INFORMATION_ADMIN: "/admin-information",
    API_EDIT_INFORMATION: "/edit-information",
    // -----------------------

    // ----- project --------
    API_LIST_PROJECTS: '/project',
    API_DETAIL_PROJECT: '/detail-project',
    API_DETAIL_PROJECT_ADMIN: "/admin-detail-project",
    API_LIST_PROJECTS_ADMIN: "/admin-project",
    API_CREATE_PROJECT: "/create-project",
    API_DELETE_PROJECT: "/delete-project",
    API_EDIT_PROJECT: "/edit-project",
    // -----------------------

    // ----- service --------
    API_LIST_SERVICES: '/service',
    API_DETAIL_SERVICE: '/detail-service',
    API_DETAIL_SERVICE_ADMIN: "/admin-detail-service",
    API_LIST_SERVICES_ADMIN: "/admin-service",
    API_CREATE_SERVICE: "/create-service",
    API_DELETE_SERVICE: "/delete-service",
    API_EDIT_SERVICE: "/edit-service",
    // -----------------------

    // ----- outstanding --------
    API_LIST_OUTSTANDINGS: '/outstanding',
    API_DETAIL_OUTSTANDING: '/detail-outstanding',
    API_LIST_OUTSTANDINGS_ADMIN: "/admin-outstanding",
    API_CREATE_OUTSTANDING: "/create-outstanding",
    API_DELETE_OUTSTANDING: "/delete-outstanding",
    API_EDIT_OUTSTANDING: "/edit-outstanding",
    // -----------------------

    // ----- activity --------
    API_LIST_ACTIVITY: '/activity',
    API_DETAIL_ACTIVITY: '/detail-activity',
    API_DETAIL_ACTIVITY_ADMIN: "/admin-detail-activity",
    API_LIST_ACTIVITY_ADMIN: "/admin-activity",
    API_CREATE_ACTIVITY: "/create-activity",
    API_DELETE_ACTIVITY: "/delete-activity",
    API_EDIT_ACTIVITY: "/edit-activity",
    // -----------------------

    // ----- partner --------
    API_LIST_PARTNER: '/partner',
    API_DETAIL_PARTNER_ADMIN: "/admin-detail-partner",
    API_LIST_PARTNER_ADMIN: "/admin-partner",
    API_CREATE_PARTNER: "/create-partner",
    API_DELETE_PARTNER: "/delete-partner",
    API_EDIT_PARTNER: "/edit-partner",
    // -----------------------

    // ----- program --------
    API_LIST_PROGRAM: '/program',
    API_DETAIL_PROGRAM_ADMIN: "/admin-detail-program",
    API_LIST_PROGRAM_ADMIN: "/admin-program",
    API_CREATE_PROGRAM: "/create-program",
    API_DELETE_PROGRAM: "/delete-program",
    API_EDIT_PROGRAM: "/edit-program",
    // -----------------------

    // ----- achievement --------
    API_LIST_ACHIEVEMENT: '/achievement',
    API_DETAIL_ACHIEVEMENT_ADMIN: "/admin-detail-achievement",
    API_LIST_ACHIEVEMENT_ADMIN: "/admin-achievement",
    API_CREATE_ACHIEVEMENT: "/create-achievement",
    API_DELETE_ACHIEVEMENT: "/delete-achievement",
    API_EDIT_ACHIEVEMENT: "/edit-achievement",
    // -----------------------

    // ----- capacity --------
    API_LIST_CAPACITY: '/capacity',
    API_DETAIL_CAPACITY_ADMIN: "/admin-detail-capacity",
    API_LIST_CAPACITY_ADMIN: "/admin-capacity",
    API_CREATE_CAPACITY: "/create-capacity",
    API_DELETE_CAPACITY: "/delete-capacity",
    API_EDIT_CAPACITY: "/edit-capacity",
    // -----------------------

    // ----- rating --------
    API_LIST_RATING: '/rating',
    API_DETAIL_RATING_ADMIN: "/admin-detail-rating",
    API_LIST_RATING_ADMIN: "/admin-rating",
    API_CREATE_RATING: "/create-rating",
    API_DELETE_RATING: "/delete-rating",
    API_EDIT_RATING: "/edit-rating",
    // -----------------------

    // ----- team --------
    API_LIST_TEAM: '/team',
    API_DETAIL_TEAM_ADMIN: "/admin-detail-team",
    API_LIST_TEAM_ADMIN: "/admin-team",
    API_CREATE_TEAM: "/create-team",
    API_DELETE_TEAM: "/delete-team",
    API_EDIT_TEAM: "/edit-team",
    // -----------------------

    // ----- more --------
    API_UPLOAD_IMAGE: "/upload-image",
    // -------------------
  },
  AUTH,
  apiPost,
  apiGet,
  postForm,
  apiDelete
};

export default apis;
