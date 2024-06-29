import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { HomeProps } from '~/navigation/types';
import { globalStyles } from '~/styles/globalStyles';

export default function Home(props: HomeProps) {
  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
