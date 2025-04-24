import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

import HomeReducer, {IHomeState} from './home';

const homeReducerPersistConfig = {
  key: 'homeReducerPersistConfig',
  storage: AsyncStorage,
  whitelist: ['weatherData', 'theme'],
};
const rootReducer = combineReducers({
  HomeReducer: persistReducer(homeReducerPersistConfig, HomeReducer),
  //...other reducers here
});

export interface RootState {
  HomeReducer: IHomeState;
}

export default rootReducer;
