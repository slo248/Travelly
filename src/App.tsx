import { createContext, useReducer, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import { SafeAreaView, Text } from 'react-native';
import RootStack from './navigators/RootStack';
import AuthStack from './navigators/AuthStack';
import { useAuth } from '~/contexts/AuthContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

enableScreens();

export default function App() {
  const [{ isAuthenticated }] = useAuth();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          {isAuthenticated ? <AuthStack /> : <RootStack />}
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
