import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '~/styles/colors';
import Loading from './Loading';

export default function Splash() {
  return (
    <View style={styles.container}>
      <Loading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  }
});
