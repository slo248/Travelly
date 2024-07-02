import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function ChildIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9 12C9 12.2071 8.83211 12.375 8.625 12.375C8.41789 12.375 8.25 12.2071 8.25 12C8.25 11.7929 8.41789 11.625 8.625 11.625C8.83211 11.625 9 11.7929 9 12Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
        />
        <Path
          d="M15.75 12C15.75 12.2071 15.5821 12.375 15.375 12.375C15.1679 12.375 15 12.2071 15 12C15 11.7929 15.1679 11.625 15.375 11.625C15.5821 11.625 15.75 11.7929 15.75 12Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
        />
        <Path
          d="M14.4844 15.75C13.7481 16.239 12.8839 16.4998 12 16.4998C11.1161 16.4998 10.2519 16.239 9.51562 15.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 3C10.5 4.875 10.5 6.75 10.5 6.75C10.5 7.14782 10.658 7.52936 10.9393 7.81066C11.2206 8.09196 11.6022 8.25 12 8.25C12.3978 8.25 12.7794 8.09196 13.0607 7.81066C13.342 7.52936 13.5 7.14782 13.5 6.75"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
