import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigator} from './navigators';

const Stack = createNativeStackNavigator();
const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="auth" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
