import { StyleSheet, Text, View } from 'react-native';
import { FC } from 'react';
import { Svg, Path } from 'react-native-svg';

import { SvgProps } from '~/types/SvgProps';
import { Colors } from '~/styles/colors';

const Chevron: FC<SvgProps> = ({ color = Colors.paginatorActive }) => {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 13 22" fill="none">
        <Path
          d="M10.6667 20.3334L2.04045 11.7071C1.64993 11.3166 1.64993 10.6835 2.04045 10.2929L10.6667 1.66671"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export default Chevron;
