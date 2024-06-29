import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function PlaneIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 33 32" fill="none">
        <Path
          d="M26.8542 10.0501L22.6542 14.0001L26.6542 25.0001L23.6542 28.0001L17.6792 19.2501L14.6542 22.0001V25.0001L11.6542 28.0001L9.87916 22.7626L4.65416 21.0001L7.65416 18.0001H10.6542L13.6542 15.0001L4.65416 9.00008L7.65416 6.00008L18.6542 10.0001L22.6167 5.81258L22.5292 5.87508C23.0927 5.31149 23.8571 4.99487 24.6542 4.99487C25.4512 4.99487 26.2156 5.31149 26.7792 5.87508C27.3427 6.43866 27.6594 7.20305 27.6594 8.00008C27.6594 8.79711 27.3427 9.56149 26.7792 10.1251L26.8542 10.0501Z"
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
