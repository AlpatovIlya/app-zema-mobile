import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthHeader} from '../../components/modules';
import {ScreenNames} from '../../constants';
import {SignIn, SignUp} from '../../screens';

const Stack = createNativeStackNavigator();
const AuthScreenNames = ScreenNames.AuthScreenNames;

const AuthNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          header: AuthHeader,
        }}>
        <Stack.Screen name={AuthScreenNames.SIGN_IN} component={SignIn} />
        <Stack.Screen name={AuthScreenNames.SIGN_UP} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
