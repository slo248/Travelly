import { StyleSheet } from 'react-native';

import { Colors } from './colors';
import { Fonts } from './fonts';
import { rMS } from './responsive';

export const Texts = StyleSheet.create({
  h1: {
    color: Colors.black,
    fontSize: rMS(24),
    fontFamily: Fonts.bold
  },
  h2: {
    color: Colors.black,
    fontSize: rMS(20),
    fontFamily: Fonts.bold
  },
  h3: {
    color: Colors.black,
    fontSize: rMS(18),
    fontFamily: Fonts.semiBold
  },
  p: {
    color: Colors.black,
    fontSize: rMS(14),
    fontFamily: Fonts.regular
  }
});
