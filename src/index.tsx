import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';

import I18nWrapper from './i18n-wrapper';
import Store from './store';
import { Locale } from './models/locale-info';

addLocaleData([...en]);

const store = Store();

/* Initialize the user's locale. */
store.dispatch(Locale.actions.setLocale(navigator.language));

ReactDOM.render(
  <Provider store={store}>
    <I18nWrapper />
  </Provider>,
  document.getElementById('root')
);
