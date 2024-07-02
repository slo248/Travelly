import { StyleSheet } from 'react-native';
import { rH, rMS, rW } from './responsive';
import { Fonts } from './fonts';
import { Colors } from './colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: rW(16)
  },
  image: {
    aspectRatio: 1
  },
  textForm: {
    fontSize: rMS(16),
    fontFamily: Fonts.regular,
    color: Colors.tertiary
  },
  headingForm: {
    fontSize: rMS(10),
    fontFamily: Fonts.regular,
    color: Colors.placeholder
  },
  cardForm: {
    width: '100%',
    paddingHorizontal: rW(16),
    paddingTop: rH(4),
    paddingBottom: rH(8),
    backgroundColor: Colors.white,
    borderRadius: 15
  },
  textOptionForm: {
    fontSize: rMS(14),
    fontFamily: Fonts.medium
  }
});

export const bottomtTabBarHeight = rH(56);
