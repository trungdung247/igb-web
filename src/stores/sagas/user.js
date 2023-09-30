import { takeLatest, put } from 'redux-saga/effects';
import { 
  LOGOUT_ACTION,
  LOGIN_ACTION,
  updateUserStoreAction
} from 'stores/modules/user';
import { toast } from 'react-toastify';
import { LoaderHandler } from "components/LoadingIndicator/LoaderHandler";
import apis from 'networking/apis';
import i18n from "locales/i18n";

function* onLogin({payload, onSuccess}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiPost(apis.PATH.API_LOGIN, payload);
    if (!res?.success || !res?.results?.data) {
      toast.warn(res?.results?.message);
      return;
    }
    yield put(updateUserStoreAction({userInfo: res?.results?.data}));
    onSuccess();
  } catch (error) {
    console.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}

function* onLogout({payload}) {
  try {
    LoaderHandler.show(true);
    const res = yield apis.apiGet(apis.PATH.API_LOGOUT, payload);
    if (!res?.success) {
      toast.warn(res?.results?.message);
      return;
    }
    toast.success(i18n.t('dang_xuat_thanh_cong'));
    yield put(updateUserStoreAction({userInfo: null}));
  } catch (error) {
    console.error(error);
  } finally{
    LoaderHandler.show(false);
  }
}

export function* UserSaga() {
  yield takeLatest(LOGOUT_ACTION, onLogout);
  yield takeLatest(LOGIN_ACTION, onLogin);
}
