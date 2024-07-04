import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function PetIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 24 24" fill="none">
        <Path
          d="M12 18V20.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9 13.125C9 13.3321 8.83211 13.5 8.625 13.5C8.41789 13.5 8.25 13.3321 8.25 13.125C8.25 12.9179 8.41789 12.75 8.625 12.75C8.83211 12.75 9 12.9179 9 13.125Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
        />
        <Path
          d="M15.75 13.125C15.75 13.3321 15.5821 13.5 15.375 13.5C15.1679 13.5 15 13.3321 15 13.125C15 12.9179 15.1679 12.75 15.375 12.75C15.5821 12.75 15.75 12.9179 15.75 13.125Z"
          fill={color}
          stroke={color}
          strokeWidth="1.5"
        />
        <Path
          d="M13.5 16.5L12 18L10.5 16.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.25 4.50014L19.4813 3.19701C19.5799 3.17219 19.6825 3.16767 19.7829 3.18374C19.8833 3.19982 19.9794 3.23614 20.0653 3.29051C20.1513 3.34487 20.2253 3.41615 20.2828 3.5C20.3403 3.58385 20.3802 3.67852 20.4 3.77826L21.9375 11.9908C22.0781 12.7595 21.0938 13.2095 20.6063 12.5908L14.25 4.50014Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.75 4.50014L4.51875 3.19701C4.42014 3.17219 4.31751 3.16767 4.2171 3.18374C4.11669 3.19982 4.02059 3.23614 3.93466 3.29051C3.84872 3.34487 3.77474 3.41615 3.71721 3.5C3.65968 3.58385 3.6198 3.67852 3.6 3.77826L2.0625 11.9908C1.92187 12.7595 2.90625 13.2095 3.39375 12.5908L9.75 4.50014Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.75 4.5H14.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M19.5 11.1846V17.2502C19.5 18.0458 19.1839 18.8089 18.6213 19.3715C18.0587 19.9341 17.2956 20.2502 16.5 20.2502H7.5C6.70435 20.2502 5.94129 19.9341 5.37868 19.3715C4.81607 18.8089 4.5 18.0458 4.5 17.2502V11.1846"
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
