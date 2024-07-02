import { createContext, useReducer, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import { SafeAreaView } from 'react-native';
import RootStack from './navigators/RootStack';
import AuthStack from './navigators/AuthStack';
import { user } from './data/user';
import { AuthProvider, useAuth } from '~/contexts/AuthContext';

enableScreens();

export default function App() {
  const [{ isAuthenticated }] = useAuth();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        {isAuthenticated ? <AuthStack /> : <RootStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
}
