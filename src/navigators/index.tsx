import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import Home from '../presentation/screens/home';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigators = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
