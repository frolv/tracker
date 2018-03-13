import { LocaleInfo } from './types';
import actions from './actions';
import constants from './constants';
import reducer from './reducer';
import saga from './saga';

export default LocaleInfo;

export const Locale = { actions, constants, reducer, saga };
