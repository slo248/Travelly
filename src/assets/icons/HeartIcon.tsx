import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function HeartIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 24 24" fill="none">
        <Path
          d="M12.5344 19.8658L20.1281 12.272C21.9938 10.397 22.2656 7.33138 20.5031 5.372C20.0611 4.87823 19.5231 4.47977 18.9219 4.20096C18.3206 3.92215 17.6689 3.76885 17.0064 3.75042C16.344 3.73199 15.6847 3.84883 15.0689 4.09379C14.4532 4.33875 13.8938 4.70669 13.425 5.17513L12 6.6095L10.7719 5.372C8.89688 3.50638 5.83126 3.2345 3.87188 4.997C3.37811 5.43902 2.97965 5.97707 2.70084 6.57829C2.42203 7.1795 2.26872 7.83124 2.2503 8.4937C2.23187 9.15616 2.34871 9.81542 2.59367 10.4312C2.83863 11.047 3.20657 11.6063 3.67501 12.0751L11.4656 19.8658C11.6078 20.0066 11.7999 20.0856 12 20.0856C12.2001 20.0856 12.3922 20.0066 12.5344 19.8658V19.8658Z"
          stroke="#FEA36B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
