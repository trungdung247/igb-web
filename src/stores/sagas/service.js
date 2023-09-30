import { takeLatest, put } from 'redux-saga/effects';
import apis from 'networking/apis';
import { 
  GET_LIST_SERVICES_ACTION,
  GET_DETAIL_SERVICE_ACTION,
  updateServiceStoreAction
} from 'stores/modules/service';
import { toast } from 'react-toastify';
import i18n from "locales/i18n";

function* getListServices({payload}) {
  try {
    yield put(updateServiceStoreAction({loadingGetListService: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_SERVICES, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get list service");
    }
    yield put(updateServiceStoreAction({
      listServices: res?.results?.datas || [],
      loadingGetListService: "success"
    }));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_danh_sach_du_an'));
    yield put(updateServiceStoreAction({loadingGetListService: "error"}));
  }
}

function* getDetailService({payload}) {
  try {
    yield put(updateServiceStoreAction({loadingDetailService: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_DETAIL_SERVICE, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get detail service");
    }
    yield put(updateServiceStoreAction({
      detailService: res?.results?.data,
      loadingDetailService: "success"
    }));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_danh_sach_du_an'));
    yield put(updateServiceStoreAction({loadingDetailService: "error"}));
  }
}

export function* ServiceSaga() {
  yield takeLatest(GET_LIST_SERVICES_ACTION, getListServices);
  yield takeLatest(GET_DETAIL_SERVICE_ACTION, getDetailService);
}
