import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function ShipIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 32 32" fill="none">
        <Path
          d="M16 6V3"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M28 20.0002C26.175 26.3752 17.725 28.6002 16.225 28.9502C16.0774 28.9878 15.9226 28.9878 15.775 28.9502C14.275 28.6002 5.825 26.3752 4 20.0002V15.7252C3.99998 15.5147 4.06643 15.3094 4.18988 15.1389C4.31333 14.9683 4.48748 14.841 4.6875 14.7752L15.6875 11.1002C15.8911 11.0376 16.1089 11.0376 16.3125 11.1002L27.3125 14.7752C27.5125 14.841 27.6867 14.9683 27.8101 15.1389C27.9336 15.3094 28 15.5147 28 15.7252V20.0002Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16 20.9998V11.0498"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7 14V7C7 6.73478 7.10536 6.48043 7.29289 6.29289C7.48043 6.10536 7.73478 6 8 6H24C24.2652 6 24.5196 6.10536 24.7071 6.29289C24.8946 6.48043 25 6.73478 25 7V14"
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
