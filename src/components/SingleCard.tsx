import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Colors } from '~/styles/colors';
import { rH, rMS, rW } from '~/styles/responsive';
import { Fonts } from '~/styles/fonts';
import Animated from 'react-native-reanimated';

interface SingleCardProps {
  header: string;
  desc: string;
}

const SingleCard: FC<SingleCardProps> = ({ header, desc }) => {
  return (
    <View style={styles.container}>
      <Animated.Text style={styles.heading}>{header}</Animated.Text>
      <Animated.Text style={styles.desc}>{desc}</Animated.Text>
    </View>
  );
};

export default SingleCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 15,
    rowGap: rH(4),
    paddingHorizontal: rW(16),
    paddingTop: rH(4),
    paddingBottom: rH(8)
  },
  heading: {
    color: Colors.placeholder,
    fontSize: rMS(10),
    fontFamily: Fonts.medium
  },
  desc: {
    color: Colors.tertiary,
    fontSize: rMS(16),
    fontFamily: Fonts.regular
  }
});
