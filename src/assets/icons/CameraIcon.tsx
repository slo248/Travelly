import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function CameraIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 28 28" fill="none">
        <Path
          d="M24.5 12.8332V21.3332C24.5 22.4377 23.6046 23.3332 22.5 23.3332H5.5C4.39543 23.3332 3.5 22.4377 3.5 21.3332V10.1665C3.5 9.06194 4.39543 8.1665 5.5 8.1665H7.75C8.37951 8.1665 8.97229 7.87012 9.35 7.3665L10.775 5.4665C11.1527 4.96289 11.7455 4.6665 12.375 4.6665H15.4583"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21.5833 4.6665V7.58317M21.5833 10.4998V7.58317M21.5833 7.58317H18.6667M21.5833 7.58317H24.5"
          stroke="#050505"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Ellipse
          cx="14"
          cy="15.1667"
          rx="4.66667"
          ry="4.66667"
          stroke="#050505"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
