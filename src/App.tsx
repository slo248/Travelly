import { View, Text } from 'react-native';
import React from 'react';
import { rMS } from './styles/responsive';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: rMS(20) }}>App</Text>
    </View>
  );
}
