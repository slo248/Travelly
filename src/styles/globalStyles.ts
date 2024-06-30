import { StyleSheet } from 'react-native';
import { rW } from './responsive';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: rW(16)
  },
  image: {
    aspectRatio: 1
  }
});
