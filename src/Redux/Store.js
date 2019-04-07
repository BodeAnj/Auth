import { applyMiddleware, combineReducers, createStore, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootSaga from './Saga/LoginSaga';
import rootReducer from './Reducers/AuthReducer'

const sagaMiddleware = createSagaMiddleware();

 const middleware = [sagaMiddleware];

  export default 
  createStore(
      rootReducer,
       compose(
           (applyMiddleware(sagaMiddleware))
        ));
  sagaMiddleware.run(rootSaga);