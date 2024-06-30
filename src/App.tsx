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
import Login from '~/screens/Login';
import Home from './screens/Home';
import { SafeAreaView } from 'react-native';

enableScreens();

// Create the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right'
          }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
