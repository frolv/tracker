import { all } from 'redux-saga/effects';

import { Locale } from './models/locale-info';

export default function* rootSaga() {
  yield all([
    Locale.saga()
  ]);
}
