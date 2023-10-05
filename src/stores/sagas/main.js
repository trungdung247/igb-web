import { takeLatest, put, select, delay } from 'redux-saga/effects';
import apis from 'networking/apis';
import { 
  START_CONNECT_ACTION,
  updateMainStoreAction
} from 'stores/modules/main';
import { changeLangAction } from "stores/modules/languages";
import { LoaderHandler } from "components/LoadingIndicator/LoaderHandler";

function* getConfigMain({payload}) {
  try {
    // LoaderHandler.show(true);
    const currentLang = yield select(state => state.languages?.currentLang) || "vi";
    yield put(updateMainStoreAction({loadingGetConfig: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_GET_CONFIG, payload);
    if (!res?.success && !res?.result) {
      throw new Error("Cannot get config data main");
    }
    let datas = res?.results?.datas;
    yield put(updateMainStoreAction({
      listInformations: datas?.listInformations || [],
      listServices: datas?.listServices || [],
      listProjects: datas?.listProjects || [],
      loadingGetConfig: "success"
    }));
    yield delay(3000);
    yield put(changeLangAction(currentLang));
  } catch (error) {
    console.log(error);
    yield put(updateMainStoreAction({loadingGetConfig: "error"}));
  } finally{
    LoaderHandler.show(false);
  }
}

export function* MainSaga() {
  yield takeLatest(START_CONNECT_ACTION, getConfigMain);
}
