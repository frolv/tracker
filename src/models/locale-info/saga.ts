import { put, takeEvery } from 'redux-saga/effects';

import actions from './actions';
import constants from './constants';
import { SetLocaleAction } from './types';

/**
 * Fetch a JSON translation file from the server
 * and save its data to the store.
 * @param action set-locale action for the desired locale.
 */
function* setLocale(action: SetLocaleAction) {
  const url = `${process.env.PUBLIC_URL}/locales/${action.locale}.json`;
  const data = yield fetch(url);
  yield put(actions.fetchLocale());

  const json = yield data.json();
  yield put(actions.putMessages(action.locale, json));
}

export default function* localeSaga() {
  yield takeEvery(constants.SET_LOCALE, setLocale);
}
