import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { HomeProps } from '~/navigation/types';
import { globalStyles } from '~/styles/globalStyles';
import Services from './Services';
import { Texts } from '~/styles/texts';
import { rH } from '~/styles/responsive';
import SearchBox from '~/components/SearchBox';

export default function Home(props: HomeProps) {
  return (
    <View style={[globalStyles.container]}>
      <Text style={[Texts.h2, styles.heading]}>
        Explore the beautiful world!
      </Text>
      <View style={styles.searchBox}>
        <SearchBox />
      </View>
      <View style={styles.services}>
        <Services />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginTop: rH(24)
  },
  searchBox: {
    marginTop: rH(16),
    height: rH(40)
  },
  services: {
    marginTop: rH(24),
    flex: 1
  }
});
