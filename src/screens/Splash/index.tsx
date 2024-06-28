import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { Colors } from '~/styles/colors';
import { rH } from '~/styles/responsive';

import Loading from './Loading';
import Logo from './Logo';

export default function Splash() {
  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute', alignSelf: 'center', top: rH(200) }}>
        <Logo />
      </View>
      <View
        style={{ position: 'absolute', alignSelf: 'center', bottom: rH(72) }}
      >
        <Loading />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: Colors.primary
  }
});
