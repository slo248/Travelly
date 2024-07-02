import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function TrainIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 32 32" fill="none">
        <Path
          d="M5.5 16H26.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.5 9H26.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 26L9 30"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M20 26L23 30"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M23.5 4H8.5C6.84315 4 5.5 5.34315 5.5 7V23C5.5 24.6569 6.84315 26 8.5 26H23.5C25.1569 26 26.5 24.6569 26.5 23V7C26.5 5.34315 25.1569 4 23.5 4Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16 9V16"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.5 23C11.3284 23 12 22.3284 12 21.5C12 20.6716 11.3284 20 10.5 20C9.67157 20 9 20.6716 9 21.5C9 22.3284 9.67157 23 10.5 23Z"
          fill={color}
        />
        <Path
          d="M21.5 23C22.3284 23 23 22.3284 23 21.5C23 20.6716 22.3284 20 21.5 20C20.6716 20 20 20.6716 20 21.5C20 22.3284 20.6716 23 21.5 23Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
