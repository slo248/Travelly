import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function HotelIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 33 32" fill="none">
        <Path
          d="M2.33333 27H30.3333"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M18.3333 27V5C18.3333 4.73478 18.228 4.48043 18.0404 4.29289C17.8529 4.10536 17.5985 4 17.3333 4H5.33333C5.06811 4 4.81376 4.10536 4.62622 4.29289C4.43869 4.48043 4.33333 4.73478 4.33333 5V27"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M28.3333 27V13C28.3333 12.7348 28.228 12.4804 28.0404 12.2929C27.8529 12.1054 27.5985 12 27.3333 12H18.3333"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.33333 9H12.3333"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M10.3333 17H14.3333"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.33333 22H12.3333"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M22.3333 22H24.3333"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M22.3333 17H24.3333"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
