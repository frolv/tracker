import { Action } from 'types';

export type IntlMessages = { [id: string]: string };

export interface LocaleInfo {
  locale: string;
  messages: IntlMessages;
}

export interface PutMessagesAction extends Action {
  locale: string;
  messages: IntlMessages;
};

export interface SetLocaleAction extends Action {
  locale: string;
};

export type LocaleAction = PutMessagesAction | SetLocaleAction;
