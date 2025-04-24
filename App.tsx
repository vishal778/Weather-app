import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {AppNavigators} from './src/navigators';
import store, {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigators />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
