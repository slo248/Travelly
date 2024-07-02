import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function CarIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 32 32" fill="none">
        <Path
          d="M5.25 9H26.75"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.25 15H26.75"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M26.75 24H5.25V8.00003C5.24835 7.6056 5.32481 7.21475 5.47499 6.85002C5.62517 6.4853 5.84609 6.15392 6.12499 5.87502C6.4039 5.59611 6.73527 5.3752 7.1 5.22502C7.46472 5.07484 7.85557 4.99837 8.25 5.00003H23.75C24.1444 4.99837 24.5353 5.07484 24.9 5.22502C25.2647 5.3752 25.5961 5.59611 25.875 5.87502C26.1539 6.15392 26.3748 6.4853 26.525 6.85002C26.6752 7.21475 26.7517 7.6056 26.75 8.00003V24Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M26.75 24V27C26.75 27.2652 26.6446 27.5196 26.4571 27.7071C26.2696 27.8946 26.0152 28 25.75 28H22.75C22.4848 28 22.2304 27.8946 22.0429 27.7071C21.8554 27.5196 21.75 27.2652 21.75 27V24"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.25 24V27C10.25 27.2652 10.1446 27.5196 9.95711 27.7071C9.76957 27.8946 9.51522 28 9.25 28H6.25C5.98478 28 5.73043 27.8946 5.54289 27.7071C5.35536 27.5196 5.25 27.2652 5.25 27V24"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.5 21C11.3284 21 12 20.3284 12 19.5C12 18.6716 11.3284 18 10.5 18C9.67157 18 9 18.6716 9 19.5C9 20.3284 9.67157 21 10.5 21Z"
          fill={color}
        />
        <Path
          d="M21.5 21C22.3284 21 23 20.3284 23 19.5C23 18.6716 22.3284 18 21.5 18C20.6716 18 20 18.6716 20 19.5C20 20.3284 20.6716 21 21.5 21Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}
