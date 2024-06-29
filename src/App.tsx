import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';

import Splash from '~/screens/Splash';
import OnBoarding from '~/screens/OnBoarding';
import { RootStackParamList } from '~/navigation/types';
import Welcome from '~/screens/Welcome';

enableScreens();

// Create the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
