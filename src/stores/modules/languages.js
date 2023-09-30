export const CHANGE_LANG_ACTION = 'CHANGE_LANG_ACTION';

import {REHYDRATE} from 'redux-persist';
import _ from 'lodash';
import i18n from "locales/i18n";

const defaultState = {
  currentLang: "vi"
};

export default function languagesReducer(state = defaultState, action) {
  switch (action.type) {
    case REHYDRATE:
      return {
        ..._.get(action, 'payload.languages')
      };
    case CHANGE_LANG_ACTION:
      i18n.changeLanguage(action.data);
      return { 
        ...state, 
        currentLang: action.data
      };
    default:
      return state;
  }
}

export const changeLangAction = (data) => {
  return {
    type: CHANGE_LANG_ACTION,
    data
  }
}