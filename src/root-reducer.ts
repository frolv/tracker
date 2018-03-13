import { combineReducers } from 'redux';

import { Locale } from 'models/locale-info';

const rootReducer = combineReducers({
  localeInfo: Locale.reducer
});

export default rootReducer;
