import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';

import user from './user';
import forms from './forms';
import carts from './carts';
import example from './example';
import armatura from './armatura';

let reducers = combineReducers({
  user,forms,carts,example,armatura
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;