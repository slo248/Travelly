import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function FacebookIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 29 32" fill="none">
        <Path
          d="M23.8186 30.7114C22.0178 32.3959 20.0309 32.1333 18.1371 31.339C16.1236 30.5288 14.283 30.4776 12.1566 31.339C9.50852 32.4407 8.1031 32.1204 6.5083 30.7114C-2.49571 21.7766 -1.16671 8.16621 9.06663 7.65382C11.5485 7.78192 13.2862 8.97643 14.7481 9.07571C16.921 8.64978 19.0009 7.42965 21.3267 7.58978C24.1209 7.80754 26.2108 8.87075 27.6062 10.7826C21.8583 14.1131 23.2205 21.4147 28.5 23.4643C27.4434 26.1383 26.0879 28.7803 23.8153 30.7338L23.8186 30.7114ZM14.5488 7.55775C14.2796 3.58673 17.6188 0.320244 21.4596 0C21.9879 4.57948 17.1403 8.00609 14.5488 7.55775Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
