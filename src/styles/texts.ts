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
    fontSize: rMS(18),
    fontFamily: Fonts.semiBold
  },
  h3: {
    color: Colors.black,
    fontSize: rMS(16),
    fontFamily: Fonts.semiBold
  },
  p: {
    color: Colors.black,
    fontSize: rMS(14),
    fontFamily: Fonts.regular
  },
  error: {
    color: Colors.red,
    fontSize: rMS(12),
    fontFamily: Fonts.medium
  }
});
