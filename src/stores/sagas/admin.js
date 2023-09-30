import { takeLatest, put, delay } from 'redux-saga/effects';
import apis from 'networking/apis';
import { 
  GET_LIST_INFORMATION_ADMIN_ACTION,
  GET_DETAIL_INFORMATION_ADMIN_ACTION,
  EDIT_INFORMATION_ADMIN_ACTION,
  // ------
  GET_LIST_SERVICES_ADMIN_ACTION,
  CREATE_SERVICE_ADMIN_ACTION,
  GET_DETAIL_SERVICE_ADMIN_ACTION,
  DELETE_SERVICE_ADMIN_ACTION,
  EDIT_SERVICE_ADMIN_ACTION,
  // ------
  GET_LIST_PROJECTS_ADMIN_ACTION,
  CREATE_PROJECT_ADMIN_ACTION,
  GET_DETAIL_PROJECT_ADMIN_ACTION,
  DELETE_PROJECT_ADMIN_ACTION,
  EDIT_PROJECT_ADMIN_ACTION,
  // ------
  GET_LIST_OUTSTANDINGS_ADMIN_ACTION,
  CREATE_OUTSTANDING_ADMIN_ACTION,
  GET_DETAIL_OUTSTANDING_ADMIN_ACTION,
  DELETE_OUTSTANDING_ADMIN_ACTION,
  EDIT_OUTSTANDING_ADMIN_ACTION,
  // ------
  GET_LIST_ACTIVITY_ADMIN_ACTION,
  CREATE_ACTIVITY_ADMIN_ACTION,
  GET_DETAIL_ACTIVITY_ADMIN_ACTION,
  DELETE_ACTIVITY_ADMIN_ACTION,
  EDIT_ACTIVITY_ADMIN_ACTION,
  // ------
  GET_LIST_PARTNER_ADMIN_ACTION,
  CREATE_PARTNER_ADMIN_ACTION,
  GET_DETAIL_PARTNER_ADMIN_ACTION,
  DELETE_PARTNER_ADMIN_ACTION,
  EDIT_PARTNER_ADMIN_ACTION,
  // ------
  GET_LIST_PROGRAM_ADMIN_ACTION,
  CREATE_PROGRAM_ADMIN_ACTION,
  GET_DETAIL_PROGRAM_ADMIN_ACTION,
  DELETE_PROGRAM_ADMIN_ACTION,
  EDIT_PROGRAM_ADMIN_ACTION,
  // ------
  GET_LIST_ACHIEVEMENT_ADMIN_ACTION,
  CREATE_ACHIEVEMENT_ADMIN_ACTION,
  GET_DETAIL_ACHIEVEMENT_ADMIN_ACTION,
  DELETE_ACHIEVEMENT_ADMIN_ACTION,
  EDIT_ACHIEVEMENT_ADMIN_ACTION,
  // ------
  GET_LIST_CAPACITY_ADMIN_ACTION,
  CREATE_CAPACITY_ADMIN_ACTION,
  GET_DETAIL_CAPACITY_ADMIN_ACTION,
  DELETE_CAPACITY_ADMIN_ACTION,
  EDIT_CAPACITY_ADMIN_ACTION,
  // ------
  GET_LIST_RATING_ADMIN_ACTION,
  CREATE_RATING_ADMIN_ACTION,
  GET_DETAIL_RATING_ADMIN_ACTION,
  DELETE_RATING_ADMIN_ACTION,
  EDIT_RATING_ADMIN_ACTION,
  // ------
  GET_LIST_TEAM_ADMIN_ACTION,
  CREATE_TEAM_ADMIN_ACTION,
  GET_DETAIL_TEAM_ADMIN_ACTION,
  DELETE_TEAM_ADMIN_ACTION,
  EDIT_TEAM_ADMIN_ACTION,
  // ------
  updateAdminStoreAction
} from 'stores/modules/admin';
import { toast } from 'react-toastify';
import i18n from "locales/i18n";
import { LoaderHandler } from "components/LoadingIndicator/LoaderHandler";

// -------- Information ------------
function* getListInformation({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingInformationAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_INFORMATION_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get list information");
    }
    const datas = res?.results?.datas || [];
    yield put(updateAdminStoreAction({listInformationAdmin: datas}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingInformationAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingInformationAdmin: "error"}));
  }
}

function* getDetailInformation({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingDetailInformationAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_DETAIL_INFORMATION_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get detail information");
    }
    yield put(updateAdminStoreAction({detailInformationAdmin: res?.results?.data}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingDetailInformationAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingDetailInformationAdmin: "error"}));
  }
}

function* onEditInformation({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_EDIT_INFORMATION, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot edit information");
    }
    toast.success(i18n.t('cap_nhat_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(i18n.t('cap_nhat_du_lieu_khong_thanh_cong'));
  } finally{
    LoaderHandler.show(false);
  }
}
// ---------------------------------

// -------- Service ------------
function* getListServices({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingServiceAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_SERVICES_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get list Services");
    }
    const datas = res?.results?.datas || [];
    yield put(updateAdminStoreAction({listServicesAdmin: datas}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingServiceAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingServiceAdmin: "error"}));
  }
}

function* onCreateService({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    if(payload?.image?.path){
      const resImg = yield apis.postForm(apis.PATH.API_UPLOAD_IMAGE, {image: payload?.image?.path, module: "service"});
      if (resImg?.success && resImg?.results?.data?.path) {
        payload.image = resImg?.results?.data?.path;
      } else{
        payload.image = '';
      }
    } else{
      payload.image = '';
    }
    const res = yield apis.apiPost(apis.PATH.API_CREATE_SERVICE, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot create service");
    }
    toast.success(i18n.t('them_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(i18n.t('them_du_lieu_khong_thanh_cong'));
  } finally{
    LoaderHandler.show(false);
  }
}

function* getDetailService({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingDetailServiceAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_DETAIL_SERVICE_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get detail service");
    }
    yield put(updateAdminStoreAction({detailServiceAdmin: res?.results?.data}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingDetailServiceAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingDetailServiceAdmin: "error"}));
  }
}

function* onDeleteService({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_DELETE_SERVICE, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot delete service");
    }
    toast.success(i18n.t('xoa_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(i18n.t('xoa_du_lieu_khong_thanh_cong'));
  } finally{
    LoaderHandler.show(false);
  }
}

function* onEditService({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    if(payload?.image?.path){
      const resImg = yield apis.postForm(apis.PATH.API_UPLOAD_IMAGE, {image: payload?.image?.path, module: "service"});
      if (resImg?.success && resImg?.results?.data?.path) {
        payload.image = resImg?.results?.data?.path;
      } else{
        delete payload.image;
      }
    } else{
      delete payload.image;
    }
    const res = yield apis.apiPost(apis.PATH.API_EDIT_SERVICE, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot edit service");
    }
    toast.success(i18n.t('cap_nhat_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(i18n.t('cap_nhat_du_lieu_khong_thanh_cong'));
  } finally{
    LoaderHandler.show(false);
  }
}
// ---------------------------------

// --------- Project ------------
function* getListProjects({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingProjectAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_PROJECTS_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get list projects");
    }
    const datas = res?.results?.datas || [];
    yield put(updateAdminStoreAction({listProjectsAdmin: datas}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingProjectAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingProjectAdmin: "error"}));
  }
}

function* onCreateProject({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    if(payload?.image?.path){
      const resImg = yield apis.postForm(apis.PATH.API_UPLOAD_IMAGE, {image: payload?.image?.path, module: "project"});
      if (resImg?.success && resImg?.results?.data?.path) {
        payload.image = resImg?.results?.data?.path;
      } else{
        payload.image = '';
      }
    } else{
      payload.image = '';
    }
    const res = yield apis.apiPost(apis.PATH.API_CREATE_PROJECT, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('them_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('them_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}

function* getDetailProject({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingDetailProjectAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_DETAIL_PROJECT_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get detail project");
    }
    yield put(updateAdminStoreAction({detailProjectAdmin: res?.results?.data}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingDetailProjectAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingDetailProjectAdmin: "error"}));
  }
}

function* onDeleteProject({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_DELETE_PROJECT, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot delete project");
    }
    toast.success(i18n.t('xoa_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(i18n.t('xoa_du_lieu_khong_thanh_cong'));
  } finally{
    LoaderHandler.show(false);
  }
}

function* onEditProject({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    if(payload?.image?.path){
      const resImg = yield apis.postForm(apis.PATH.API_UPLOAD_IMAGE, {image: payload?.image?.path, module: "project"});
      if (resImg?.success && resImg?.results?.data?.path) {
        payload.image = resImg?.results?.data?.path;
      } else{
        delete payload.image;
      }
    } else{
      delete payload.image;
    }
    const res = yield apis.apiPost(apis.PATH.API_EDIT_PROJECT, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('cap_nhat_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('cap_nhat_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}
// ---------------------------------

// ---------- Outstanding ------------
function* getListOutstandings({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingOutstandingAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_OUTSTANDINGS_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get list outstanding");
    }
    const datas = res?.results?.datas || [];
    yield put(updateAdminStoreAction({listOutstandingsAdmin: datas}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingOutstandingAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingOutstandingAdmin: "error"}));
  }
}

function* onCreateOutstanding({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_CREATE_OUTSTANDING, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot create outstanding");
    }
    toast.success(i18n.t('them_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(i18n.t('them_du_lieu_khong_thanh_cong'));
  } finally{
    LoaderHandler.show(false);
  }
}

function* getDetailOutstanding({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingDetailOutstandingAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_DETAIL_OUTSTANDING, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get detail outstanding");
    }
    yield put(updateAdminStoreAction({detailOutstandingAdmin: res?.results?.data}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingDetailOutstandingAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingDetailOutstandingAdmin: "error"}));
  }
}

function* onDeleteOutstanding({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_DELETE_OUTSTANDING, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot delete project");
    }
    toast.success(i18n.t('xoa_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(i18n.t('xoa_du_lieu_khong_thanh_cong'));
  } finally{
    LoaderHandler.show(false);
  }
}

function* onEditOutstanding({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_EDIT_OUTSTANDING, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot edit outstanduing");
    }
    toast.success(i18n.t('cap_nhat_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(i18n.t('cap_nhat_du_lieu_khong_thanh_cong'));
  } finally{
    LoaderHandler.show(false);
  }
}
// ---------------------------------

// --------- Activity ------------
function* getListActivity({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingActivityAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_ACTIVITY_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get list activity");
    }
    const datas = res?.results?.datas || [];
    yield put(updateAdminStoreAction({listActivityAdmin: datas}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingActivityAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingActivityAdmin: "error"}));
  }
}

function* onCreateActivity({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    if(payload?.image?.path){
      const resImg = yield apis.postForm(apis.PATH.API_UPLOAD_IMAGE, {image: payload?.image?.path, module: "activity"});
      if (resImg?.success && resImg?.results?.data?.path) {
        payload.image = resImg?.results?.data?.path;
      } else{
        payload.image = "";
      }
    } else{
      payload.image = "";
    }
    const res = yield apis.apiPost(apis.PATH.API_CREATE_ACTIVITY, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('them_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('them_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}

function* getDetailActivity({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingDetailActivityAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_DETAIL_ACTIVITY_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get detail activity");
    }
    yield put(updateAdminStoreAction({detailActivityAdmin: res?.results?.data}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingDetailActivityAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingDetailActivityAdmin: "error"}));
  }
}

function* onDeleteActivity({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_DELETE_ACTIVITY, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot delete activity");
    }
    toast.success(i18n.t('xoa_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(i18n.t('xoa_du_lieu_khong_thanh_cong'));
  } finally{
    LoaderHandler.show(false);
  }
}

function* onEditActivity({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    if(payload?.image?.path){
      const resImg = yield apis.postForm(apis.PATH.API_UPLOAD_IMAGE, {image: payload?.image?.path, module: "activity"});
      if (resImg?.success && resImg?.results?.data?.path) {
        payload.image = resImg?.results?.data?.path;
      } else{
        delete payload.image;
      }
    } else{
      delete payload.image;
    }
    const res = yield apis.apiPost(apis.PATH.API_EDIT_ACTIVITY, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('cap_nhat_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('cap_nhat_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}
// ---------------------------------

// --------- Partner ------------
function* getListPartner({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingPartnerAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_PARTNER_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get list partner");
    }
    const datas = res?.results?.datas || [];
    yield put(updateAdminStoreAction({listPartnerAdmin: datas}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingPartnerAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingPartnerAdmin: "error"}));
  }
}

function* onCreatePartner({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    if(payload?.image?.path){
      const resImg = yield apis.postForm(apis.PATH.API_UPLOAD_IMAGE, {image: payload?.image?.path, module: "partner"});
      if (resImg?.success && resImg?.results?.data?.path) {
        payload.image = resImg?.results?.data?.path;
      } else{
        payload.image = "";
      }
    } else{
      payload.image = "";
    }
    const res = yield apis.apiPost(apis.PATH.API_CREATE_PARTNER, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('them_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('them_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}

function* getDetailPartner({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingDetailPartnerAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_DETAIL_PARTNER_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get detail partner");
    }
    yield put(updateAdminStoreAction({detailPartnerAdmin: res?.results?.data}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingDetailPartnerAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingDetailPartnerAdmin: "error"}));
  }
}

function* onDeletePartner({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_DELETE_PARTNER, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot delete partner");
    }
    toast.success(i18n.t('xoa_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(i18n.t('xoa_du_lieu_khong_thanh_cong'));
  } finally{
    LoaderHandler.show(false);
  }
}

function* onEditPartner({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    if(payload?.image?.path){
      const resImg = yield apis.postForm(apis.PATH.API_UPLOAD_IMAGE, {image: payload?.image?.path, module: "partner"});
      if (resImg?.success && resImg?.results?.data?.path) {
        payload.image = resImg?.results?.data?.path;
      } else{
        delete payload.image;
      }
    } else{
      delete payload.image;
    }
    const res = yield apis.apiPost(apis.PATH.API_EDIT_PARTNER, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('cap_nhat_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('cap_nhat_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}
// ---------------------------------

// --------- Program ------------
function* getListProgram({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingProgramAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_PROGRAM_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get list program");
    }
    const datas = res?.results?.datas || [];
    yield put(updateAdminStoreAction({listProgramAdmin: datas}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingProgramAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingProgramAdmin: "error"}));
  }
}

function* onCreateProgram({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    if(payload?.image?.path){
      const resImg = yield apis.postForm(apis.PATH.API_UPLOAD_IMAGE, {image: payload?.image?.path, module: "program"});
      if (resImg?.success && resImg?.results?.data?.path) {
        payload.image = resImg?.results?.data?.path;
      } else{
        payload.image = "";
      }
    } else{
      payload.image = "";
    }
    const res = yield apis.apiPost(apis.PATH.API_CREATE_PROGRAM, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('them_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('them_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}

function* getDetailProgram({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingDetailProgramAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_DETAIL_PROGRAM_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get detail program");
    }
    yield put(updateAdminStoreAction({detailProgramAdmin: res?.results?.data}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingDetailProgramAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingDetailProgramAdmin: "error"}));
  }
}

function* onDeleteProgram({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_DELETE_PROGRAM, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot delete program");
    }
    toast.success(i18n.t('xoa_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(i18n.t('xoa_du_lieu_khong_thanh_cong'));
  } finally{
    LoaderHandler.show(false);
  }
}

function* onEditProgram({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    if(payload?.image?.path){
      const resImg = yield apis.postForm(apis.PATH.API_UPLOAD_IMAGE, {image: payload?.image?.path, module: "program"});
      if (resImg?.success && resImg?.results?.data?.path) {
        payload.image = resImg?.results?.data?.path;
      } else{
        delete payload.image;
      }
    } else{
      delete payload.image;
    }
    const res = yield apis.apiPost(apis.PATH.API_EDIT_PROGRAM, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('cap_nhat_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('cap_nhat_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}
// ---------------------------------

// --------- Achievement ------------
function* getListAchievement({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingAchievementAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_ACHIEVEMENT_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get list achievement");
    }
    const datas = res?.results?.datas || [];
    yield put(updateAdminStoreAction({listAchievementAdmin: datas}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingAchievementAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingAchievementAdmin: "error"}));
  }
}

function* onCreateAchievement({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    if(payload?.image?.path){
      const resImg = yield apis.postForm(apis.PATH.API_UPLOAD_IMAGE, {image: payload?.image?.path, module: "achievement"});
      if (resImg?.success && resImg?.results?.data?.path) {
        payload.image = resImg?.results?.data?.path;
      } else{
        payload.image = "";
      }
    } else{
      payload.image = "";
    }
    const res = yield apis.apiPost(apis.PATH.API_CREATE_ACHIEVEMENT, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('them_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('them_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}

function* getDetailAchievement({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingDetailAchievementAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_DETAIL_ACHIEVEMENT_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get detail achievement");
    }
    yield put(updateAdminStoreAction({detailAchievementAdmin: res?.results?.data}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingDetailAchievementAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingDetailAchievementAdmin: "error"}));
  }
}

function* onDeleteAchievement({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_DELETE_ACHIEVEMENT, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot delete achievement");
    }
    toast.success(i18n.t('xoa_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(i18n.t('xoa_du_lieu_khong_thanh_cong'));
  } finally{
    LoaderHandler.show(false);
  }
}

function* onEditAchievement({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    if(payload?.image?.path){
      const resImg = yield apis.postForm(apis.PATH.API_UPLOAD_IMAGE, {image: payload?.image?.path, module: "achievement"});
      if (resImg?.success && resImg?.results?.data?.path) {
        payload.image = resImg?.results?.data?.path;
      } else{
        delete payload.image;
      }
    } else{
      delete payload.image;
    }
    const res = yield apis.apiPost(apis.PATH.API_EDIT_ACHIEVEMENT, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('cap_nhat_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('cap_nhat_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}
// ---------------------------------

// --------- Capacity ------------
function* getListCapacity({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingCapacityAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_CAPACITY_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get list capacity");
    }
    const datas = res?.results?.datas || [];
    yield put(updateAdminStoreAction({listCapacityAdmin: datas}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingCapacityAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingCapacityAdmin: "error"}));
  }
}

function* onCreateCapacity({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_CREATE_CAPACITY, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('them_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('them_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}

function* getDetailCapacity({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingDetailCapacityAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_DETAIL_CAPACITY_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get detail capacity");
    }
    yield put(updateAdminStoreAction({detailCapacityAdmin: res?.results?.data}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingDetailCapacityAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingDetailCapacityAdmin: "error"}));
  }
}

function* onDeleteCapacity({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_DELETE_CAPACITY, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot delete capacity");
    }
    toast.success(i18n.t('xoa_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(i18n.t('xoa_du_lieu_khong_thanh_cong'));
  } finally{
    LoaderHandler.show(false);
  }
}

function* onEditCapacity({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_EDIT_CAPACITY, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('cap_nhat_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('cap_nhat_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}
// ---------------------------------

// --------- Rating ------------
function* getListRating({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingRatingAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_RATING_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get list rating");
    }
    const datas = res?.results?.datas || [];
    yield put(updateAdminStoreAction({listRatingAdmin: datas}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingRatingAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingRatingAdmin: "error"}));
  }
}

function* onCreateRating({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_CREATE_RATING, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('them_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('them_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}

function* getDetailRating({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingDetailRatingAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_DETAIL_RATING_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get detail rating");
    }
    yield put(updateAdminStoreAction({detailRatingAdmin: res?.results?.data}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingDetailRatingAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingDetailRatingAdmin: "error"}));
  }
}

function* onDeleteRating({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_DELETE_RATING, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot delete capacity");
    }
    toast.success(i18n.t('xoa_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(i18n.t('xoa_du_lieu_khong_thanh_cong'));
  } finally{
    LoaderHandler.show(false);
  }
}

function* onEditRating({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_EDIT_RATING, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('cap_nhat_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('cap_nhat_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}
// ---------------------------------

// --------- Team ------------
function* getListTeam({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingTeamAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_TEAM_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get list team");
    }
    const datas = res?.results?.datas || [];
    yield put(updateAdminStoreAction({listTeamAdmin: datas}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingTeamAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingTeamAdmin: "error"}));
  }
}

function* onCreateTeam({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    if(payload?.image?.path){
      const resImg = yield apis.postForm(apis.PATH.API_UPLOAD_IMAGE, {image: payload?.image?.path, module: "team"});
      if (resImg?.success && resImg?.results?.data?.path) {
        payload.image = resImg?.results?.data?.path;
      } else{
        payload.image = "";
      }
    } else{
      payload.image = "";
    }
    const res = yield apis.apiPost(apis.PATH.API_CREATE_TEAM, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('them_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('them_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}

function* getDetailTeam({payload}) {
  try {
    yield put(updateAdminStoreAction({loadingDetailTeamAdmin: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_DETAIL_TEAM_ADMIN, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get detail team");
    }
    yield put(updateAdminStoreAction({detailTeamAdmin: res?.results?.data}));
    yield delay(200);
    yield put(updateAdminStoreAction({loadingDetailTeamAdmin: "success"}));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updateAdminStoreAction({loadingDetailTeamAdmin: "error"}));
  }
}

function* onDeleteTeam({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_DELETE_TEAM, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot delete team");
    }
    toast.success(i18n.t('xoa_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(i18n.t('xoa_du_lieu_khong_thanh_cong'));
  } finally{
    LoaderHandler.show(false);
  }
}

function* onEditTeam({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    if(payload?.image?.path){
      const resImg = yield apis.postForm(apis.PATH.API_UPLOAD_IMAGE, {image: payload?.image?.path, module: "team"});
      if (resImg?.success && resImg?.results?.data?.path) {
        payload.image = resImg?.results?.data?.path;
      } else{
        delete payload.image;
      }
    } else{
      delete payload.image;
    }
    const res = yield apis.apiPost(apis.PATH.API_EDIT_TEAM, payload);
    if (!res?.success) {
      throw (res?.results?.message || i18n.t('cap_nhat_du_lieu_khong_thanh_cong'));
    }
    toast.success(i18n.t('cap_nhat_du_lieu_thanh_cong'));
    yield delay(300);
    onSuccess();
  } catch (error) {
    toast.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}
// ---------------------------------

export function* AdminSaga() {
  // -------- Information -----------
  yield takeLatest(GET_LIST_INFORMATION_ADMIN_ACTION, getListInformation);
  yield takeLatest(GET_DETAIL_INFORMATION_ADMIN_ACTION, getDetailInformation);
  yield takeLatest(EDIT_INFORMATION_ADMIN_ACTION, onEditInformation);
  // ----------------------------

  // -------- Service -----------
  yield takeLatest(GET_LIST_SERVICES_ADMIN_ACTION, getListServices);
  yield takeLatest(CREATE_SERVICE_ADMIN_ACTION, onCreateService);
  yield takeLatest(GET_DETAIL_SERVICE_ADMIN_ACTION, getDetailService);
  yield takeLatest(DELETE_SERVICE_ADMIN_ACTION, onDeleteService);
  yield takeLatest(EDIT_SERVICE_ADMIN_ACTION, onEditService);
  // ----------------------------
  
  // -------- Project -----------
  yield takeLatest(GET_LIST_PROJECTS_ADMIN_ACTION, getListProjects);
  yield takeLatest(CREATE_PROJECT_ADMIN_ACTION, onCreateProject);
  yield takeLatest(GET_DETAIL_PROJECT_ADMIN_ACTION, getDetailProject);
  yield takeLatest(DELETE_PROJECT_ADMIN_ACTION, onDeleteProject);
  yield takeLatest(EDIT_PROJECT_ADMIN_ACTION, onEditProject);
  // ----------------------------

  // -------- Outstanding -----------
  yield takeLatest(GET_LIST_OUTSTANDINGS_ADMIN_ACTION, getListOutstandings);
  yield takeLatest(CREATE_OUTSTANDING_ADMIN_ACTION, onCreateOutstanding);
  yield takeLatest(GET_DETAIL_OUTSTANDING_ADMIN_ACTION, getDetailOutstanding);
  yield takeLatest(DELETE_OUTSTANDING_ADMIN_ACTION, onDeleteOutstanding);
  yield takeLatest(EDIT_OUTSTANDING_ADMIN_ACTION, onEditOutstanding);
  // ----------------------------

  // -------- Activity -----------
  yield takeLatest(GET_LIST_ACTIVITY_ADMIN_ACTION, getListActivity);
  yield takeLatest(CREATE_ACTIVITY_ADMIN_ACTION, onCreateActivity);
  yield takeLatest(GET_DETAIL_ACTIVITY_ADMIN_ACTION, getDetailActivity);
  yield takeLatest(DELETE_ACTIVITY_ADMIN_ACTION, onDeleteActivity);
  yield takeLatest(EDIT_ACTIVITY_ADMIN_ACTION, onEditActivity);
  // ----------------------------

  // -------- Partner -----------
  yield takeLatest(GET_LIST_PARTNER_ADMIN_ACTION, getListPartner);
  yield takeLatest(CREATE_PARTNER_ADMIN_ACTION, onCreatePartner);
  yield takeLatest(GET_DETAIL_PARTNER_ADMIN_ACTION, getDetailPartner);
  yield takeLatest(DELETE_PARTNER_ADMIN_ACTION, onDeletePartner);
  yield takeLatest(EDIT_PARTNER_ADMIN_ACTION, onEditPartner);
  // ----------------------------

  // -------- Program -----------
  yield takeLatest(GET_LIST_PROGRAM_ADMIN_ACTION, getListProgram);
  yield takeLatest(CREATE_PROGRAM_ADMIN_ACTION, onCreateProgram);
  yield takeLatest(GET_DETAIL_PROGRAM_ADMIN_ACTION, getDetailProgram);
  yield takeLatest(DELETE_PROGRAM_ADMIN_ACTION, onDeleteProgram);
  yield takeLatest(EDIT_PROGRAM_ADMIN_ACTION, onEditProgram);
  // ----------------------------

  // -------- Achievement -----------
  yield takeLatest(GET_LIST_ACHIEVEMENT_ADMIN_ACTION, getListAchievement);
  yield takeLatest(CREATE_ACHIEVEMENT_ADMIN_ACTION, onCreateAchievement);
  yield takeLatest(GET_DETAIL_ACHIEVEMENT_ADMIN_ACTION, getDetailAchievement);
  yield takeLatest(DELETE_ACHIEVEMENT_ADMIN_ACTION, onDeleteAchievement);
  yield takeLatest(EDIT_ACHIEVEMENT_ADMIN_ACTION, onEditAchievement);
  // ----------------------------

  // -------- Capacity -----------
  yield takeLatest(GET_LIST_CAPACITY_ADMIN_ACTION, getListCapacity);
  yield takeLatest(CREATE_CAPACITY_ADMIN_ACTION, onCreateCapacity);
  yield takeLatest(GET_DETAIL_CAPACITY_ADMIN_ACTION, getDetailCapacity);
  yield takeLatest(DELETE_CAPACITY_ADMIN_ACTION, onDeleteCapacity);
  yield takeLatest(EDIT_CAPACITY_ADMIN_ACTION, onEditCapacity);
  // ----------------------------

  // -------- Rating -----------
  yield takeLatest(GET_LIST_RATING_ADMIN_ACTION, getListRating);
  yield takeLatest(CREATE_RATING_ADMIN_ACTION, onCreateRating);
  yield takeLatest(GET_DETAIL_RATING_ADMIN_ACTION, getDetailRating);
  yield takeLatest(DELETE_RATING_ADMIN_ACTION, onDeleteRating);
  yield takeLatest(EDIT_RATING_ADMIN_ACTION, onEditRating);
  // ----------------------------

  // -------- Team -----------
  yield takeLatest(GET_LIST_TEAM_ADMIN_ACTION, getListTeam);
  yield takeLatest(CREATE_TEAM_ADMIN_ACTION, onCreateTeam);
  yield takeLatest(GET_DETAIL_TEAM_ADMIN_ACTION, getDetailTeam);
  yield takeLatest(DELETE_TEAM_ADMIN_ACTION, onDeleteTeam);
  yield takeLatest(EDIT_TEAM_ADMIN_ACTION, onEditTeam);
  // ----------------------------
}
