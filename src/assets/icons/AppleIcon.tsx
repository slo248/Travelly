import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function FacebookIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 17 32" fill="none">
        <Path
          d="M10.8475 17.2032H16.1206L16.9485 11.9103H10.8465V9.01752C10.8465 6.81877 11.5736 4.86904 13.6551 4.86904H17V0.250075C16.4123 0.171661 15.1694 0 12.8208 0C7.91661 0 5.04145 2.55903 5.04145 8.38915V11.9103H0V17.2032H5.04145V31.751C6.03987 31.8993 7.05116 32 8.08926 32C9.02763 32 9.94348 31.9152 10.8475 31.7944V17.2032Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
