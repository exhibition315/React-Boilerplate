import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import rootSaga from './sagas';
import createRootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

export const configureStore = (browserHistory = history, initialState = {}) => {
  const store = createStore(
    createRootReducer(browserHistory),
    initialState,
    compose(applyMiddleware(routerMiddleware(browserHistory), sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

const store = configureStore();

export default store;
