import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import {persistStore} from 'redux-persist';
import {thunk} from 'redux-thunk';
import reducers from '../reducers';

let middlewares = [thunk];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;

export {reducers};

export const persistor = persistStore(store);
