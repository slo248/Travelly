import { View, Text } from 'react-native';
import React from 'react';
import { rMS } from './styles/responsive';
import { Fonts } from './styles/fonts';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: rMS(20), fontFamily: Fonts.regular }}>
        Hello World!
      </Text>
    </View>
  );
}
