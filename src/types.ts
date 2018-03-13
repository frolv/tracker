import LocaleInfo from 'models/locale-info';

export interface Store {
  localeInfo: LocaleInfo;
}

export interface Action {
  type: string;
};
