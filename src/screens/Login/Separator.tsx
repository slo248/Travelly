import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { Texts } from '~/styles/texts';
import { rW } from '~/styles/responsive';
import { Colors } from '~/styles/colors';
import { Fonts } from '~/styles/fonts';

export default function Separator() {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.line} />
      <Text style={styles.text}>or</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.paginator
  },
  text: {
    ...Texts.h3,
    color: Colors.paginator,
    marginHorizontal: rW(8)
  }
});
