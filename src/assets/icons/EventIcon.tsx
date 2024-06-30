import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function EventIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 32 32" fill="none">
        <Path
          d="M4.7375 25.9876L11.4625 7.47509C11.5201 7.31668 11.6167 7.17539 11.7435 7.06434C11.8703 6.9533 12.0232 6.87611 12.1878 6.83994C12.3524 6.80378 12.5235 6.80981 12.6852 6.85747C12.8468 6.90514 12.9938 6.9929 13.1125 7.11259L24.8875 18.8876C25.0072 19.0063 25.0949 19.1533 25.1426 19.3149C25.1903 19.4766 25.1963 19.6477 25.1601 19.8123C25.124 19.9769 25.0468 20.1297 24.9357 20.2565C24.8247 20.3833 24.6834 20.48 24.525 20.5376L6.0125 27.2626C5.8344 27.3307 5.64039 27.3457 5.45392 27.306C5.26744 27.2662 5.09646 27.1733 4.96164 27.0385C4.82681 26.9036 4.7339 26.7327 4.69413 26.5462C4.65436 26.3597 4.66942 26.1657 4.7375 25.9876V25.9876Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21 9C21 9 21 6 24 6C27 6 27 3 27 3"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.8 24.7999L7.2 19.2"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M18 2V5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M27 14L29 16"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M27 10L30 9"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.6 12.6001L19.4 22.4001"
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
