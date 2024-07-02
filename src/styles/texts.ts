import { StyleSheet } from 'react-native';

import { Colors } from './colors';
import { Fonts } from './fonts';
import { rH, rMS } from './responsive';

export const Texts = StyleSheet.create({
  h1: {
    color: Colors.tertiary,
    fontSize: rMS(24),
    fontFamily: Fonts.bold
  },
  h2: {
    color: Colors.tertiary,
    fontSize: rMS(18),
    fontFamily: Fonts.semiBold
  },
  h3: {
    color: Colors.tertiary,
    fontSize: rMS(16),
    fontFamily: Fonts.semiBold
  },
  p: {
    color: Colors.tertiary,
    fontSize: rMS(14),
    fontFamily: Fonts.regular
  },
  error: {
    width: 500,
    position: 'absolute',
    bottom: rH(-20),
    color: Colors.red,
    fontSize: rMS(12),
    fontFamily: Fonts.medium,
    zIndex: 1
  }
});
