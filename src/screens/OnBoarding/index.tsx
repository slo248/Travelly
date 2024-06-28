import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '~/comps/Button';

export default function OnBoarding() {
  return (
    <View>
      <Text>OnBoarding</Text>
      <View style={{ width: 343, height: 60 }}>
        <Button title="Next" onPress={() => console.log('Next')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
