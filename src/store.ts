import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
/* tslint:disable-next-line */
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import rootReducer from './root-reducer';
import rootSaga from './saga';

const configureStore = () => {
  const composeEnhancers = composeWithDevTools({
    name: 'tracker'
  });
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
  ));

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
