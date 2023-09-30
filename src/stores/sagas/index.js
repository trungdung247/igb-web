import { all, fork } from 'redux-saga/effects';
import * as MainSaga from './main';
import * as PresentationSaga from './presentation';
import * as ProjectSaga from './project';
import * as AdminSaga from './admin';
import * as UserSaga from './user';
import * as ServiceSaga from './service';

export default function* rootSaga() {
  yield all([
    ...Object.values(MainSaga),
    ...Object.values(PresentationSaga),
    ...Object.values(ProjectSaga),
    ...Object.values(AdminSaga),
    ...Object.values(UserSaga),
    ...Object.values(ServiceSaga),
  ].map(fork))
}