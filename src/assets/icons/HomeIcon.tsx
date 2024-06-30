import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function HomeIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 25 24" fill="none">
        <Path
          d="M6.27778 10.2222V18C6.27778 19.1046 7.17321 20 8.27778 20H12.5M6.27778 10.2222L11.7929 4.70711C12.1834 4.31658 12.8166 4.31658 13.2071 4.70711L18 9.5M6.27778 10.2222L4.5 12M18.7222 10.2222V18C18.7222 19.1046 17.8268 20 16.7222 20H12.5M18.7222 10.2222L20.5 12M18.7222 10.2222L18 9.5M18 9.5V6M12.5 20V15"
          stroke="#050505"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
