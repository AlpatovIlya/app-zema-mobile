import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {screenNames} from '../../constants';
import {AuthHeader} from '../../includes';
import {SignInScreen, SignUpScreen} from '../../screens';

const Stack = createNativeStackNavigator();

const authScreenNames = screenNames.authScreenNames;

const AuthNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          header: () => <AuthHeader />,
        }}>
        <Stack.Screen name={authScreenNames.SIGN_IN} component={SignInScreen} />
        <Stack.Screen name={authScreenNames.SIGN_UP} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
