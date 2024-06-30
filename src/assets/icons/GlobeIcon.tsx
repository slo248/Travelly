import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function GlobeIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 32 32" fill="none">
        <Path
          d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M26.775 21.3L19.9875 17.125C19.8707 17.0499 19.7381 17.0028 19.6 16.9875L16.7375 16.6C16.5239 16.5693 16.3062 16.6104 16.1185 16.7167C15.9307 16.823 15.7836 16.9886 15.7 17.1875L13.9875 21.025C13.907 21.2035 13.8807 21.4017 13.9118 21.595C13.9429 21.7883 14.0301 21.9683 14.1625 22.1125L16.5125 24.65C16.6187 24.7667 16.6966 24.9064 16.7399 25.0582C16.7833 25.21 16.791 25.3697 16.7625 25.525L16.275 28"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8.125 6.94995L7 9.59995C6.90201 9.83521 6.89754 10.099 6.9875 10.3375L8.425 14.1625C8.48118 14.3219 8.57735 14.4642 8.70429 14.5758C8.83123 14.6875 8.9847 14.7646 9.15 14.8L11.825 15.375C11.9735 15.405 12.1129 15.4692 12.2322 15.5625C12.3516 15.6558 12.4475 15.7756 12.5125 15.9125L12.9875 16.9C13.0719 17.0669 13.2004 17.2076 13.359 17.3068C13.5177 17.4059 13.7004 17.4598 13.8875 17.4625H15.575"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19.0625 4.38745L20.225 6.48745C20.3323 6.68488 20.3709 6.91241 20.3347 7.13419C20.2985 7.35598 20.1895 7.55941 20.025 7.71245L16.6625 10.75C16.6062 10.8037 16.5432 10.8499 16.475 10.8875L14.9375 11.7375C14.7909 11.8152 14.6284 11.858 14.4625 11.8625H11.7875C11.5904 11.8635 11.3979 11.9219 11.2336 12.0307C11.0693 12.1395 10.9403 12.2939 10.8625 12.475L9.825 14.9375"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
