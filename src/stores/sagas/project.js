import { takeLatest, put } from 'redux-saga/effects';
import apis from 'networking/apis';
import { 
  GET_LIST_PROJECTS_ACTION,
  GET_DETAIL_PROJECT_ACTION,
  updateProjectStoreAction
} from 'stores/modules/project';
import { toast } from 'react-toastify';
import i18n from "locales/i18n";

function* getListProjects({payload}) {
  try {
    yield put(updateProjectStoreAction({loadingGetListProject: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_LIST_PROJECTS, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get list projects");
    }
    let datas = res?.results?.datas || [];
    let listProjects = [];
    if(datas?.length){
      listProjects = datas.map((item) => (
        {
          ...item,
          href: `/projects/${item?.id}`
        }
      ))
    }
    yield put(updateProjectStoreAction({
      listProjects,
      loadingGetListProject: "success"
    }));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_danh_sach_du_an'));
    yield put(updateProjectStoreAction({loadingGetListProject: "error"}));
  }
}

function* getDetailProject({payload}) {
  try {
    yield put(updateProjectStoreAction({loadingDetailProject: "loading"}));
    const res = yield apis.apiGet(apis.PATH.API_DETAIL_PROJECT, payload);
    if (!res?.success || !res?.results) {
      throw new Error("Cannot get detail project");
    }
    yield put(updateProjectStoreAction({
      detailProject: res?.results?.data,
      loadingDetailProject: "success"
    }));
  } catch (error) {
    toast.warn(i18n.t('khong_lay_duoc_danh_sach_du_an'));
    yield put(updateProjectStoreAction({loadingDetailProject: "error"}));
  }
}

export function* ProjectSaga() {
  yield takeLatest(GET_LIST_PROJECTS_ACTION, getListProjects);
  yield takeLatest(GET_DETAIL_PROJECT_ACTION, getDetailProject);
}
