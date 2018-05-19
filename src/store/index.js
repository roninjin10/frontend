import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import { ORIGIN, LOCALHOST } from '../constants'
import rootReducer from '../reducers'

const initialState = {};

const getMiddleware = () => {
  const middleware = [promise(), thunk];
  const devMiddleware = [...middleware, createLogger()];

  if (ORIGIN === LOCALHOST) {
    return composeWithDevTools(applyMiddleware(...devMiddleware));
  } else {
    return applyMiddleware(...middleware)
  }
};

const store = createStore(
  rootReducer,
  initialState, 
  getMiddleware()
);

export default store