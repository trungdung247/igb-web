import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-js';
import * as reducers from './modules';
import rootSaga from "./sagas";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['languages', 'user', 'main'],
  timeout: 0
};

const combinedReducers = combineReducers(reducers);
const rootReducers = (state, action) => {
  const reducedState = combinedReducers(state, action);
  return reducedState;
};

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const sagaMonitor = Reactotron.createSagaMonitor;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const pReducer = persistReducer(persistConfig, rootReducers);
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(pReducer, enhancer);
Reactotron.clear();
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;