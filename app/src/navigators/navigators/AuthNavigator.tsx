import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SignIn, SignUp} from '../../screens';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="signIn" component={SignIn} />
        <Stack.Screen name="signUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
