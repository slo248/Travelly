import { SafeAreaView, StyleSheet, Text } from 'react-native';
import React from 'react';
import Splash from './screens/Splash';
import OnBoarding from './screens/OnBoarding';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <OnBoarding />
    </SafeAreaView>
  );
}
