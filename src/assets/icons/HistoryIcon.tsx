import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function HistoryIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 24 24" fill="none">
        <Path
          d="M5.52786 16.7023C6.6602 18.2608 8.3169 19.3584 10.1936 19.7934C12.0703 20.2284 14.0409 19.9716 15.7434 19.0701C17.446 18.1687 18.766 16.6832 19.4611 14.8865C20.1562 13.0898 20.1796 11.1027 19.527 9.29011C18.8745 7.47756 17.5898 5.96135 15.909 5.02005C14.2282 4.07875 12.2641 3.77558 10.3777 4.16623C8.49129 4.55689 6.80919 5.61514 5.64045 7.14656C4.47171 8.67797 3.89482 10.5797 4.01579 12.5023M4.01579 12.5023L2.51579 11.0023M4.01579 12.5023L5.51579 11.0023"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 8V12L15 15"
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
