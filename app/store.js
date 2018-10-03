import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import rootSaga from './actions/saga';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(
//   rootReducer,
//   applyMiddleware(sagaMiddleware)
// )
// sagaMiddleware.run(rootSaga)

const sagaMiddleware = createSagaMiddleware();
export const history = createHistory();

const middlewares = [
  sagaMiddleware,
  routerMiddleware(history),
];

const enhancers = [
  applyMiddleware(...middlewares),
];

const initialState = {};

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false,
    })
    : compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(...enhancers)
);

sagaMiddleware.run(rootSaga)

// Extensions
// store.runSaga = sagaMiddleware.run;
// store.injectedReducers = {}; // Reducer registry
// store.injectedSagas = {}; // Saga registry

// if (module.hot) {
//   module.hot.accept('./reducers', () => {
//     // store.replaceReducer(createReducer(store.injectedReducers));
//     store.dispatch({ type: '@@REDUCER_INJECTED' });
//   });
// }

export default store;
// export default function configureStore(initialState = {}, history) {
//
//   // Redux DevTools Extension installed ? use it : use Redux compose
//
//
//   return store;
// }
