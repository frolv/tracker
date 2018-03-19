import * as React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { Store } from 'types';
import LocaleInfo from 'models/locale-info';

import App from './app';

const Intl = (props: LocaleInfo) => (
  <IntlProvider locale={props.locale} key={props.locale} messages={props.messages}>
    <App />
  </IntlProvider>
);

const mapStateToProps = (state: Store) => state.localeInfo;

const I18nWrapper = connect(
  mapStateToProps,
  null
)(Intl);

export default I18nWrapper;
