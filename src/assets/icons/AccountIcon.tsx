import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function AccountIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 25 24" fill="none">
        <Path
          d="M5.5 20V19C5.5 16.2386 7.73858 14 10.5 14H14.5C17.2614 14 19.5 16.2386 19.5 19V20M16.5 7C16.5 9.20914 14.7091 11 12.5 11C10.2909 11 8.5 9.20914 8.5 7C8.5 4.79086 10.2909 3 12.5 3C14.7091 3 16.5 4.79086 16.5 7Z"
          stroke={color}
          strokeWidth="2"
          // stroke-linecap="round"
          // stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
