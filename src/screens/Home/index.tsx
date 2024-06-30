import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { HomeProps } from '~/navigation/types';
import { globalStyles } from '~/styles/globalStyles';
import Services from './Services';
import { Texts } from '~/styles/texts';
import { rH } from '~/styles/responsive';

export default function Home(props: HomeProps) {
  return (
    <View style={[globalStyles.container]}>
      <Text style={[Texts.h2, styles.heading]}>
        Explore the beautiful world!
      </Text>
      <Services />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: rH(24)
  }
});
