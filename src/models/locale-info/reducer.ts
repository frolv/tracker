import constants from './constants';
import { LocaleInfo, LocaleAction, PutMessagesAction } from './types';

const initialState: LocaleInfo = {
  locale: 'en',
  messages: {}
};

const reducer = (state = initialState, action: LocaleAction) => {
  switch (action.type) {
    case constants.PUT_MESSAGES:
      const a = action as PutMessagesAction;
      return { locale: a.locale, messages: a.messages };
    default:
      return state;
  }
};

export default reducer;
