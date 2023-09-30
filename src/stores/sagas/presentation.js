import { takeLatest, put } from 'redux-saga/effects';
import apis from 'networking/apis';
import { 
  GET_LIST_OUTSTANDING_ACTION,
  GET_LIST_PARTNER_ACTION,
  GET_LIST_PROGRAM_ACTION,
  GET_LIST_ACHIEVEMENT_ACTION,
  GET_LIST_CAPACITY_ACTION,
  GET_LIST_RATING_ACTION,
  GET_LIST_TEAM_ACTION,
  GET_LIST_ACTIVITY_ACTION,
  GET_DETAIL_ACTIVITY_ACTION,
  updatePresentationStoreAction
} from 'stores/modules/presentation';
import { LoaderHandler } from "components/LoadingIndicator/LoaderHandler";
import { toast } from 'react-toastify';
import i18n from "locales/i18n";

function* getListActivity({payload}) {
  try {
    yield put(updatePresentationStoreAction({loadingGetActivity: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_ACTIVITY, payload);
    if (!res?.success && !res?.results) {
      throw new Error("Cannot get list activity");
    }
    yield put(updatePresentationStoreAction({
      loadingGetActivity: "success",
      listActivity: res?.results?.datas || []
    }));
  } catch (error) {
    // toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updatePresentationStoreAction({loadingGetActivity: "error"}));
  } finally{
    LoaderHandler.show(false);
  }
}

function* getDetailActivity({payload}) {
  try {
    yield put(updatePresentationStoreAction({loadingDetailActivity: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_DETAIL_ACTIVITY, payload);
    if (!res?.success && !res?.results) {
      throw new Error("Cannot get detail activity");
    }
    yield put(updatePresentationStoreAction({
      loadingDetailActivity: "success",
      detailActivity: res?.results?.data
    }));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updatePresentationStoreAction({loadingDetailActivity: "error"}));
  } finally{
    LoaderHandler.show(false);
  }
}

function* getListOutstanding({payload}) {
  try {
    yield put(updatePresentationStoreAction({loadingGetOutstandings: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_OUTSTANDINGS, payload);
    if (!res?.success && !res?.results) {
      throw new Error("Cannot get list outstanding");
    }
    yield put(updatePresentationStoreAction({
      loadingGetOutstandings: "success",
      listOutstandings: res?.results?.datas || []
    }));
  } catch (error) {
    // toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updatePresentationStoreAction({loadingGetOutstandings: "error"}));
  } finally{
    LoaderHandler.show(false);
  }
}

function* getListPartner({payload}) {
  try {
    yield put(updatePresentationStoreAction({loadingGetPartner: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_PARTNER, payload);
    if (!res?.success && !res?.results) {
      throw new Error("Cannot get list partner");
    }
    yield put(updatePresentationStoreAction({
      loadingGetPartner: "success",
      listPartner: res?.results?.datas || []
    }));
  } catch (error) {
    // toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updatePresentationStoreAction({loadingGetPartner: "error"}));
  } finally{
    LoaderHandler.show(false);
  }
}

function* getListProgram({payload}) {
  try {
    yield put(updatePresentationStoreAction({loadingGetProgram: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_PROGRAM, payload);
    if (!res?.success && !res?.results) {
      throw new Error("Cannot get list program");
    }
    yield put(updatePresentationStoreAction({
      loadingGetProgram: "success",
      listProgram: res?.results?.datas || []
    }));
  } catch (error) {
    // toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updatePresentationStoreAction({loadingGetProgram: "error"}));
  } finally{
    LoaderHandler.show(false);
  }
}

function* getListAchievement({payload}) {
  try {
    yield put(updatePresentationStoreAction({loadingGetAchievement: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_ACHIEVEMENT, payload);
    if (!res?.success && !res?.results) {
      throw new Error("Cannot get list achievement");
    }
    yield put(updatePresentationStoreAction({
      loadingGetAchievement: "success",
      listAchievement: res?.results?.datas || []
    }));
  } catch (error) {
    // toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updatePresentationStoreAction({loadingGetAchievement: "error"}));
  } finally{
    LoaderHandler.show(false);
  }
}

function* getListCapacity({payload}) {
  try {
    yield put(updatePresentationStoreAction({loadingGetCapacity: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_CAPACITY, payload);
    if (!res?.success && !res?.results) {
      throw new Error("Cannot get list capacity");
    }
    yield put(updatePresentationStoreAction({
      loadingGetCapacity: "success",
      listCapacity: res?.results?.datas || []
    }));
  } catch (error) {
    // toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updatePresentationStoreAction({loadingGetCapacity: "error"}));
  } finally{
    LoaderHandler.show(false);
  }
}

function* getListRating({payload}) {
  try {
    yield put(updatePresentationStoreAction({loadingGetRating: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_RATING, payload);
    if (!res?.success && !res?.results) {
      throw new Error("Cannot get list rating");
    }
    yield put(updatePresentationStoreAction({
      loadingGetRating: "success",
      listRating: res?.results?.datas || []
    }));
  } catch (error) {
    // toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updatePresentationStoreAction({loadingGetRating: "error"}));
  } finally{
    LoaderHandler.show(false);
  }
}

function* getListTeam({payload}) {
  try {
    yield put(updatePresentationStoreAction({loadingGetTeam: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_TEAM, payload);
    if (!res?.success && !res?.results) {
      throw new Error("Cannot get list team");
    }
    yield put(updatePresentationStoreAction({
      loadingGetTeam: "success",
      listTeam: res?.results?.datas || []
    }));
  } catch (error) {
    // toast.warn(i18n.t('khong_lay_duoc_du_lieu'));
    yield put(updatePresentationStoreAction({loadingGetTeam: "error"}));
  } finally{
    LoaderHandler.show(false);
  }
}

export function* PresentationSaga() {
  yield takeLatest(GET_LIST_OUTSTANDING_ACTION, getListOutstanding);
  yield takeLatest(GET_LIST_ACTIVITY_ACTION, getListActivity);
  yield takeLatest(GET_DETAIL_ACTIVITY_ACTION, getDetailActivity);
  yield takeLatest(GET_LIST_PARTNER_ACTION, getListPartner);
  yield takeLatest(GET_LIST_PROGRAM_ACTION, getListProgram);
  yield takeLatest(GET_LIST_ACHIEVEMENT_ACTION, getListAchievement);
  yield takeLatest(GET_LIST_CAPACITY_ACTION, getListCapacity);
  yield takeLatest(GET_LIST_RATING_ACTION, getListRating);
  yield takeLatest(GET_LIST_TEAM_ACTION, getListTeam);
}
