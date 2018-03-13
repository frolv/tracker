import constants from './constants';
import { IntlMessages } from './types';

/* Consolidate different locale strings into the filenames we use. */
const availableLocales = {
  'en':     'en',
  'en-US':  'en'
};

const fetchLocale = () => {
  return { type: constants.FETCH_LOCALE };
};

/**
 * Return a put-messages action with the specified locale and messages.
 * @param locale The locale identifier.
 * @param messages Translations for the locale.
 * @return A put-messages action.
 */
const putMessages = (locale: string, messages: IntlMessages) => {
  return {
    type: constants.PUT_MESSAGES,
    locale: locale,
    messages: messages
  };
};

/**
 * Return a set-locale action for the desired locale,
 * falling back on English if it isn't supported.
 * @param locale Requested locale identifier.
 * @return A set-locale action for the locale.
 */
const setLocale = (locale: string) => {
  if (!availableLocales[locale]) {
    locale = 'en';
  } else {
    locale = availableLocales[locale];
  }

  return {
    type: constants.SET_LOCALE,
    locale: locale
  };
};

export default { fetchLocale, putMessages, setLocale };
