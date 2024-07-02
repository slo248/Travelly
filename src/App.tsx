import { createContext, useReducer, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import { SafeAreaView } from 'react-native';
import RootStack from './navigators/RootStack';
import AuthStack from './navigators/AuthStack';
import { AuthContext } from './contexts/AuthContext';
import { user } from './data/user';

enableScreens();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        signIn: () => setIsSignedIn(true),
        signOut: () => setIsSignedIn(false),
        user
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          {isSignedIn ? <AuthStack /> : <RootStack />}
        </NavigationContainer>
      </SafeAreaView>
    </AuthContext.Provider>
  );
}
