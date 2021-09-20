import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthNavigator} from './navigators';
import {screenNames} from '../constants';

const Stack = createNativeStackNavigator();
const rootScreenNames = screenNames.rootScreenNames;

const RootStackNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={rootScreenNames.AUTH} component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
